import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User, Share2, Bookmark, Code, Lightbulb, Zap, CheckCircle, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

// Blog post data - in a real app this would come from a CMS or database
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: React.ReactNode;
}> = {
  "introducing-runbit-v2": {
    title: "Introducing RunBit 2.0: Faster, Smarter, Better",
    excerpt: "We're excited to announce the biggest update to RunBit yet.",
    author: "Suva",
    date: "January 1, 2026",
    readTime: "5 min read",
    category: "Product Update",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          We're thrilled to announce <strong className="text-foreground">RunBit 2.0</strong> — the most significant update since we launched. After months of development and feedback from thousands of developers, we've rebuilt the platform from the ground up to deliver a faster, smarter, and more powerful coding experience.
        </p>

        {/* Feature Highlight Box */}
        <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">What's New in 2.0</h3>
          </div>
          <ul className="space-y-3">
            {[
              "50+ programming languages supported",
              "3x faster code execution",
              "Redesigned code editor with IntelliSense",
              "Dark mode support across all pages",
              "Mobile-friendly responsive design"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Lightning-Fast Execution</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Speed matters when you're learning or prototyping. We've optimized our backend infrastructure with distributed sandboxes that spin up in milliseconds. Your code now executes up to 3x faster than before.
        </p>

        {/* Code Block Example */}
        <div className="my-8 rounded-xl overflow-hidden border border-border">
          <div className="bg-muted/80 px-4 py-3 flex items-center justify-between border-b border-border">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Python Example</span>
            </div>
            <Badge variant="outline" className="text-xs">Try it live</Badge>
          </div>
          <pre className="bg-muted/30 p-4 overflow-x-auto">
            <code className="text-sm text-foreground font-mono">{`# Hello World in Python
def greet(name):
    return f"Hello, {name}! Welcome to RunBit 2.0"

print(greet("Developer"))
# Output: Hello, Developer! Welcome to RunBit 2.0`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Redesigned Editor Experience</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The new editor features syntax highlighting for all supported languages, intelligent code completion, and real-time error detection. We've partnered with industry-leading tools to bring you a professional-grade coding environment right in your browser.
        </p>

        {/* Stats Grid */}
        <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "50+", label: "Languages" },
            { value: "3x", label: "Faster" },
            { value: "10M+", label: "Executions" },
            { value: "24/7", label: "Uptime" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-muted/50 border border-border">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What's Coming Next</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          This is just the beginning. We're already working on collaborative coding, project saving, and an API for developers who want to integrate RunBit into their own applications. Stay tuned for more updates!
        </p>

        {/* Call to Action */}
        <div className="my-10 p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 border border-primary/30 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Try RunBit 2.0?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start coding in seconds with our free online compiler. No signup required.
          </p>
          <Button size="lg" asChild>
            <Link to="/compiler/python">
              <Code className="h-5 w-5 mr-2" />
              Open Compiler
            </Link>
          </Button>
        </div>
      </>
    ),
  },
  "10-python-tips": {
    title: "10 Python Tips Every Beginner Should Know",
    excerpt: "Boost your Python skills with these essential tips and tricks.",
    author: "Suva",
    date: "December 28, 2025",
    readTime: "8 min read",
    category: "Tips & Tricks",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&h=600&fit=crop",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Python is known for its simplicity and readability, but there are many hidden gems that can make your code even cleaner and more efficient. Here are 10 tips every Python beginner should know.
        </p>

        {/* Tip Cards */}
        {[
          {
            num: 1,
            title: "Use List Comprehensions",
            desc: "List comprehensions provide a concise way to create lists based on existing lists or iterables.",
            code: `# Instead of this:
squares = []
for x in range(10):
    squares.append(x**2)

# Use this:
squares = [x**2 for x in range(10)]`
          },
          {
            num: 2,
            title: "F-Strings for Formatting",
            desc: "F-strings (Python 3.6+) are the most readable way to format strings.",
            code: `name = "RunBit"
version = 2.0
print(f"Welcome to {name} version {version}!")
# Output: Welcome to RunBit version 2.0!`
          },
          {
            num: 3,
            title: "The Walrus Operator :=",
            desc: "Assign values to variables as part of an expression (Python 3.8+).",
            code: `# Check length and use it in one line
if (n := len(my_list)) > 10:
    print(f"List is too long ({n} elements)")`
          },
        ].map((tip) => (
          <div key={tip.num} className="my-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                {tip.num}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{tip.title}</h3>
                <p className="text-muted-foreground mt-1">{tip.desc}</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border ml-14">
              <pre className="bg-muted/30 p-4 overflow-x-auto">
                <code className="text-sm text-foreground font-mono">{tip.code}</code>
              </pre>
            </div>
          </div>
        ))}

        {/* Pro Tip Box */}
        <div className="my-8 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="h-6 w-6 text-amber-500" />
            <h3 className="text-lg font-bold text-foreground">Pro Tip</h3>
          </div>
          <p className="text-muted-foreground">
            Use the <code className="bg-muted px-2 py-0.5 rounded text-sm">enumerate()</code> function when you need both the index and value in a loop. It's cleaner than managing a counter variable manually!
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Keep practicing these techniques and they'll become second nature. Happy coding!
        </p>
      </>
    ),
  },
  "javascript-vs-typescript": {
    title: "JavaScript vs TypeScript: Which Should You Learn?",
    excerpt: "A comprehensive comparison to help you decide which language fits your learning goals.",
    author: "Suva",
    date: "December 22, 2025",
    readTime: "10 min read",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          If you're starting your web development journey, you've probably wondered whether to learn JavaScript or TypeScript first. Let's break down the differences and help you make an informed decision.
        </p>

        {/* Comparison Table */}
        <div className="my-8 rounded-xl border border-border overflow-hidden">
          <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
            <div className="p-4 font-semibold text-foreground">Feature</div>
            <div className="p-4 font-semibold text-foreground text-center border-l border-border">JavaScript</div>
            <div className="p-4 font-semibold text-foreground text-center border-l border-border">TypeScript</div>
          </div>
          {[
            { feature: "Type System", js: "Dynamic", ts: "Static" },
            { feature: "Learning Curve", js: "Easier", ts: "Moderate" },
            { feature: "Error Detection", js: "Runtime", ts: "Compile-time" },
            { feature: "IDE Support", js: "Good", ts: "Excellent" },
            { feature: "Job Market", js: "Huge", ts: "Growing Fast" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-3 border-b border-border last:border-b-0">
              <div className="p-4 text-muted-foreground">{row.feature}</div>
              <div className="p-4 text-center border-l border-border text-muted-foreground">{row.js}</div>
              <div className="p-4 text-center border-l border-border text-primary font-medium">{row.ts}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Our Recommendation</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If you're a complete beginner, start with JavaScript. Once you're comfortable with the basics, TypeScript will feel like a natural upgrade that catches bugs before they happen.
        </p>

        <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
          <p className="text-foreground font-medium">
            💡 Try both languages on RunBit! We support JavaScript, TypeScript, and 50+ other languages.
          </p>
        </div>
      </>
    ),
  },
  "new-languages-december": {
    title: "New Languages Added: Kotlin, Scala, and More",
    excerpt: "We've expanded our language support with 5 new programming languages this month.",
    author: "Suva",
    date: "December 15, 2025",
    readTime: "3 min read",
    category: "Product Update",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Great news for developers! We've added 5 new programming languages to RunBit this month, bringing our total to over 50 supported languages.
        </p>

        <div className="my-8 grid sm:grid-cols-2 gap-4">
          {[
            { name: "Kotlin", icon: "🟣", desc: "Modern JVM language for Android" },
            { name: "Scala", icon: "🔴", desc: "Functional programming on JVM" },
            { name: "Elixir", icon: "💜", desc: "Concurrent, fault-tolerant apps" },
            { name: "Haskell", icon: "🟤", desc: "Pure functional programming" },
            { name: "Clojure", icon: "🟢", desc: "Lisp dialect on JVM" },
          ].map((lang) => (
            <div key={lang.name} className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <div className="text-2xl mb-2">{lang.icon}</div>
              <h3 className="font-semibold text-foreground">{lang.name}</h3>
              <p className="text-sm text-muted-foreground">{lang.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground">
          Start exploring these new languages today on RunBit!
        </p>
      </>
    ),
  },
  "debugging-techniques": {
    title: "Effective Debugging Techniques for Beginners",
    excerpt: "Learn how to identify and fix bugs efficiently with these proven debugging strategies.",
    author: "Suva",
    date: "December 10, 2025",
    readTime: "12 min read",
    category: "Tips & Tricks",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=600&fit=crop",
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Debugging is an essential skill for every programmer. Whether you're a beginner or experienced developer, these techniques will help you squash bugs faster and more efficiently.
        </p>

        <div className="my-8 space-y-6">
          {[
            {
              title: "1. Read the Error Message",
              content: "Error messages are your friends! They often tell you exactly what went wrong and where. Don't ignore them."
            },
            {
              title: "2. Use Print Statements",
              content: "Sometimes the simplest approach works best. Add print statements to trace the flow of your program and inspect variable values."
            },
            {
              title: "3. Rubber Duck Debugging",
              content: "Explain your code line by line to an inanimate object (or a patient colleague). You'll often spot the bug while explaining."
            },
            {
              title: "4. Divide and Conquer",
              content: "Comment out sections of code to isolate the problematic area. Binary search through your code to find the bug faster."
            },
          ].map((tip, i) => (
            <div key={i} className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
              <p className="text-muted-foreground">{tip.content}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground">
          Practice makes perfect. The more you debug, the better you'll get at spotting issues quickly!
        </p>
      </>
    ),
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { session, signOut } = useAuth();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({ title: "Logout failed", description: error.message, variant: "destructive" });
    }
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar session={session} onLogout={handleLogout} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link Copied!", description: "Share URL copied to clipboard." });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar session={session} onLogout={handleLogout} />

      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/blog">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blog
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge>{post.category}</Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {post.title}
              </h1>

              <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{post.author}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content}
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground">
                  Enjoyed this article? Share it with others!
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button asChild>
                    <Link to="/blog">More Articles</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="h-16" />
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
