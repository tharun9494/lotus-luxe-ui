import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918073484406?text=Hi%20Lotus%20Designs%2C%20I%20am%20interested%20in%20your%20interior%20design%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" style={{ color: "hsl(0, 0%, 100%)" }} />
    </motion.a>
  );
};

export default WhatsAppButton;
