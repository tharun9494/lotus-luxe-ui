import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/918073484406?text=Hi%20Lotus%20Designs%2C%20I%20am%20interested%20in%20your%20interior%20design%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 relative"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" style={{ color: "#fff" }} />
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: "#25D366", opacity: 0.3 }}
        />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
