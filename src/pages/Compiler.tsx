import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Play, Download, ChevronLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { getLanguageConfig } from "@/lib/languages";
import { executeCode, ExecutionResult } from "@/lib/piston";

const Compiler = () => {
  const { language = "python" } = useParams<{ language: string }>();
  const config = getLanguageConfig(language);
  
  const [code, setCode] = useState(config.defaultCode);
  const [result, setResult] = useState<ExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Update code when language changes
  useEffect(() => {
    const newConfig = getLanguageConfig(language);
    setCode(newConfig.defaultCode);
    setResult(null);
  }, [language]);

  // Handle web preview in iframe
  useEffect(() => {
    if (config.isWeb && iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(code);
        doc.close();
      }
    }
  }, [code, config.isWeb]);

  const handleRun = async () => {
    if (config.isWeb) {
      // For web languages, just update the iframe
      if (iframeRef.current) {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(code);
          doc.close();
        }
      }
      return;
    }

    setIsRunning(true);
    setResult(null);

    try {
      const executionResult = await executeCode(
        code,
        config.pistonLanguage,
        config.pistonVersion
      );
      setResult(executionResult);
    } catch {
      setResult({
        output: "",
        error: "Failed to execute code. Please try again.",
        isError: true,
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `main.${config.extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Run on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleRun();
    }
    // Handle Tab key for indentation
    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(newCode);
      // Restore cursor position
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Toolbar */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-lg font-semibold text-foreground">
                {config.name} Compiler
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="download" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button
                variant="run"
                size="sm"
                onClick={handleRun}
                disabled={isRunning}
              >
                {isRunning ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Play className="h-4 w-4 mr-2" />
                )}
                Run
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Editor and Output Split */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col border-r border-border">
          <div className="px-4 py-2 bg-muted/50 border-b border-border">
            <span className="text-sm font-medium text-muted-foreground">
              main.{config.extension}
            </span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 p-4 bg-[hsl(220,13%,10%)] text-[hsl(220,9%,90%)] font-mono text-sm resize-none focus:outline-none code-editor"
            spellCheck={false}
            placeholder="Write your code here..."
          />
        </div>

        {/* Output Panel */}
        <div className="flex-1 flex flex-col min-h-[300px] lg:min-h-0">
          <div className="px-4 py-2 bg-muted/50 border-b border-border">
            <span className="text-sm font-medium text-muted-foreground">
              {config.isWeb ? "Preview" : "Output"}
            </span>
          </div>
          
          {config.isWeb ? (
            <iframe
              ref={iframeRef}
              className="flex-1 w-full bg-card"
              sandbox="allow-scripts allow-same-origin"
              title="Preview"
            />
          ) : (
            <div className="flex-1 p-4 bg-[hsl(220,13%,14%)] font-mono text-sm overflow-auto">
              {isRunning ? (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Running...</span>
                </div>
              ) : result ? (
                <div className="space-y-2">
                  {result.output && (
                    <pre className="text-[hsl(220,9%,90%)] whitespace-pre-wrap">
                      {result.output}
                    </pre>
                  )}
                  {result.error && (
                    <pre className="text-error-foreground bg-error-bg p-3 rounded-md whitespace-pre-wrap">
                      {result.error}
                    </pre>
                  )}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Click "Run" to execute your code (or press Ctrl+Enter)
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Compiler;
