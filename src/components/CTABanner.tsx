import { Phone, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const CTABanner = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gold-gradient opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(0,0%,100%,0.1),transparent)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>
            Let's Build Your
            <br />
            Dream Space
          </h2>
          <p className="font-body text-lg mb-10 max-w-xl mx-auto" style={{ color: "hsla(0, 0%, 100%, 0.85)" }}>
            Ready to transform your space? Get in touch with our design experts today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918073484406"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-accent text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 bg-background text-foreground"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/918073484406?text=Hi%20Lotus%20Designs%2C%20I%20am%20interested%20in%20your%20interior%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-accent text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 border-2"
              style={{ color: "hsl(0, 0%, 100%)", borderColor: "hsla(0, 0%, 100%, 0.5)" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTABanner;
