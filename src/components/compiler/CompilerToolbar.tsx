import { Play, Download, RotateCcw, Copy, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageConfig } from "@/lib/languages";
import { toast } from "@/hooks/use-toast";

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
    };
    return iconMap[slug] || slug;
  };

  return (
    <div className="border-b border-border bg-card px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${getLanguageIcon(config.slug)}/${getLanguageIcon(config.slug)}-original.svg`}
            alt={config.name}
            className="h-6 w-6"
            onError={(e) => {
              e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${getLanguageIcon(config.slug)}/${getLanguageIcon(config.slug)}-plain.svg`;
            }}
          />
          <span className="font-medium text-foreground">{config.name}</span>
          <span className="text-xs text-muted-foreground">
            v{config.pistonVersion}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onReset}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            title="Reset"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            title="Copy"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onDownload}
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            title="Download"
          >
            <Download className="h-4 w-4" />
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
