import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBiryani from "@/assets/hero-biryani.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBiryani}
          alt="Delicious Biryani"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/80 to-hero/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="text-yellow-300">★</span>
            4.8 RATED (1.2K+ REVIEWS)
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Authentic<br />
            Pakistani Flavors<br />
            in Montreal
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience the legendary Biryani and creamy Butter Chicken
            that defines Bismillah. A taste of Lahore, right here in Quebec.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="group">
              Order Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              View Menu 🍽
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
