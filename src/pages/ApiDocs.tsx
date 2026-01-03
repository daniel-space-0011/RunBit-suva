import { useState } from "react";
import { Code, Send, Server, FileJson, ChevronDown, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const endpoints = [
  {
    id: "execute",
    method: "POST",
    path: "/execute",
    title: "Execute Code",
    description: "Compile and run code in any supported language.",
    request: {
      language: "string",
      version: "string",
      files: [{ name: "string", content: "string" }],
    },
    response: {
      run: {
        stdout: "string",
        stderr: "string",
        code: "number",
        signal: "string | null",
        output: "string",
      },
    },
    example: `{
  "language": "python",
  "version": "3.10.0",
  "files": [
    {
      "name": "main.py",
      "content": "print('Hello, World!')"
    }
  ]
}`,
    responseExample: `{
  "run": {
    "stdout": "Hello, World!\\n",
    "stderr": "",
    "code": 0,
    "signal": null,
    "output": "Hello, World!\\n"
  }
}`,
  },
  {
    id: "languages",
    method: "GET",
    path: "/languages",
    title: "List Languages",
    description: "Get a list of all supported programming languages and their versions.",
    request: null,
    response: [
      {
        language: "string",
        version: "string",
        aliases: ["string"],
      },
    ],
    example: null,
    responseExample: `[
  {
    "language": "python",
    "version": "3.10.0",
    "aliases": ["py", "python3"]
  },
  {
    "language": "javascript",
    "version": "18.15.0",
    "aliases": ["js", "node"]
  }
]`,
  },
];

const ApiDocs = () => {
  const [expandedEndpoint, setExpandedEndpoint] = useState<string | null>("execute");
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

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">API Reference</h1>
            <p className="text-lg text-muted-foreground">
              Integrate RunBit's powerful code execution engine into your applications. 
              Our REST API allows you to compile and run code in 50+ languages.
            </p>
          </div>

          {/* Base URL */}
          <div className="mb-12 p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-3">
              <Server className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Base URL</h2>
            </div>
            <div className="bg-[hsl(var(--code-bg))] text-[hsl(var(--code-foreground))] rounded-lg p-4 font-mono text-sm">
              https://api.runbit.dev/v1
            </div>
          </div>

          {/* Endpoints */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              Endpoints
            </h2>

            {endpoints.map((endpoint) => (
              <div
                key={endpoint.id}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                {/* Endpoint Header */}
                <button
                  onClick={() =>
                    setExpandedEndpoint(
                      expandedEndpoint === endpoint.id ? null : endpoint.id
                    )
                  }
                  className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-md text-sm font-mono font-medium ${
                        endpoint.method === "POST"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <span className="font-mono text-foreground">{endpoint.path}</span>
                    <span className="text-muted-foreground hidden sm:inline">
                      — {endpoint.title}
                    </span>
                  </div>
                  {expandedEndpoint === endpoint.id ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>

                {/* Endpoint Details */}
                {expandedEndpoint === endpoint.id && (
                  <div className="border-t border-border p-6 space-y-6">
                    <p className="text-muted-foreground">{endpoint.description}</p>

                    {/* Request */}
                    {endpoint.example && (
                      <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <Send className="h-4 w-4 text-primary" />
                          Request Body
                        </h3>
                        <div className="bg-[hsl(var(--code-bg))] rounded-lg overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-2 border-b border-border/20">
                            <span className="text-xs text-muted-foreground font-mono">
                              application/json
                            </span>
                          </div>
                          <pre className="p-4 text-sm font-mono text-[hsl(var(--code-foreground))] overflow-x-auto">
                            {endpoint.example}
                          </pre>
                        </div>
                      </div>
                    )}

                    {/* Response */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <FileJson className="h-4 w-4 text-primary" />
                        Response
                      </h3>
                      <div className="bg-[hsl(var(--code-bg))] rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-border/20">
                          <span className="text-xs text-muted-foreground font-mono">
                            200 OK
                          </span>
                        </div>
                        <pre className="p-4 text-sm font-mono text-[hsl(var(--code-foreground))] overflow-x-auto">
                          {endpoint.responseExample}
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApiDocs;
