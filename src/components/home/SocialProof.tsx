const companies = [
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Meta", logo: "Meta" },
  { name: "NVIDIA", logo: "NVIDIA" },
  { name: "Stripe", logo: "Stripe" },
  { name: "Walmart", logo: "Walmart" },
  { name: "Samsung", logo: "Samsung" },
  { name: "Amazon", logo: "amazon" },
  { name: "Google", logo: "Google" },
  { name: "IBM", logo: "IBM" },
  { name: "Intel", logo: "intel" },
  { name: "SAP", logo: "SAP" },
  { name: "PayPal", logo: "PayPal" },
];

const universities = [
  { name: "Harvard", logo: "HARVARD" },
  { name: "Princeton", logo: "Princeton" },
  { name: "MIT", logo: "MIT" },
  { name: "Yale", logo: "Yale" },
  { name: "Stanford", logo: "Stanford" },
  { name: "Cambridge", logo: "Cambridge" },
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-12">
          Users from world's top companies and schools
        </h2>

        {/* Companies */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8 max-w-5xl mx-auto">
          {companies.map((company) => (
            <div
              key={company.name}
              className="text-muted-foreground/60 font-bold text-lg md:text-xl tracking-wide hover:text-muted-foreground transition-colors"
            >
              {company.logo}
            </div>
          ))}
        </div>

        {/* Universities */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8 max-w-4xl mx-auto">
          {universities.map((uni) => (
            <div
              key={uni.name}
              className="text-muted-foreground/60 font-bold text-lg md:text-xl tracking-wide hover:text-muted-foreground transition-colors"
            >
              {uni.logo}
            </div>
          ))}
        </div>

        <p className="text-muted-foreground">
          + thousands of other companies and schools
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
