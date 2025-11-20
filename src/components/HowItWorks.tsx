import { motion } from "motion/react";
import { Camera, Upload, Send, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Capture",
    description: "Spot an issue? Open eReport and snap a photo of the problem using your device camera.",
    color: "from-[#DC143C] to-[#B00020]",
  },
  {
    icon: Upload,
    title: "Upload",
    description: "Add details about the issue, select the location, and upload your photo with a single tap.",
    color: "from-[#FFD700] to-[#FFA500]",
  },
  {
    icon: Send,
    title: "Report",
    description: "Your report is automatically sent to the appropriate department for immediate action.",
    color: "from-[#DC143C] to-[#B00020]",
  },
  {
    icon: CheckCircle2,
    title: "Track",
    description: "Monitor the progress of your report in real-time and receive updates until it's resolved.",
    color: "from-[#FFD700] to-[#FFA500]",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#DC143C 1px, transparent 1px), linear-gradient(90deg, #DC143C 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#DC143C] to-[#B00020] bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to make your campus a better place
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting line (hidden on mobile, shown on md+) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-gradient-to-r from-[#FFD700] to-[#DC143C] opacity-30 z-0" />
                )}

                <div className="relative z-10">
                  {/* Step number */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#DC143C] to-[#B00020] rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white">
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-xl border-2 border-transparent hover:border-[#FFD700] transition-all duration-300 h-full"
                    whileHover={{ y: -10 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl mb-4 text-center text-[#DC143C]">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-6">
            It's that simple. Start reporting today!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=16eSI6zfeL8ODkW0pvbPXwrObHXWEXIga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#B00020] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 inline-block"
            >
              Download eReport Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
