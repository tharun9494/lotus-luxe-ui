import { MessageSquare, PenTool, Box, Hammer, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We understand your vision, needs, and budget", num: "01" },
  { icon: PenTool, title: "Concept Design", desc: "Our designers create stunning concept layouts", num: "02" },
  { icon: Box, title: "3D Preview", desc: "Visualize your space with photorealistic renders", num: "03" },
  { icon: Hammer, title: "Execution", desc: "Expert craftsmen bring the design to life", num: "04" },
  { icon: CheckCircle2, title: "Final Delivery", desc: "Quality checked and handed over on time", num: "05" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[2px] gold-gradient rounded-full" />
            <span className="font-accent text-sm tracking-[0.3em] uppercase text-primary font-medium">Our Process</span>
            <div className="w-10 h-[2px] gold-gradient rounded-full" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            How We <span className="gold-text">Work</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline connector for desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] origin-left"
            style={{ background: "linear-gradient(to right, hsl(40,60%,50%), hsl(40,50%,70%), hsl(40,60%,50%))" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mb-5 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-7 h-7" style={{ color: "#fff" }} />
                </div>
                <span className="font-accent text-[10px] tracking-[0.3em] text-primary/50 uppercase mb-1">
                  Step {step.num}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
