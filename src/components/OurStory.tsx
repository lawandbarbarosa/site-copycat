import { Button } from "@/components/ui/button";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";

const OurStory = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <span className="section-label">OUR STORY</span>
            <h2 className="section-title mt-2 mb-6">
              Serving Tradition<br />Since 1998
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                We bring the authentic street food culture of Lahore
                straight to the heart of Montreal. Our recipes have
                been passed down through generations, ensuring
                every bite is a taste of home.
              </p>
              <p>
                At Bismillah, "Halal" isn't just a label—it's a
                commitment to purity, quality, and community.
                Whether you're craving the heat of our Karahi or the
                comfort of fresh Naan, we welcome you to our table.
              </p>
            </div>
            <Button variant="hero" size="lg">
              Read Our Full Story
            </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <img
                  src={story1}
                  alt="Chef cooking"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <img
                  src={story3}
                  alt="Spices"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <img
                  src={story2}
                  alt="Restaurant interior"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <img
                  src={story4}
                  alt="Family dining"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
