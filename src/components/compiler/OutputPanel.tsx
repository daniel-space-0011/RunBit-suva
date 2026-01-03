import { Loader2 } from "lucide-react";
import { ExecutionResult } from "@/lib/piston";

interface OutputPanelProps {
  result: ExecutionResult | null;
  isRunning: boolean;
  isWeb: boolean;
  iframeRef?: React.RefObject<HTMLIFrameElement>;
}

const OutputPanel = ({ result, isRunning, isWeb, iframeRef }: OutputPanelProps) => {
  return (
    <div className="flex flex-col min-h-[200px] lg:min-h-[250px]">
      <div className="px-4 py-2 bg-muted/50 border-b border-border">
        <span className="text-sm font-medium text-muted-foreground">
          {isWeb ? "Preview" : "Output"}
        </span>
      </div>

      {isWeb ? (
        <iframe
          ref={iframeRef}
          className="flex-1 w-full bg-card min-h-[200px]"
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
              <span className="text-primary">{">_"}</span> Click "Run" to execute your code
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default OutputPanel;
