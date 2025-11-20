import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import logo from "../assets/logo final1.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Background decoration (red part removed) */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD700] rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img src={logo} alt="eReport Logo" className="h-24 w-auto mx-auto mb-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg space-y-4"
          >
            <div className="flex items-center gap-3 justify-center">
              <Mail className="w-5 h-5 text-[#DC143C] mt-1 flex-shrink-0" />
              <a href="mailto:support@ereport.com" className="hover:text-[#FFD700] transition-colors duration-300">
                support@ereport.com
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <MapPin className="w-5 h-5 text-[#DC143C] mt-1 flex-shrink-0" />
              <span>Lyceum of the Philippines - Cavite</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}