import { Check, Sparkles, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Basic",
    tagline: "Free Forever",
    price: "$0",
    period: "forever",
    description: "Perfect for learning and quick code tests",
    icon: Zap,
    highlighted: false,
    features: [
      "Execute code in 50+ languages",
      "Basic code editor",
      "Share code snippets",
      "Community support",
      "Standard execution speed",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    tagline: "Developer",
    price: "$9",
    period: "/month",
    description: "For developers who need more power",
    icon: Sparkles,
    highlighted: true,
    features: [
      "Everything in Basic",
      "2x faster execution",
      "No advertisements",
      "API access (10K calls/mo)",
      "Priority support",
      "Custom themes",
      "Code history & saves",
    ],
    cta: "Upgrade to Pro",
  },
  {
    name: "Team",
    tagline: "Enterprise",
    price: "$29",
    period: "/user/mo",
    description: "For teams and organizations",
    icon: Building2,
    highlighted: false,
    features: [
      "Everything in Pro",
      "Unlimited API calls",
      "Dedicated sandboxes",
      "Team collaboration",
      "SSO integration",
      "Custom deployment",
      "24/7 dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
];

const Pricing = () => {
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

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you need more. No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "border-2 border-primary bg-card shadow-lg scale-105"
                    : "border border-border bg-card"
                }`}
              >
                {/* Recommended Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div
                    className={`h-14 w-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <plan.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{plan.name}</h2>
                  <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <p className="text-center text-muted-foreground mb-8">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* FAQ Teaser */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              Have questions?{" "}
              <a href="mailto:suva.me@zohomail.in" className="text-primary hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
