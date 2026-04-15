import { MessageSquare, PenTool, Box, Hammer, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We understand your vision, needs, and budget" },
  { icon: PenTool, title: "Concept Design", desc: "Our designers create stunning concept layouts" },
  { icon: Box, title: "3D Preview", desc: "Visualize your space with photorealistic renders" },
  { icon: Hammer, title: "Execution", desc: "Expert craftsmen bring the design to life" },
  { icon: CheckCircle2, title: "Final Delivery", desc: "Quality checked and handed over on time" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-primary" />
            <span className="font-accent text-sm tracking-[0.3em] uppercase text-primary">Our Process</span>
            <div className="w-10 h-[1px] bg-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            How We <span className="gold-text">Work</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-border -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mb-4 relative z-10">
                    <step.icon className="w-7 h-7" style={{ color: "hsl(0, 0%, 100%)" }} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary font-accent absolute top-12 -right-2 lg:hidden">
                    {i + 1}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
