import { useRef, useEffect } from "react";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  languageName: string;
}

const CodeEditor = ({ code, onChange, onRun, languageName }: CodeEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  const lines = code.split("\n");
  const lineCount = lines.length;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Run on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      onRun();
    }
    // Handle Tab key for indentation
    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      onChange(newCode);
      // Restore cursor position
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  const handleScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="px-4 py-2 bg-muted/50 border-b border-border">
        <span className="text-sm font-medium text-muted-foreground">
          Code Editor - {languageName}
        </span>
      </div>
      <div className="flex flex-1 min-h-[300px] lg:min-h-[400px]">
        {/* Line Numbers */}
        <div
          ref={lineNumbersRef}
          className="bg-[hsl(220,13%,12%)] text-muted-foreground font-mono text-sm py-4 px-3 select-none overflow-hidden border-r border-border/50"
          style={{ minWidth: "3rem" }}
        >
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i + 1} className="leading-6 text-right">
              {i + 1}
            </div>
          ))}
        </div>
        {/* Code Input */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          className="flex-1 p-4 bg-[hsl(220,13%,10%)] text-[hsl(220,9%,90%)] font-mono text-sm resize-none focus:outline-none leading-6"
          spellCheck={false}
          placeholder="Write your code here..."
        />
      </div>
    </div>
  );
};

export default CodeEditor;
