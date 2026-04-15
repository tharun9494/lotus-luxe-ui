import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury modern interior design"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] gold-gradient" />
            <span className="font-accent text-sm tracking-[0.3em] uppercase" style={{ color: "hsl(40, 50%, 70%)" }}>
              Lotus Designs — Tirupati
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
            style={{ color: "hsl(40, 33%, 96%)" }}
          >
            Designing
            <br />
            <span className="gold-text">Dreams</span> into
            <br />
            Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ color: "hsl(40, 20%, 75%)" }}
          >
            Luxury Interior & Exterior Design Solutions in Tirupati.
            Transforming spaces into elegant experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="gold-gradient px-8 py-4 rounded-full font-accent text-sm font-semibold tracking-wide flex items-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-105"
              style={{ color: "hsl(0, 0%, 100%)" }}
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full font-accent text-sm font-semibold tracking-wide flex items-center gap-2 border transition-all duration-300 hover:scale-105"
              style={{
                color: "hsl(40, 50%, 70%)",
                borderColor: "hsla(40, 60%, 50%, 0.4)",
              }}
            >
              <Play className="w-4 h-4" />
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-accent text-xs tracking-[0.2em] uppercase" style={{ color: "hsl(40, 20%, 60%)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8 gold-gradient"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
