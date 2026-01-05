import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Mail } from "lucide-react";

const Terms = () => {
  const { session, signOut } = useAuth();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({ title: "Logout failed", description: error.message, variant: "destructive" });
    }
  };

  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptable Use",
      content: [
        "Use RunBit for lawful purposes only",
        "Respect intellectual property rights of others",
        "Do not attempt to gain unauthorized access to our systems",
        "Do not upload malicious code or content",
        "Follow community guidelines when sharing code publicly"
      ]
    },
    {
      icon: XCircle,
      title: "Prohibited Activities",
      content: [
        "Creating or distributing malware, viruses, or harmful code",
        "Attempting to breach security or authentication measures",
        "Using the service for illegal activities or to harm others",
        "Scraping, data mining, or automated access without permission",
        "Impersonating others or misrepresenting your affiliation"
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        "You retain ownership of code you create on RunBit",
        "RunBit retains rights to its platform, design, and technology",
        "You grant us a license to host and process your code for service delivery",
        "Respect third-party licenses when using external libraries",
        "Report any intellectual property concerns to our team"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: [
        "Services are provided 'as is' without warranties",
        "We are not liable for data loss or service interruptions",
        "You are responsible for backing up your important code",
        "Maximum liability is limited to fees paid in the past 12 months",
        "Some jurisdictions may not allow these limitations"
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
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Please read these terms carefully before using RunBit. By accessing 
              or using our services, you agree to be bound by these terms and conditions.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Effective Date: January 5, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement 
                between you and RunBit regarding your use of our online code compiler, 
                related tools, and services. If you do not agree to these Terms, you 
                may not access or use our Services. We reserve the right to modify 
                these Terms at any time, and your continued use of the Services 
                constitutes acceptance of any modifications.
              </p>
            </div>

            {/* Account Terms */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Account Registration</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>To access certain features, you must create an account. When registering:</p>
                <ul className="space-y-2 ml-4">
                  <li>• You must provide accurate and complete information</li>
                  <li>• You are responsible for maintaining account security</li>
                  <li>• You must be at least 13 years old (or meet local age requirements)</li>
                  <li>• You may not share your account credentials with others</li>
                  <li>• You must notify us immediately of any unauthorized access</li>
                </ul>
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

            {/* Service Terms */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Availability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We strive to provide reliable services but cannot guarantee uninterrupted access:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Maintenance</h3>
                    <p className="text-sm">
                      We may perform scheduled maintenance that temporarily affects service availability.
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Modifications</h3>
                    <p className="text-sm">
                      We reserve the right to modify, suspend, or discontinue features at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate this agreement at any time:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• You may delete your account through your account settings</li>
                <li>• We may suspend or terminate accounts that violate these Terms</li>
                <li>• Upon termination, your right to use the Services will cease immediately</li>
                <li>• We may retain certain data as required by law or for legitimate business purposes</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, 
                without regard to conflict of law principles. Any disputes arising from these Terms 
                or your use of the Services shall be resolved through binding arbitration or in the 
                courts of competent jurisdiction.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Questions?</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Service, please contact us:
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

export default Terms;
