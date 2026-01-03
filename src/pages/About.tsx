import { Target, Users, Zap, Heart, Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const values = [
  {
    icon: Zap,
    title: "Speed First",
    description: "We believe coding should be instant. No downloads, no setup—just code.",
  },
  {
    icon: Users,
    title: "Accessible to All",
    description: "Whether you're a student or a pro, RunBit works for everyone, everywhere.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description: "Built with love and continuously improved based on user feedback.",
  },
];

const team = [
  {
    name: "Suva",
    role: "Founder & Lead Developer",
    bio: "Passionate about making coding accessible to everyone. Built RunBit to solve the frustration of setting up development environments.",
    avatar: "S",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

const About = () => {
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About RunBit
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to provide the fastest, most accessible online compiler for developers worldwide.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6 p-8 rounded-2xl border border-border bg-card">
                <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To provide the fastest, most accessible online compiler for developers worldwide. 
                    We believe everyone should be able to write, compile, and run code instantly—without 
                    the hassle of setting up complex development environments. Whether you're learning 
                    your first programming language or testing a quick snippet, RunBit is here to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              What We Believe In
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 rounded-xl border border-border bg-card"
                >
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Meet the Team
            </h2>
            <div className="max-w-md mx-auto">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-border bg-card text-center"
                >
                  <div className="h-24 w-24 rounded-full bg-primary text-primary-foreground text-4xl font-bold flex items-center justify-center mx-auto mb-6">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Made by Suva */}
            <div className="text-center mt-12 p-6 rounded-xl border border-dashed border-primary/50 bg-primary/5 max-w-md mx-auto">
              <p className="text-foreground font-medium">
                RunBit was created and is maintained by <span className="text-primary font-bold">Suva</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Built with ❤️ for the developer community
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
