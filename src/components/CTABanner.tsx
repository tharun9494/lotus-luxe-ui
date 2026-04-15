import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const CTABanner = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(40,70%,35%,0.92), hsla(40,60%,50%,0.88))" }} />
      </div>
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 20% 50%, hsla(0,0%,100%,0.08), transparent 60%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <motion.h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "#fff" }}
          >
            Let's Build Your
            <br />
            Dream Space
          </motion.h2>
          <p className="font-body text-lg mb-12 max-w-xl mx-auto" style={{ color: "hsla(0, 0%, 100%, 0.8)" }}>
            Ready to transform your space? Get in touch with our design experts today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918073484406"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full font-accent text-sm font-semibold tracking-wide transition-all duration-400 hover:scale-[1.03] hover:shadow-xl bg-background text-foreground"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/918073484406?text=Hi%20Lotus%20Designs%2C%20I%20am%20interested%20in%20your%20interior%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full font-accent text-sm font-semibold tracking-wide transition-all duration-400 hover:scale-[1.03] border-2"
              style={{ color: "#fff", borderColor: "hsla(0, 0%, 100%, 0.4)", backgroundColor: "hsla(0,0%,100%,0.08)" }}
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
