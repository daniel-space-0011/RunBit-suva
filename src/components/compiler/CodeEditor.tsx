import { useRef } from "react";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  extension: string;
}

const CodeEditor = ({ code, onChange, onRun, extension }: CodeEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      onRun();
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      onChange(newCode);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="mx-4 mt-4">
      <div className="border border-border rounded-lg overflow-hidden bg-card">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
          <span className="text-sm font-medium text-foreground">Code</span>
          <span className="text-sm text-muted-foreground">main.{extension}</span>
        </div>
        {/* Editor */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full min-h-[200px] p-4 bg-card text-foreground font-mono text-sm resize-none focus:outline-none"
          spellCheck={false}
          placeholder="Write your code here..."
        />
      </div>
    </div>
  );
};

export default CodeEditor;
