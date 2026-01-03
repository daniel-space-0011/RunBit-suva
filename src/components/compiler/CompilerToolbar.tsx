import { Play, RotateCcw, Download, Copy, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageConfig } from "@/lib/languages";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface CompilerToolbarProps {
  config: LanguageConfig;
  code: string;
  isRunning: boolean;
  onRun: () => void;
  onReset: () => void;
  onDownload: () => void;
}

const CompilerToolbar = ({
  config,
  code,
  isRunning,
  onRun,
  onReset,
  onDownload,
}: CompilerToolbarProps) => {
  const navigate = useNavigate();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "Copied!",
        description: "Code copied to clipboard",
      });
    } catch {
      toast({
        title: "Failed to copy",
        description: "Could not copy code to clipboard",
        variant: "destructive",
      });
    }
  };

  const getLanguageIcon = (slug: string) => {
    const iconMap: Record<string, string> = {
      python: "python",
      javascript: "javascript",
      java: "java",
      c: "c",
      cpp: "cplusplus",
      csharp: "csharp",
      php: "php",
      ruby: "ruby",
      go: "go",
      rust: "rust",
      typescript: "typescript",
      lua: "lua",
      kotlin: "kotlin",
      swift: "swift",
      html: "html5",
      css: "css3",
      react: "react",
      nodejs: "nodejs",
      mysql: "mysql",
      postgresql: "postgresql",
      mongodb: "mongodb",
      sqlite: "sqlite",
    };
    return iconMap[slug] || slug;
  };

  return (
    <div className="border-b border-border bg-background px-3 sm:px-4 py-3 max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Mobile: Top row with Back and Run */}
        <div className="flex items-center justify-between sm:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button
            variant="run"
            size="sm"
            onClick={onRun}
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

        {/* Mobile: Second row with language info and icons */}
        <div className="flex items-center justify-between sm:hidden">
          <div className="flex items-center gap-2">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${getLanguageIcon(config.slug)}/${getLanguageIcon(config.slug)}-original.svg`}
              alt={config.name}
              className="h-6 w-6"
              onError={(e) => {
                e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${getLanguageIcon(config.slug)}/${getLanguageIcon(config.slug)}-plain.svg`;
              }}
            />
            <div>
              <h1 className="text-sm font-semibold text-foreground">{config.name}</h1>
              <p className="text-xs text-muted-foreground">v{config.pistonVersion}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={onDownload} title="Download" className="h-10 w-10">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCopy} title="Copy" className="h-10 w-10">
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onReset} title="Reset" className="h-10 w-10">
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop: Single row layout */}
        <div className="hidden sm:flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="flex items-center gap-3">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${getLanguageIcon(config.slug)}/${getLanguageIcon(config.slug)}-original.svg`}
              alt={config.name}
              className="h-8 w-8"
              onError={(e) => {
                e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${getLanguageIcon(config.slug)}/${getLanguageIcon(config.slug)}-plain.svg`;
              }}
            />
            <div>
              <h1 className="text-lg font-semibold text-foreground">{config.name}</h1>
              <p className="text-xs text-muted-foreground">v{config.pistonVersion}</p>
            </div>
          </div>
        </div>

        {/* Desktop: Actions */}
        <div className="hidden sm:flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onDownload} title="Download">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleCopy} title="Copy">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onReset} title="Reset">
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="run"
            size="sm"
            onClick={onRun}
            disabled={isRunning}
            className="ml-2"
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
  );
};

export default CompilerToolbar;
