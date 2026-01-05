import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import LanguageCards from "@/components/home/LanguageCards";
import Features from "@/components/home/Features";
import SocialProof from "@/components/home/SocialProof";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const { session, signOut } = useAuth();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar session={session} onLogout={handleLogout} />
      <main className="flex-1">
        <Hero />
        <LanguageCards />
        <Features />
        <SocialProof />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
