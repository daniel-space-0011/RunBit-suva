import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Code2, Database, Globe, Cpu,
  FileCode, Coffee, Hash, Cog, Gem,
  Boxes, Server, Braces, FileJson
} from "lucide-react";

type Tab = "POPULAR" | "PROGRAMMING" | "WEB" | "DATABASES";

interface Language {
  name: string;
  slug: string;
  icon: React.ReactNode;
  color: string;
}

const languages: Record<Tab, Language[]> = {
  POPULAR: [
    { name: "HTML", slug: "html", icon: <Globe className="h-6 w-6" />, color: "text-orange-500" },
    { name: "Python", slug: "python", icon: <FileCode className="h-6 w-6" />, color: "text-blue-500" },
    { name: "JavaScript", slug: "javascript", icon: <Braces className="h-6 w-6" />, color: "text-yellow-500" },
    { name: "Java", slug: "java", icon: <Coffee className="h-6 w-6" />, color: "text-red-600" },
    { name: "MySQL", slug: "mysql", icon: <Database className="h-6 w-6" />, color: "text-blue-600" },
    { name: "C", slug: "c", icon: <Code2 className="h-6 w-6" />, color: "text-blue-700" },
    { name: "C++", slug: "cpp", icon: <Code2 className="h-6 w-6" />, color: "text-blue-500" },
    { name: "PHP", slug: "php", icon: <FileCode className="h-6 w-6" />, color: "text-purple-600" },
    { name: "C#", slug: "csharp", icon: <Hash className="h-6 w-6" />, color: "text-purple-500" },
    { name: "Assembly", slug: "assembly", icon: <Cpu className="h-6 w-6" />, color: "text-gray-600" },
    { name: "Lua", slug: "lua", icon: <FileCode className="h-6 w-6" />, color: "text-blue-400" },
    { name: "PL/SQL", slug: "plsql", icon: <Database className="h-6 w-6" />, color: "text-red-500" },
    { name: "NodeJS", slug: "nodejs", icon: <Server className="h-6 w-6" />, color: "text-green-600" },
    { name: "MongoDB", slug: "mongodb", icon: <Database className="h-6 w-6" />, color: "text-green-500" },
    { name: "Groovy", slug: "groovy", icon: <FileCode className="h-6 w-6" />, color: "text-blue-400" },
    { name: "React", slug: "react", icon: <Boxes className="h-6 w-6" />, color: "text-cyan-500" },
    { name: "PostgreSQL", slug: "postgresql", icon: <Database className="h-6 w-6" />, color: "text-blue-400" },
    { name: "Ruby", slug: "ruby", icon: <Gem className="h-6 w-6" />, color: "text-red-500" },
  ],
  PROGRAMMING: [
    { name: "Python", slug: "python", icon: <FileCode className="h-6 w-6" />, color: "text-blue-500" },
    { name: "Java", slug: "java", icon: <Coffee className="h-6 w-6" />, color: "text-red-600" },
    { name: "C", slug: "c", icon: <Code2 className="h-6 w-6" />, color: "text-blue-700" },
    { name: "C++", slug: "cpp", icon: <Code2 className="h-6 w-6" />, color: "text-blue-500" },
    { name: "C#", slug: "csharp", icon: <Hash className="h-6 w-6" />, color: "text-purple-500" },
    { name: "Ruby", slug: "ruby", icon: <Gem className="h-6 w-6" />, color: "text-red-500" },
    { name: "Go", slug: "go", icon: <Cog className="h-6 w-6" />, color: "text-cyan-500" },
    { name: "Rust", slug: "rust", icon: <Cog className="h-6 w-6" />, color: "text-orange-600" },
    { name: "Swift", slug: "swift", icon: <FileCode className="h-6 w-6" />, color: "text-orange-500" },
    { name: "Kotlin", slug: "kotlin", icon: <FileCode className="h-6 w-6" />, color: "text-purple-500" },
    { name: "Scala", slug: "scala", icon: <FileCode className="h-6 w-6" />, color: "text-red-500" },
    { name: "Lua", slug: "lua", icon: <FileCode className="h-6 w-6" />, color: "text-blue-400" },
  ],
  WEB: [
    { name: "HTML", slug: "html", icon: <Globe className="h-6 w-6" />, color: "text-orange-500" },
    { name: "CSS", slug: "css", icon: <Globe className="h-6 w-6" />, color: "text-blue-500" },
    { name: "JavaScript", slug: "javascript", icon: <Braces className="h-6 w-6" />, color: "text-yellow-500" },
    { name: "TypeScript", slug: "typescript", icon: <FileCode className="h-6 w-6" />, color: "text-blue-600" },
    { name: "React", slug: "react", icon: <Boxes className="h-6 w-6" />, color: "text-cyan-500" },
    { name: "PHP", slug: "php", icon: <FileCode className="h-6 w-6" />, color: "text-purple-600" },
    { name: "NodeJS", slug: "nodejs", icon: <Server className="h-6 w-6" />, color: "text-green-600" },
  ],
  DATABASES: [
    { name: "MySQL", slug: "mysql", icon: <Database className="h-6 w-6" />, color: "text-blue-600" },
    { name: "PostgreSQL", slug: "postgresql", icon: <Database className="h-6 w-6" />, color: "text-blue-400" },
    { name: "MongoDB", slug: "mongodb", icon: <Database className="h-6 w-6" />, color: "text-green-500" },
    { name: "SQLite", slug: "sqlite", icon: <Database className="h-6 w-6" />, color: "text-blue-500" },
    { name: "Redis", slug: "redis", icon: <Database className="h-6 w-6" />, color: "text-red-500" },
    { name: "Oracle", slug: "oracle", icon: <Database className="h-6 w-6" />, color: "text-red-600" },
  ],
};

const tabs: Tab[] = ["POPULAR", "PROGRAMMING", "WEB", "DATABASES"];

const LanguageCards = () => {
  const [activeTab, setActiveTab] = useState<Tab>("POPULAR");
  const navigate = useNavigate();

  const handleLanguageClick = (slug: string) => {
    navigate(`/compiler/${slug}`);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-1 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium transition-all relative ${
                  activeTab === tab
                    ? "text-secondary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {languages[activeTab].map((lang, index) => (
            <button
              key={lang.slug}
              onClick={() => handleLanguageClick(lang.slug)}
              className="flex items-center justify-between p-4 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-200 group animate-fade-in"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <span className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                {lang.name}
              </span>
              <span className={`${lang.color} transition-transform group-hover:scale-110`}>
                {lang.icon}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageCards;
