import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt="Luxury modern interior design"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Overlays using inline styles for reliable rendering */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,20,30,0.88) 0%, rgba(15,20,30,0.55) 50%, rgba(15,20,30,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,20,30,0.7) 0%, transparent 40%, rgba(15,20,30,0.3) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[2px] gold-gradient rounded-full" />
            <span
              className="font-accent text-[13px] tracking-[0.35em] uppercase"
              style={{ color: "hsl(40, 50%, 70%)" }}
            >
              Lotus Designs — Tirupati
            </span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-[90px] font-bold leading-[0.95]"
              style={{ color: "hsl(40, 33%, 97%)" }}
            >
              Designing
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-[90px] font-bold leading-[0.95]"
            >
              <span className="gold-text">Dreams</span>{" "}
              <span style={{ color: "hsl(40, 33%, 97%)" }}>into</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-[90px] font-bold leading-[0.95]"
              style={{ color: "hsl(40, 33%, 97%)" }}
            >
              Reality
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-body"
            style={{ color: "hsl(40, 15%, 72%)" }}
          >
            Luxury Interior & Exterior Design Solutions in Tirupati.
            Transforming spaces into elegant experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="gold-gradient px-8 py-4 rounded-full font-accent text-sm font-semibold tracking-wide flex items-center gap-2.5 transition-all duration-400 hover:shadow-[0_8px_30px_rgba(180,140,60,0.35)] hover:scale-[1.03]"
              style={{ color: "#fff" }}
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full font-accent text-sm font-semibold tracking-wide flex items-center gap-2.5 border backdrop-blur-sm transition-all duration-400 hover:scale-[1.03]"
              style={{
                color: "hsl(40, 50%, 75%)",
                borderColor: "hsla(40, 60%, 50%, 0.35)",
                backgroundColor: "hsla(40, 60%, 50%, 0.06)",
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
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          className="font-accent text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "hsl(40, 20%, 55%)" }}
        >
          Scroll Down
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: "hsla(40, 60%, 50%, 0.3)" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full gold-gradient"
          />
        </motion.div>
      </motion.div>

      {/* Decorative corner element */}
      <div
        className="absolute top-24 right-10 w-32 h-32 border rounded-full hidden xl:block"
        style={{ borderColor: "hsla(40, 60%, 50%, 0.08)" }}
      />
      <div
        className="absolute bottom-32 right-24 w-20 h-20 border rounded-full hidden xl:block"
        style={{ borderColor: "hsla(40, 60%, 50%, 0.06)" }}
      />
    </section>
  );
};

export default HeroSection;
