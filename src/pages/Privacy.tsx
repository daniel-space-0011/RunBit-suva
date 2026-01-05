import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

const Privacy = () => {
  const { session, signOut } = useAuth();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({ title: "Logout failed", description: error.message, variant: "destructive" });
    }
  };

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Account information (name, email address) when you register",
        "Code snippets and projects you create using our platform",
        "Usage data including pages visited, features used, and time spent",
        "Device information such as browser type, operating system, and IP address",
        "Cookies and similar tracking technologies for analytics and preferences"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our code compilation services",
        "To personalize your experience and remember your preferences",
        "To improve our platform based on usage patterns and feedback",
        "To communicate with you about updates, features, and support",
        "To ensure security and prevent unauthorized access or abuse"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We use industry-standard encryption (SSL/TLS) for data transmission",
        "Your code and personal data are stored on secure, encrypted servers",
        "We implement access controls and authentication measures",
        "Regular security audits and vulnerability assessments are conducted",
        "We never sell your personal information to third parties"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access and download your personal data at any time",
        "Request correction of inaccurate information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Export your code and projects in standard formats"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar session={session} onLogout={handleLogout} />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your privacy matters to us. This policy explains how RunBit collects, 
              uses, and protects your personal information when you use our online 
              code compiler and related services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 5, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  RunBit ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy describes how we collect, use, and share information 
                  about you when you use our website, applications, and services (collectively, 
                  the "Services"). By using our Services, you agree to the collection and 
                  use of information in accordance with this policy.
                </p>
              </div>
            </div>

            {/* Sections */}
            {sections.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Cookies Section */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies & Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience. 
                These include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Required for basic functionality like authentication and preferences.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Party Services */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use third-party services that collect, monitor, and analyze data 
                to improve our Services. These include:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Analytics providers for usage statistics</li>
                <li>• Cloud infrastructure providers for hosting</li>
                <li>• Payment processors for subscription services</li>
                <li>• Email service providers for communications</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us:
                  </p>
                  <p className="text-foreground font-medium">
                    Email: suva.me@zohomail.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
