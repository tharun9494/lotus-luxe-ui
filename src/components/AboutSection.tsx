import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import aboutImg from "@/assets/about-workspace.jpg";

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={aboutImg}
                  alt="Designer workspace"
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsla(40,30%,20%,0.3), transparent)" }} />
              </motion.div>
              {/* Floating stats card */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 glass-card-gold p-6 hidden md:block"
              >
                <p className="font-heading text-4xl font-bold gold-text">
                  <CountUp target={10} suffix="+" />
                </p>
                <p className="font-accent text-sm text-muted-foreground mt-1">Years of Excellence</p>
              </motion.div>
              {/* Decorative border */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 hidden lg:block -z-10"
                style={{ borderColor: "hsla(40, 60%, 50%, 0.15)" }}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[2px] gold-gradient rounded-full" />
              <span className="font-accent text-sm tracking-[0.3em] uppercase text-primary font-medium">
                About Us
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-8">
              Crafting Timeless
              <br />
              <span className="gold-text">Interior Spaces</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 font-body text-[15px]">
              LOTUS DESIGNS specializes in creating beautiful, functional, and timeless spaces.
              We provide end-to-end interior and exterior solutions with realistic 2D/3D
              visualizations. Based in Tirupati, we bring luxury design to life with precision
              and passion.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 font-body text-[15px]">
              Our team of expert designers transforms ordinary spaces into extraordinary experiences,
              combining modern aesthetics with functional elegance to deliver results that exceed
              expectations.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: 200, suffix: "+", label: "Projects" },
                { num: 150, suffix: "+", label: "Happy Clients" },
                { num: 10, suffix: "+", label: "Years Exp." },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/40">
                  <p className="font-heading text-2xl md:text-3xl font-bold gold-text">
                    <CountUp target={stat.num} suffix={stat.suffix} />
                  </p>
                  <p className="font-accent text-xs text-muted-foreground mt-1.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
