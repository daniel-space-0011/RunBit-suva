import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Book, Code, Keyboard, ChevronRight, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const docSections = [
  { id: "getting-started", title: "Getting Started", icon: Book },
  { id: "supported-languages", title: "Supported Languages", icon: Code },
  { id: "keyboard-shortcuts", title: "Keyboard Shortcuts", icon: Keyboard },
];

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const { session, signOut } = useAuth();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({ title: "Logout failed", description: error.message, variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar session={session} onLogout={handleLogout} />
      
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 border-r border-border bg-muted/30 p-6 sticky top-0 h-screen overflow-y-auto">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <nav className="space-y-2">
            {docSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <section.icon className="h-4 w-4" />
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Nav */}
        <div className="lg:hidden border-b border-border p-4 bg-muted/30">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {docSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <section.icon className="h-3 w-3" />
                {section.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-12 max-w-4xl">
          {activeSection === "getting-started" && (
            <section className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Getting Started</h1>
                <p className="text-muted-foreground text-lg">
                  Welcome to RunBit! Get up and running with our online code compiler in minutes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Step 1: Choose a Language
                  </h2>
                  <p className="text-muted-foreground pl-7">
                    Select from 50+ programming languages on our homepage. Each language card shows the language name and version.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Step 2: Write Your Code
                  </h2>
                  <p className="text-muted-foreground pl-7">
                    Use our full-featured code editor with syntax highlighting, line numbers, and auto-indentation.
                  </p>
                  <div className="ml-7 bg-[hsl(var(--code-bg))] text-[hsl(var(--code-foreground))] rounded-lg p-4 font-mono text-sm">
                    <pre>{`# Example: Hello World in Python
print("Hello, RunBit!")`}</pre>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-primary" />
                    Step 3: Run & Share
                  </h2>
                  <p className="text-muted-foreground pl-7">
                    Click the <span className="text-primary font-medium">Run</span> button to execute your code. Download or copy your code anytime.
                  </p>
                </div>
              </div>
            </section>
          )}

          {activeSection === "supported-languages" && (
            <section className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Supported Languages</h1>
                <p className="text-muted-foreground text-lg">
                  RunBit supports 50+ programming languages. Here are some popular ones:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Python", version: "3.10.0", slug: "python" },
                  { name: "JavaScript", version: "18.15.0", slug: "javascript" },
                  { name: "Java", version: "15.0.2", slug: "java" },
                  { name: "C++", version: "10.2.0", slug: "cpp" },
                  { name: "C#", version: "6.12.0", slug: "csharp" },
                  { name: "Go", version: "1.16.2", slug: "go" },
                  { name: "Rust", version: "1.68.2", slug: "rust" },
                  { name: "TypeScript", version: "5.0.3", slug: "typescript" },
                ].map((lang) => (
                  <Link
                    key={lang.slug}
                    to={`/compiler/${lang.slug}`}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Terminal className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{lang.name}</h3>
                      <p className="text-sm text-muted-foreground">v{lang.version}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {activeSection === "keyboard-shortcuts" && (
            <section className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Keyboard Shortcuts</h1>
                <p className="text-muted-foreground text-lg">
                  Speed up your workflow with these keyboard shortcuts.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { keys: ["Ctrl", "Enter"], action: "Run code" },
                  { keys: ["Ctrl", "S"], action: "Download code" },
                  { keys: ["Ctrl", "C"], action: "Copy selected code" },
                  { keys: ["Ctrl", "Z"], action: "Undo" },
                  { keys: ["Ctrl", "Shift", "Z"], action: "Redo" },
                  { keys: ["Tab"], action: "Indent line" },
                  { keys: ["Shift", "Tab"], action: "Outdent line" },
                ].map((shortcut, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg border border-border"
                  >
                    <span className="text-foreground">{shortcut.action}</span>
                    <div className="flex items-center gap-1">
                      {shortcut.keys.map((key, keyIdx) => (
                        <span key={keyIdx}>
                          <kbd className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm font-mono">
                            {key}
                          </kbd>
                          {keyIdx < shortcut.keys.length - 1 && (
                            <span className="text-muted-foreground mx-1">+</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
