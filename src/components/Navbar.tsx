import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl shadow-[0_2px_30px_rgba(0,0,0,0.06)] border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <span className="font-heading text-lg font-bold" style={{ color: "#fff" }}>L</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-heading text-xl font-bold tracking-wide transition-colors duration-500 ${scrolled ? "gold-text" : ""}`}
              style={!scrolled ? { color: "hsl(40, 33%, 96%)" } : undefined}>
              LOTUS
            </span>
            <span className={`font-accent text-[10px] font-medium tracking-[0.35em] uppercase transition-colors duration-500 -mt-0.5 ${scrolled ? "text-muted-foreground" : ""}`}
              style={!scrolled ? { color: "hsl(40, 20%, 70%)" } : undefined}>
              DESIGNS
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-accent text-[13px] font-medium tracking-wide px-4 py-2 rounded-full transition-all duration-400 ${
                  isActive
                    ? scrolled
                      ? "text-primary bg-primary/8"
                      : "bg-white/10"
                    : scrolled
                      ? "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                      : "hover:bg-white/5"
                }`}
                style={!scrolled ? { color: isActive ? "#fff" : "hsl(40, 20%, 80%)" } : undefined}
              >
                {link.label}
              </a>
            );
          })}
          <div className={`w-[1px] h-6 mx-3 ${scrolled ? "bg-border" : "bg-white/20"}`} />
          <a
            href="tel:+918073484406"
            className="flex items-center gap-2 gold-gradient px-6 py-2.5 rounded-full font-accent text-[13px] font-semibold tracking-wide hover:shadow-lg hover:scale-[1.03] transition-all duration-400"
            style={{ color: "#fff" }}
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={!scrolled ? { color: "hsl(40, 33%, 96%)" } : undefined}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-background/98 backdrop-blur-2xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={`font-accent text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-primary bg-primary/8"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:+918073484406"
                className="flex items-center justify-center gap-2 gold-gradient py-3.5 rounded-xl font-accent text-sm font-semibold mt-4"
                style={{ color: "#fff" }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
