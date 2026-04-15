import { Palette, Box, Clock, Banknote, Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Palette, title: "Customized Designs", desc: "Every project is uniquely crafted to match your vision and lifestyle." },
  { icon: Box, title: "Expert 3D Visualization", desc: "See your dream space in photorealistic 3D before construction begins." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect deadlines and ensure timely project completion, every time." },
  { icon: Banknote, title: "Budget Friendly", desc: "Premium quality designs that work within your budget without compromise." },
  { icon: Award, title: "High Quality Finish", desc: "We use only the finest materials and craftsmanship for lasting excellence." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] gold-gradient rounded-full" />
            <span className="font-accent text-sm tracking-[0.3em] uppercase text-primary font-medium">Why Us</span>
            <div className="w-10 h-[2px] gold-gradient rounded-full" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Why Choose <span className="gold-text">Lotus Designs</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="glass-card p-6 text-center hover-lift glow-border h-full group">
                <div className="w-14 h-14 mx-auto rounded-full gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500"
                  style={{ boxShadow: "0 4px 20px hsla(40, 60%, 50%, 0)" }}
                >
                  <r.icon className="w-6 h-6" style={{ color: "#fff" }} />
                </div>
                <h3 className="font-heading text-[15px] font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed font-body">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
