import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishButterChicken from "@/assets/dish-butter-chicken.jpg";
import dishSeekhKebab from "@/assets/dish-seekh-kebab.jpg";
import dishNaan from "@/assets/dish-naan.jpg";

const dishes = [
  {
    name: "Chicken Biryani",
    price: "$14.99",
    description: "Aromatic basmati rice cooked with tender...",
    image: dishBiryani,
  },
  {
    name: "Butter Chicken",
    price: "$16.99",
    description: "Boneless chicken simmered in rich, cream...",
    image: dishButterChicken,
  },
  {
    name: "Seekh Kebab",
    price: "$12.99",
    description: "Minced beef skewers marinated with herbs and...",
    image: dishSeekhKebab,
  },
  {
    name: "Garlic Naan",
    price: "$3.99",
    description: "Soft, pillowy flatbread baked in tandoor and...",
    image: dishNaan,
  },
];

const PopularDishes = () => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="section-title mb-2">Most Popular Dishes</h2>
            <p className="text-muted-foreground">
              Our customers can't get enough of these classics.
            </p>
          </div>
          <a
            href="#"
            className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all mt-4 md:mt-0"
          >
            See Full Menu
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Dishes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={dish.name}
              className="bg-card rounded-xl border border-border overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{dish.name}</h3>
                  <span className="text-primary font-bold">{dish.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{dish.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Add to Order
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
