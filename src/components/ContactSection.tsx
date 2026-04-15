import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Lotus Designs!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AProject: ${form.type}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918073484406?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-primary" />
            <span className="font-accent text-sm tracking-[0.3em] uppercase text-primary">Contact</span>
            <div className="w-10 h-[1px] bg-primary" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Get in <span className="gold-text">Touch</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="glass-card-gold p-8 md:p-10 space-y-6">
              <div>
                <label className="font-accent text-sm font-medium text-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm text-foreground"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="font-accent text-sm font-medium text-foreground mb-2 block">Phone</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm text-foreground"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="font-accent text-sm font-medium text-foreground mb-2 block">Project Type</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm text-foreground"
                >
                  <option value="">Select project type</option>
                  <option>Home Interior</option>
                  <option>Modular Kitchen</option>
                  <option>Office Interior</option>
                  <option>Exterior Design</option>
                  <option>3D Visualization</option>
                  <option>Renovation</option>
                </select>
              </div>
              <div>
                <label className="font-accent text-sm font-medium text-foreground mb-2 block">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body text-sm resize-none text-foreground"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient py-4 rounded-lg font-accent text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                style={{ color: "hsl(0, 0%, 100%)" }}
              >
                <Send className="w-4 h-4" />
                Send via WhatsApp
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" style={{ color: "hsl(0, 0%, 100%)" }} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Our Office</h3>
                  <p className="text-muted-foreground text-sm font-body">
                    145, RE Mada St, Nehru Nagar,<br />
                    Tirupati, Andhra Pradesh 517501
                  </p>
                </div>
              </div>
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" style={{ color: "hsl(0, 0%, 100%)" }} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Call Us</h3>
                  <a href="tel:+918073484406" className="text-primary text-sm font-body hover:underline">
                    +91 80734 84406
                  </a>
                </div>
              </div>
              <div className="glass-card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" style={{ color: "hsl(0, 0%, 100%)" }} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Working Hours</h3>
                  <p className="text-muted-foreground text-sm font-body">
                    Monday – Saturday: 9 AM – 8 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden border border-border h-[250px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.2!2d79.4192!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzQzLjciTiA3OcKwMjUnMDkuMSJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lotus Designs Office Location"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
