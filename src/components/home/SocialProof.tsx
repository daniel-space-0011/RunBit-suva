const companies = [
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
  { name: "NVIDIA", logo: "https://logo.clearbit.com/nvidia.com" },
  { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "Walmart", logo: "https://logo.clearbit.com/walmart.com" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
  { name: "SAP", logo: "https://logo.clearbit.com/sap.com" },
  { name: "PayPal", logo: "https://logo.clearbit.com/paypal.com" },
];

const universities = [
  { name: "Harvard", logo: "https://logo.clearbit.com/harvard.edu" },
  { name: "Princeton", logo: "https://logo.clearbit.com/princeton.edu" },
  { name: "MIT", logo: "https://logo.clearbit.com/mit.edu" },
  { name: "Yale", logo: "https://logo.clearbit.com/yale.edu" },
  { name: "Stanford", logo: "https://logo.clearbit.com/stanford.edu" },
  { name: "Cambridge", logo: "https://logo.clearbit.com/cam.ac.uk" },
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
            <div
              key={company.name}
              className="h-8 md:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Companies - Row 2 */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-6 max-w-5xl mx-auto">
          {companies.slice(6, 12).map((company) => (
            <div
              key={company.name}
              className="h-8 md:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Universities */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8 max-w-5xl mx-auto">
          {universities.map((uni) => (
            <div
              key={uni.name}
              className="h-8 md:h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={uni.logo}
                alt={uni.name}
                className="h-full w-auto object-contain"
              />
            </div>
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
