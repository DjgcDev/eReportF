import { motion } from "motion/react";
import { Camera, Upload, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
const logo = new URL("../assets/logo final1.png", import.meta.url).href;

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50 to-yellow-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#DC143C] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* removed bottom red decorative blur to avoid overlap above footer */}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo - Made Much Bigger */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center mt-12 mb-3"
          >
            <img src={logo} alt="eReport Logo" className="pt-8 h-48 sm:h-64 md:h-80 lg:h-96 w-auto" />
          </motion.div>

          {/* Logo/Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#DC143C] to-[#B00020] rounded-full mb-2 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-[#FFD700]" />
            <span className="text-white">Next-Gen Reporting System</span>
          </motion.div>

          {/* Main Heading - Removed since it's already in the logo */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sr-only"
          >
            eReport LPU C
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-700 max-w-3xl mx-auto"
          >
            Empower Your Campus. Report Problems. Drive Change.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg mb-12 text-gray-600 max-w-2xl mx-auto"
          >
            The revolutionary platform that enables students to capture, upload, and report campus issues directly to the right departments with just a tap.
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-[#FFD700]">
              <Camera className="w-5 h-5 text-[#DC143C]" />
              <span className="text-gray-700">Instant Capture</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-[#FFD700]">
              <Upload className="w-5 h-5 text-[#DC143C]" />
              <span className="text-gray-700">Quick Upload</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-[#FFD700]">
              <AlertCircle className="w-5 h-5 text-[#DC143C]" />
              <span className="text-gray-700">Direct Reporting</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#DC143C] to-[#B00020] hover:from-[#B00020] hover:to-[#DC143C] text-white px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 relative z-10"
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white px-8 py-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center mt-12 pb-8 mb-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 border-2 border-[#DC143C] rounded-full flex items-start justify-center p-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-[#DC143C] rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}