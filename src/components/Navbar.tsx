import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo final1.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["About", "Features", "How It Works", "Contact"];

  const handleSmoothScroll = (e: any, item: string) => {
    e.preventDefault();
    try {
      const id = item.toLowerCase().replace(/\s+/g, "-");
      const element = document.getElementById(id);
      console.log("nav click ->", item, "-> id:", id, "element:", element);

      // If element found, scroll with an offset to account for fixed header
      if (element) {
        const headerOffset = 80; // px; adjust if header height differs
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        // fallback: change location hash (non-smooth)
        window.location.hash = id;
      }
    } catch (err) {
      console.error("smooth scroll error:", err);
    }

    // Close mobile menu if open
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img src={logo} alt="eReport Logo" className="h-14 w-auto" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => handleSmoothScroll(e, item)}
                className="text-gray-700 hover:text-[#DC143C] transition-colors duration-300 relative group cursor-pointer"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#DC143C] to-[#FFD700] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-gradient-to-r from-[#DC143C] to-[#B00020] hover:from-[#B00020] hover:to-[#DC143C] text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#DC143C]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => handleSmoothScroll(e, item)}
                className="block py-2 px-4 text-gray-700 hover:text-[#DC143C] hover:bg-red-50 rounded-lg transition-colors duration-300 cursor-pointer"
                style={{
                  transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isOpen ? 1 : 0,
                  transition: `all 300ms ${index * 100}ms`,
                }}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-2 px-4 pt-4 border-t border-gray-200">
              <Button className="bg-gradient-to-r from-[#DC143C] to-[#B00020] text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}