import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CompilerToolbar from "@/components/compiler/CompilerToolbar";
import CodeEditor from "@/components/compiler/CodeEditor";
import OutputPanel from "@/components/compiler/OutputPanel";
import { getLanguageConfig } from "@/lib/languages";
import { executeCode, ExecutionResult } from "@/lib/piston";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const Compiler = () => {
  const { language = "python" } = useParams<{ language: string }>();
  const config = getLanguageConfig(language);
  const { session, signOut } = useAuth();

  const [code, setCode] = useState(config.defaultCode);
  const [result, setResult] = useState<ExecutionResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    }
  };

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
      if (iframeRef.current) {
        const doc =
          iframeRef.current.contentDocument ||
          iframeRef.current.contentWindow?.document;
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

  const handleReset = () => {
    setCode(config.defaultCode);
    setResult(null);
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar session={session} onLogout={handleLogout} />

      {/* Compiler Toolbar */}
      <CompilerToolbar
        config={config}
        code={code}
        isRunning={isRunning}
        onRun={handleRun}
        onReset={handleReset}
        onDownload={handleDownload}
      />

      {/* Editor and Output */}
      <div className="flex-1 flex flex-col">
        <CodeEditor
          code={code}
          onChange={setCode}
          onRun={handleRun}
          languageName={config.name}
        />
        <OutputPanel
          result={result}
          isRunning={isRunning}
          isWeb={config.isWeb}
          iframeRef={iframeRef}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Compiler;
