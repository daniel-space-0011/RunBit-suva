import { useState } from "react";
import { Link } from "react-router-dom";
import { Code, Play, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const categories = ["All", "Web", "Data Science", "Algorithms", "Basics"];

const examples = [
  {
    id: 1,
    title: "Hello World",
    language: "Python",
    slug: "python",
    category: "Basics",
    code: `print("Hello, World!")`,
  },
  {
    id: 2,
    title: "Hello World",
    language: "JavaScript",
    slug: "javascript",
    category: "Basics",
    code: `console.log("Hello, World!");`,
  },
  {
    id: 3,
    title: "Hello World",
    language: "C++",
    slug: "cpp",
    category: "Basics",
    code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
  },
  {
    id: 4,
    title: "Hello World",
    language: "Java",
    slug: "java",
    category: "Basics",
    code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  },
  {
    id: 5,
    title: "Bubble Sort",
    language: "Python",
    slug: "python",
    category: "Algorithms",
    code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

print(bubble_sort([64, 34, 25, 12, 22]))`,
  },
  {
    id: 6,
    title: "Fibonacci",
    language: "JavaScript",
    slug: "javascript",
    category: "Algorithms",
    code: `function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}`,
  },
  {
    id: 7,
    title: "Data Analysis",
    language: "Python",
    slug: "python",
    category: "Data Science",
    code: `# Simple data analysis
data = [23, 45, 67, 89, 12, 34, 56, 78]

print(f"Mean: {sum(data) / len(data):.2f}")
print(f"Max: {max(data)}")
print(f"Min: {min(data)}")`,
  },
  {
    id: 8,
    title: "DOM Manipulation",
    language: "JavaScript",
    slug: "javascript",
    category: "Web",
    code: `// DOM example (browser-only)
const element = document.createElement('div');
element.textContent = 'Hello from JS!';
element.style.color = 'green';
console.log(element.outerHTML);`,
  },
];

const Examples = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { session, signOut } = useAuth();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({ title: "Logout failed", description: error.message, variant: "destructive" });
    }
  };

  const filteredExamples =
    activeCategory === "All"
      ? examples
      : examples.filter((ex) => ex.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar session={session} onLogout={handleLogout} />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Code Examples</h1>
            <p className="text-lg text-muted-foreground">
              Explore ready-to-run examples across different programming languages and categories.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <Filter className="h-4 w-4 text-muted-foreground mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExamples.map((example) => (
              <div
                key={example.id}
                className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{example.title}</h3>
                      <p className="text-xs text-muted-foreground">{example.language}</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                    {example.category}
                  </span>
                </div>

                {/* Code Preview */}
                <div className="bg-[hsl(var(--code-bg))] p-4 h-32 overflow-hidden">
                  <pre className="text-xs font-mono text-[hsl(var(--code-foreground))] leading-relaxed">
                    {example.code}
                  </pre>
                </div>

                {/* Card Footer */}
                <div className="p-4 border-t border-border">
                  <Link to={`/compiler/${example.slug}`}>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Play className="h-4 w-4" />
                      Try it out
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Examples;
