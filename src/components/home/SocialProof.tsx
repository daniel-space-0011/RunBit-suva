import { Building2, GraduationCap, Users, TrendingUp, Code2, Globe } from "lucide-react";

const logos = [
  { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png" },
  { name: "Spotify", logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" },
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/512px-Adobe_Corporate_Logo.png" },
];

const universities = [
  { name: "MIT", abbr: "MIT" },
  { name: "Stanford University", abbr: "Stanford" },
  { name: "Harvard University", abbr: "Harvard" },
  { name: "Princeton University", abbr: "Princeton" },
  { name: "Yale University", abbr: "Yale" },
  { name: "University of Cambridge", abbr: "Cambridge" },
];

const stats = [
  { value: "2M+", label: "Active Developers", icon: Users },
  { value: "500+", label: "Companies", icon: Building2 },
  { value: "50M+", label: "Lines Compiled", icon: Code2 },
  { value: "180+", label: "Countries", icon: Globe },
];

const SocialProof = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-runbit-purple/10 via-runbit-cyan/10 to-runbit-pink/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-runbit-purple/10 to-runbit-cyan/10 border border-runbit-purple/20 mb-6">
            <TrendingUp className="h-4 w-4 text-runbit-cyan" />
            <span className="text-sm font-medium text-foreground">Trusted Globally</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Users from </span>
            <span className="bg-gradient-to-r from-runbit-cyan via-runbit-purple to-runbit-pink bg-clip-text text-transparent">
              World's Top
            </span>
            <br />
            <span className="text-foreground">Companies & Schools</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join millions of developers who trust RunBit for their coding journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-6 text-center hover:border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                <div className="inline-flex p-3 rounded-xl bg-muted/50 mb-4">
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Companies Marquee */}
        <div className="mb-16">
          <p className="text-center text-xs font-semibold text-muted-foreground mb-8 uppercase tracking-[0.2em]">
            Featured at leading companies
          </p>
          
          <div className="relative">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Scrolling logos */}
            <div className="flex overflow-hidden">
              <div className="flex gap-12 animate-marquee">
                {[...logos, ...logos].map((company, index) => (
                  <div
                    key={`${company.name}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-16 w-40 group"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-10 max-w-32 object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Universities */}
        <div>
          <p className="text-center text-xs font-semibold text-muted-foreground mb-8 uppercase tracking-[0.2em]">
            Trusted by top universities
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {universities.map((uni, index) => (
              <div
                key={uni.name}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-runbit-purple/30 to-runbit-cyan/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-2 px-5 py-2.5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full hover:border-runbit-purple/30 transition-all duration-300 hover:-translate-y-0.5">
                  <GraduationCap className="h-4 w-4 text-runbit-cyan opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {uni.abbr}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA text */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">+ thousands</span> of other companies, startups, and educational institutions
          </p>
        </div>
      </div>

      {/* Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
