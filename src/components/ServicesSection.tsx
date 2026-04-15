import { Home, ChefHat, Sofa, BedDouble, Building2, Box } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  { icon: Home, title: "Home Interiors", desc: "Complete residential interior design solutions tailored to your lifestyle and preferences." },
  { icon: ChefHat, title: "Modular Kitchen", desc: "Stylish and functional kitchen designs with premium modular fittings and smart storage." },
  { icon: Sofa, title: "Living Room Design", desc: "Elegant living spaces that reflect sophistication with comfort and modern aesthetics." },
  { icon: BedDouble, title: "Bedroom Design", desc: "Serene and luxurious bedroom interiors designed for ultimate relaxation and style." },
  { icon: Building2, title: "Commercial Spaces", desc: "Professional office and commercial interiors that boost productivity and brand image." },
  { icon: Box, title: "3D Visualization", desc: "Photorealistic 3D renders and walkthroughs to preview your dream space before execution." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] gold-gradient rounded-full" />
            <span className="font-accent text-sm tracking-[0.3em] uppercase text-primary font-medium">
              Our Services
            </span>
            <div className="w-10 h-[2px] gold-gradient rounded-full" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            What We <span className="gold-text">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto font-body text-[15px]">
            From concept to completion, we deliver premium design solutions for every space
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="glass-card p-8 h-full hover-lift glow-border cursor-pointer group relative overflow-hidden">
                {/* Hover shimmer */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, hsla(40, 60%, 50%, 0.06), transparent 60%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <service.icon className="w-6 h-6" style={{ color: "#fff" }} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
