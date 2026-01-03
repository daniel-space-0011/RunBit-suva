import { Gift, Shield, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "Completely Free",
    description: "No hidden costs. Run code in any language without paying a dime.",
    color: "text-primary",
    bgColor: "bg-accent",
  },
  {
    icon: Shield,
    title: "Trusted Platform",
    description: "Used by developers at top companies and universities worldwide.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Lock,
    title: "Secure Sandbox",
    description: "Your code runs in isolated containers with enterprise-grade security.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized compilers and execution engines for instant results.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Why developers choose RunBit
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Built for speed, security, and simplicity
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
