import { Link } from "react-router-dom";
import { BookOpen, Clock, ChevronRight, Code, Calculator, Repeat, Database, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const tutorials = [
  {
    id: 1,
    title: "How to Build a Calculator in Python",
    description: "Learn to create a fully functional calculator with Python, covering basic arithmetic operations and user input handling.",
    difficulty: "Beginner",
    readTime: "10 min",
    icon: Calculator,
    language: "Python",
  },
  {
    id: 2,
    title: "Understanding Recursion",
    description: "Master the concept of recursion through practical examples like factorial, Fibonacci, and tree traversal.",
    difficulty: "Intermediate",
    readTime: "15 min",
    icon: Repeat,
    language: "JavaScript",
  },
  {
    id: 3,
    title: "Introduction to Data Structures",
    description: "Explore fundamental data structures including arrays, linked lists, stacks, and queues with hands-on examples.",
    difficulty: "Intermediate",
    readTime: "20 min",
    icon: Database,
    language: "C++",
  },
  {
    id: 4,
    title: "Building Your First Web Scraper",
    description: "Learn how to extract data from websites using Python and BeautifulSoup library.",
    difficulty: "Intermediate",
    readTime: "25 min",
    icon: Globe,
    language: "Python",
  },
  {
    id: 5,
    title: "Getting Started with JavaScript",
    description: "A beginner-friendly introduction to JavaScript covering variables, functions, and basic DOM manipulation.",
    difficulty: "Beginner",
    readTime: "12 min",
    icon: Code,
    language: "JavaScript",
  },
  {
    id: 6,
    title: "Object-Oriented Programming in Java",
    description: "Understand OOP concepts like classes, inheritance, polymorphism, and encapsulation in Java.",
    difficulty: "Advanced",
    readTime: "30 min",
    icon: BookOpen,
    language: "Java",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "Advanced":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Tutorials = () => {
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
            <h1 className="text-4xl font-bold text-foreground mb-4">Tutorials</h1>
            <p className="text-lg text-muted-foreground">
              Step-by-step guides to help you learn programming concepts and build real projects.
            </p>
          </div>

          {/* Tutorials List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {tutorials.map((tutorial) => (
              <article
                key={tutorial.id}
                className="group rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <tutorial.icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {tutorial.language}
                      </Badge>
                      <Badge className={`text-xs ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {tutorial.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tutorial.title}
                    </h2>

                    <p className="text-muted-foreground">{tutorial.description}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 hidden sm:flex items-center">
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="text-center mt-12 p-8 rounded-xl border border-dashed border-border">
            <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">More Tutorials Coming Soon</h3>
            <p className="text-muted-foreground">
              We're constantly adding new tutorials. Check back regularly for fresh content!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tutorials;
