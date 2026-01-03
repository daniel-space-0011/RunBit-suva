import { Loader2 } from "lucide-react";
import { ExecutionResult } from "@/lib/piston";

interface OutputPanelProps {
  result: ExecutionResult | null;
  isRunning: boolean;
  isWeb: boolean;
  iframeRef: React.RefObject<HTMLIFrameElement>;
}

const OutputPanel = ({ result, isRunning, isWeb, iframeRef }: OutputPanelProps) => {
  return (
    <div className="mx-4 mt-4 mb-4">
      <div className="border border-border rounded-lg overflow-hidden bg-card">
        {/* Header */}
        <div className="px-4 py-2 bg-muted/50 border-b border-border">
          <span className="text-sm font-medium text-foreground">
            {isWeb ? "Preview" : "Output"}
          </span>
        </div>
        {/* Content */}
        <div className="min-h-[150px] p-4">
          {isWeb ? (
            <iframe
              ref={iframeRef}
              className="w-full h-[200px] bg-white rounded border border-border"
              title="Web Preview"
              sandbox="allow-scripts allow-same-origin"
            />
          ) : isRunning ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span>Running code...</span>
            </div>
          ) : result ? (
            <pre
              className={`font-mono text-sm whitespace-pre-wrap ${
                result.isError ? "text-destructive" : "text-foreground"
              }`}
            >
              {result.output || result.error || "No output"}
            </pre>
          ) : (
            <p className="text-muted-foreground text-sm">
              Click "Run" to execute your code...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutputPanel;
