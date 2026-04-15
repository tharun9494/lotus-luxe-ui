import { Phone, MapPin, Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="pt-20 pb-8 px-4 md:px-8"
      style={{ backgroundColor: "hsl(220, 25%, 10%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                <span className="font-heading text-lg font-bold" style={{ color: "#fff" }}>L</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold gold-text">LOTUS</span>
                <span className="font-accent text-[10px] font-medium tracking-[0.35em] uppercase -mt-0.5"
                  style={{ color: "hsl(40, 20%, 55%)" }}>DESIGNS</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(40, 15%, 55%)" }}>
              Transforming spaces into elegant experiences. Premium interior & exterior design
              solutions in Tirupati.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: "hsla(40, 20%, 50%, 0.2)",
                    color: "hsl(40, 15%, 55%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "hsl(40, 60%, 50%)";
                    e.currentTarget.style.color = "hsl(40, 60%, 50%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "hsla(40, 20%, 50%, 0.2)";
                    e.currentTarget.style.color = "hsl(40, 15%, 55%)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: "hsl(40, 33%, 92%)" }}>Quick Links</h4>
            <ul className="space-y-3.5">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm transition-colors duration-300 hover:text-primary inline-flex items-center gap-2"
                    style={{ color: "hsl(40, 15%, 55%)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full gold-gradient inline-block opacity-50" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: "hsl(40, 33%, 92%)" }}>Services</h4>
            <ul className="space-y-3.5">
              {["Home Interiors", "Modular Kitchen", "Commercial Spaces", "3D Visualization", "Exterior Design"].map((s) => (
                <li key={s}>
                  <span className="text-sm inline-flex items-center gap-2" style={{ color: "hsl(40, 15%, 55%)" }}>
                    <span className="w-1.5 h-1.5 rounded-full gold-gradient inline-block opacity-50" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6"
              style={{ color: "hsl(40, 33%, 92%)" }}>Contact Us</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <p className="text-sm leading-relaxed" style={{ color: "hsl(40, 15%, 55%)" }}>
                  145, RE Mada St, Nehru Nagar,<br />
                  Tirupati, AP 517501
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+918073484406" className="text-sm text-primary hover:underline font-medium">
                  +91 80734 84406
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "hsla(40, 15%, 50%, 0.12)" }}>
          <p className="text-xs" style={{ color: "hsl(40, 15%, 40%)" }}>
            © {new Date().getFullYear()} Lotus Designs. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary"
            style={{ borderColor: "hsla(40, 20%, 50%, 0.2)", color: "hsl(40, 15%, 55%)" }}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
