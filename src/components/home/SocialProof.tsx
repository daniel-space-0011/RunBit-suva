import { Building2, GraduationCap, Users } from "lucide-react";

const companies = [
  { 
    name: "Google", 
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    color: "from-blue-500/20 to-red-500/20"
  },
  { 
    name: "Microsoft", 
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
    color: "from-blue-600/20 to-green-500/20"
  },
  { 
    name: "Meta", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png",
    color: "from-blue-500/20 to-blue-600/20"
  },
  { 
    name: "Amazon", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
    color: "from-orange-500/20 to-yellow-500/20"
  },
  { 
    name: "Netflix", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png",
    color: "from-red-600/20 to-red-500/20"
  },
  { 
    name: "Spotify", 
    logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png",
    color: "from-green-500/20 to-green-600/20"
  },
];

const companies2 = [
  { 
    name: "IBM", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png",
    color: "from-blue-600/20 to-blue-700/20"
  },
  { 
    name: "Intel", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/512px-Intel_logo_%282006-2020%29.svg.png",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  { 
    name: "Salesforce", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
    color: "from-blue-400/20 to-blue-500/20"
  },
  { 
    name: "Adobe", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/512px-Adobe_Corporate_Logo.png",
    color: "from-red-600/20 to-red-700/20"
  },
  { 
    name: "Stripe", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png",
    color: "from-purple-500/20 to-purple-600/20"
  },
  { 
    name: "PayPal", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/512px-PayPal.svg.png",
    color: "from-blue-600/20 to-blue-400/20"
  },
];

const universities = [
  { 
    name: "MIT", 
    color: "from-red-600/20 to-red-700/20",
    textColor: "text-red-600"
  },
  { 
    name: "Stanford", 
    color: "from-red-700/20 to-red-800/20",
    textColor: "text-red-700"
  },
  { 
    name: "Harvard", 
    color: "from-red-800/20 to-red-900/20",
    textColor: "text-red-800"
  },
  { 
    name: "Princeton", 
    color: "from-orange-500/20 to-orange-600/20",
    textColor: "text-orange-600"
  },
  { 
    name: "Yale", 
    color: "from-blue-700/20 to-blue-800/20",
    textColor: "text-blue-700"
  },
  { 
    name: "Cambridge", 
    color: "from-cyan-600/20 to-cyan-700/20",
    textColor: "text-cyan-700"
  },
];

const stats = [
  { value: "2M+", label: "Active Users", icon: Users },
  { value: "500+", label: "Companies", icon: Building2 },
  { value: "200+", label: "Universities", icon: GraduationCap },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join millions of developers from the world's leading companies and universities
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Companies Section */}
        <div className="mb-12">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Featured Companies
          </p>
          
          {/* Row 1 - Animated scroll */}
          <div className="relative mb-6">
            <div className="flex gap-6 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className={`flex-shrink-0 group relative bg-gradient-to-br ${company.color} backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="h-10 w-32 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-8 max-w-28 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Reverse scroll */}
          <div className="relative">
            <div className="flex gap-6 animate-[scroll_35s_linear_infinite_reverse] hover:[animation-play-state:paused]">
              {[...companies2, ...companies2].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className={`flex-shrink-0 group relative bg-gradient-to-br ${company.color} backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="h-10 w-32 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-8 max-w-28 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Universities Section */}
        <div className="mt-16">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Top Universities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {universities.map((uni) => (
              <div
                key={uni.name}
                className={`group relative bg-gradient-to-br ${uni.color} backdrop-blur-sm border border-border/50 rounded-xl px-6 py-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className={`h-5 w-5 ${uni.textColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  <span className={`font-semibold ${uni.textColor} group-hover:opacity-100 opacity-80 transition-opacity`}>
                    {uni.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          + thousands of other companies, startups, and educational institutions
        </p>
      </div>

      {/* Custom animation keyframes */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
