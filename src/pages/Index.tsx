import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import LanguageCards from "@/components/home/LanguageCards";
import Features from "@/components/home/Features";
import SocialProof from "@/components/home/SocialProof";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LanguageCards />
        <Features />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
