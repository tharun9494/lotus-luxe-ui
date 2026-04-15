import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Villa Owner, Tirupati",
    text: "Lotus Designs transformed our home beyond imagination. The attention to detail and quality of work was outstanding. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Apartment Interior",
    text: "The 3D visualization helped us see exactly what our apartment would look like. The final result was even better than the renders!",
    rating: 5,
  },
  {
    name: "Venkatesh Reddy",
    role: "Office Renovation",
    text: "Professional team with excellent design sense. They completed our office renovation on time and within budget. Great experience!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-primary" />
            <span className="font-accent text-sm tracking-[0.3em] uppercase text-primary">Testimonials</span>
            <div className="w-10 h-[1px] bg-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Client <span className="gold-text">Stories</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card-gold p-8 md:p-12 text-center"
            >
              <Quote className="w-10 h-10 mx-auto mb-6 text-primary opacity-30" />
              <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-heading text-lg font-semibold text-foreground">
                {testimonials[current].name}
              </p>
              <p className="font-accent text-sm text-muted-foreground">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
