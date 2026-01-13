import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularDishes from "@/components/PopularDishes";
import OurStory from "@/components/OurStory";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <PopularDishes />
      <OurStory />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
