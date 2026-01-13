import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                Ready to taste the magic?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Order online now for pickup or delivery and get 10% off your first order with
                code <span className="font-semibold bg-primary-foreground/20 px-2 py-1 rounded">BISMILLAH10</span>.
              </p>
            </div>
            <Button variant="cta" size="xl" className="shrink-0">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
