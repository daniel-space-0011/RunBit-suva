import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const featuredPost = {
  id: "introducing-runbit-v2",
  title: "Introducing RunBit 2.0: Faster, Smarter, Better",
  excerpt:
    "We're excited to announce the biggest update to RunBit yet. With 50+ languages, instant execution, and a completely redesigned editor, coding online has never been easier.",
  author: "Suva",
  date: "January 1, 2026",
  readTime: "5 min read",
  category: "Product Update",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
};

const recentPosts = [
  {
    id: "10-python-tips",
    title: "10 Python Tips Every Beginner Should Know",
    excerpt: "Boost your Python skills with these essential tips and tricks for cleaner, more efficient code.",
    author: "Suva",
    date: "December 28, 2025",
    readTime: "8 min read",
    category: "Tips & Tricks",
  },
  {
    id: "javascript-vs-typescript",
    title: "JavaScript vs TypeScript: Which Should You Learn?",
    excerpt: "A comprehensive comparison to help you decide which language fits your learning goals.",
    author: "Suva",
    date: "December 22, 2025",
    readTime: "10 min read",
    category: "Comparison",
  },
  {
    id: "new-languages-december",
    title: "New Languages Added: Kotlin, Scala, and More",
    excerpt: "We've expanded our language support with 5 new programming languages this month.",
    author: "Suva",
    date: "December 15, 2025",
    readTime: "3 min read",
    category: "Product Update",
  },
  {
    id: "debugging-techniques",
    title: "Effective Debugging Techniques for Beginners",
    excerpt: "Learn how to identify and fix bugs efficiently with these proven debugging strategies.",
    author: "Suva",
    date: "December 10, 2025",
    readTime: "12 min read",
    category: "Tips & Tricks",
  },
];

const Blog = () => {
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Coding tips, platform updates, and insights from the RunBit team.
            </p>
          </div>

          {/* Featured Post */}
          <article className="mb-16 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="default">{featuredPost.category}</Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </article>

          {/* Recent Posts */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Recent Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
