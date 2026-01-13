import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Local Guide",
    content:
      '"Best Biryani in town, hands down. The spice level was perfect and the meat was so tender."',
    rating: 5,
  },
  {
    name: "Ahmed Khan",
    role: "Food Critic",
    content:
      '"Authentic vibes. Reminded me of my trip to Lahore. The garlic naan is a must-try!"',
    rating: 5,
  },
  {
    name: "Michelle Tran",
    role: "Verified Customer",
    content:
      '"Great value for money. Portions are huge and the staff is incredibly friendly."',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-testimonial">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Loved by Montreal</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our customers are saying.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-6 rounded-xl border border-border shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-star text-star"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground italic mb-6">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-semibold text-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
