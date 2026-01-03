const companies = [
  "Microsoft", "Meta", "NVIDIA", "Stripe", "Walmart", "Samsung",
  "Amazon", "Google", "IBM", "Intel", "SAP", "PayPal"
];

const universities = [
  "Harvard", "Princeton", "MIT", "Yale", "Stanford", "Cambridge"
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-lg md:text-xl font-normal text-muted-foreground mb-12">
          Users from world's top companies and schools
        </h2>

        {/* Companies - Row 1 */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-6 max-w-5xl mx-auto">
          {companies.slice(0, 6).map((company) => (
            <span
              key={company}
              className="text-lg md:text-xl font-semibold text-muted-foreground/70 hover:text-muted-foreground transition-colors"
            >
              {company}
            </span>
          ))}
        </div>

        {/* Companies - Row 2 */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-6 max-w-5xl mx-auto">
          {companies.slice(6, 12).map((company) => (
            <span
              key={company}
              className="text-lg md:text-xl font-semibold text-muted-foreground/70 hover:text-muted-foreground transition-colors"
            >
              {company}
            </span>
          ))}
        </div>

        {/* Universities */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8 max-w-5xl mx-auto">
          {universities.map((uni) => (
            <span
              key={uni}
              className="text-lg md:text-xl font-semibold text-muted-foreground/70 hover:text-muted-foreground transition-colors"
            >
              {uni}
            </span>
          ))}
        </div>

        <p className="text-muted-foreground text-sm">
          + thousands of other companies and schools
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
