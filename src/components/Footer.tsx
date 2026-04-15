import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading text-2xl font-bold gold-text">LOTUS</span>
              <span className="font-accent text-sm font-medium tracking-[0.3em] uppercase" style={{ color: "hsl(40, 20%, 60%)" }}>
                Designs
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(40, 20%, 60%)" }}>
              Transforming spaces into elegant experiences. Premium interior & exterior design
              solutions in Tirupati.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:border-primary hover:text-primary"
                  style={{ borderColor: "hsla(40, 20%, 50%, 0.3)", color: "hsl(40, 20%, 60%)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: "hsl(40, 33%, 96%)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm transition-colors duration-300 hover:text-primary"
                    style={{ color: "hsl(40, 20%, 60%)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: "hsl(40, 33%, 96%)" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {["Home Interiors", "Modular Kitchen", "Commercial Spaces", "3D Visualization", "Exterior Design"].map((s) => (
                <li key={s}>
                  <span className="text-sm" style={{ color: "hsl(40, 20%, 60%)" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-accent text-sm font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: "hsl(40, 33%, 96%)" }}>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <p className="text-sm" style={{ color: "hsl(40, 20%, 60%)" }}>
                  145, RE Mada St, Nehru Nagar,<br />
                  Tirupati, AP 517501
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+918073484406" className="text-sm text-primary hover:underline">
                  +91 80734 84406
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: "hsla(40, 20%, 50%, 0.15)" }}>
          <p className="text-center text-xs" style={{ color: "hsl(40, 20%, 45%)" }}>
            © {new Date().getFullYear()} Lotus Designs. All rights reserved. | Premium Interior Design in Tirupati
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
