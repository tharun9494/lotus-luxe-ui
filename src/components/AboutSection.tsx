import AnimatedSection from "./AnimatedSection";
import aboutImg from "@/assets/about-workspace.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Designer workspace"
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 glass-card-gold p-6 hidden md:block">
                <p className="font-heading text-3xl font-bold gold-text">10+</p>
                <p className="font-accent text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="font-accent text-sm tracking-[0.3em] uppercase text-primary">
                About Us
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Crafting Timeless
              <br />
              <span className="gold-text">Interior Spaces</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body text-base">
              LOTUS DESIGNS specializes in creating beautiful, functional, and timeless spaces.
              We provide end-to-end interior and exterior solutions with realistic 2D/3D
              visualizations. Based in Tirupati, we bring luxury design to life with precision
              and passion.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body text-base">
              Our team of expert designers transforms ordinary spaces into extraordinary experiences,
              combining modern aesthetics with functional elegance to deliver results that exceed
              expectations.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "200+", label: "Projects" },
                { num: "150+", label: "Happy Clients" },
                { num: "10+", label: "Years Exp." },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-2xl md:text-3xl font-bold gold-text">{stat.num}</p>
                  <p className="font-accent text-xs text-muted-foreground mt-1">{stat.label}</p>
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
