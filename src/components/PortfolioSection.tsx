import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
            <div className="w-10 h-[1px] bg-primary" />
            <span className="font-accent text-sm tracking-[0.3em] uppercase text-primary">Portfolio</span>
            <div className="w-10 h-[1px] bg-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="gold-text">Projects</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.08} className={project.span}>
              <div
                onClick={() => setSelected(project)}
                className="relative group cursor-pointer overflow-hidden rounded-xl h-full min-h-[250px]"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <p className="font-accent text-xs tracking-[0.2em] uppercase" style={{ color: "hsl(40, 50%, 70%)" }}>
                      {project.category}
                    </p>
                    <p className="font-heading text-xl font-semibold" style={{ color: "hsl(40, 33%, 96%)" }}>
                      {project.title}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
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
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors"
                style={{ color: "hsl(40, 20%, 75%)" }}
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full rounded-xl"
              />
              <div className="mt-4">
                <p className="font-accent text-xs tracking-[0.2em] uppercase" style={{ color: "hsl(40, 50%, 70%)" }}>
                  {selected.category}
                </p>
                <p className="font-heading text-2xl font-semibold" style={{ color: "hsl(40, 33%, 96%)" }}>
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
