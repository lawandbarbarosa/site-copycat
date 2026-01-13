import { ShieldCheck, ChefHat, Truck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Halal Certified",
    description: "100% HMA Certified Halal meat sourced locally.",
  },
  {
    icon: ChefHat,
    title: "Traditional Recipes",
    description: "Secret spice blends passed down since 1998.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Hot and fresh delivery across Montreal.",
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-card relative -mt-8 z-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
