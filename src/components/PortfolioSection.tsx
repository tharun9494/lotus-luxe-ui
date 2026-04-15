import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioOffice from "@/assets/portfolio-office.jpg";
import portfolioElevation from "@/assets/portfolio-elevation.jpg";
import portfolioLiving from "@/assets/portfolio-living.jpg";
import portfolioBathroom from "@/assets/portfolio-bathroom.jpg";

const projects = [
  { img: portfolioLiving, title: "Luxury Living Room", category: "Residential", span: "md:col-span-2 md:row-span-2" },
  { img: portfolioKitchen, title: "Modular Kitchen", category: "Kitchen", span: "" },
  { img: portfolioBedroom, title: "Master Bedroom", category: "Residential", span: "" },
  { img: portfolioOffice, title: "Corporate Office", category: "Commercial", span: "md:col-span-2" },
  { img: portfolioElevation, title: "Villa Elevation", category: "Exterior", span: "" },
  { img: portfolioBathroom, title: "Luxury Bathroom", category: "Residential", span: "" },
];

const PortfolioSection = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] gold-gradient rounded-full" />
            <span className="font-accent text-sm tracking-[0.3em] uppercase text-primary font-medium">Portfolio</span>
            <div className="w-10 h-[2px] gold-gradient rounded-full" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="gold-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body text-[15px]">
            Explore our finest work across residential, commercial, and exterior design
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={project.span}
            >
              <div
                onClick={() => setSelected(project)}
                className="relative group cursor-pointer overflow-hidden rounded-xl h-full min-h-[260px]"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6"
                  style={{
                    background: "linear-gradient(to top, rgba(15,20,30,0.85) 0%, rgba(15,20,30,0.2) 40%, transparent 100%)",
                  }}
                >
                  <div className="w-full">
                    <p className="font-accent text-xs tracking-[0.25em] uppercase mb-1" style={{ color: "hsl(40, 50%, 70%)" }}>
                      {project.category}
                    </p>
                    <div className="flex items-end justify-between">
                      <p className="font-heading text-xl font-semibold" style={{ color: "hsl(40, 33%, 96%)" }}>
                        {project.title}
                      </p>
                      <div className="w-9 h-9 rounded-full border flex items-center justify-center" style={{ borderColor: "hsla(40, 60%, 50%, 0.4)" }}>
                        <ZoomIn className="w-4 h-4" style={{ color: "hsl(40, 50%, 70%)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(10, 12, 18, 0.92)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-14 right-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
                style={{ borderColor: "hsla(40, 20%, 50%, 0.3)", color: "hsl(40, 20%, 75%)" }}
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="mt-5">
                <p className="font-accent text-xs tracking-[0.25em] uppercase" style={{ color: "hsl(40, 50%, 70%)" }}>
                  {selected.category}
                </p>
                <p className="font-heading text-2xl font-semibold mt-1" style={{ color: "hsl(40, 33%, 96%)" }}>
                  {selected.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
