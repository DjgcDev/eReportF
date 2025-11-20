import { motion } from "motion/react";
import { Camera, Upload, Bell, CheckCircle, Users, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const home123 = new URL("../assets/home123.png", import.meta.url).href;
const logoFinal1 = new URL("../assets/logo final1.png", import.meta.url).href;
const notification = new URL("../assets/notification.png", import.meta.url).href;
const newrp = new URL("../assets/newrp.png", import.meta.url).href;
const ictportal = new URL("../assets/ictportal.png", import.meta.url).href;
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const features = [
  {
    title: "Home Dashboard",
    description: "Take photos of campus issues directly from the app with our advanced camera integration. Document problems in real-time with precise location tagging.",
    icon: Camera,
    image: home123,
  },

  {
    title: "Real-Time Notifications",
    description: "Get instant updates on your reports. Track progress, receive status changes, and stay informed about resolution timelines with push notifications.",
    icon: Bell,
    image: notification,
  },
  {
    title: "Department Routing",
    description: "Users can report issues directly to the appropriate department, ensuring faster response times and efficient problem resolution.",
    icon: CheckCircle,
    image: newrp,
  },
  {
    title: "Department Dashboard",
    description: "Department staff can efficiently manage and prioritize incoming reports. They can view, manage, and update the status of issues all in one centralized platform.",
    icon: Users,
    image: ictportal,
  },
  {
    title: "Reporting System",
    description: "Student can easily upload images of campus issues directly from their mobile devices, providing clear visual context to help departments address problems more effectively.",
    icon: Upload,
    image: newrp,
  },
];

export function FeaturesCarousel() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFD700] rounded-full filter blur-3xl opacity-10" />
      {/* removed bottom-right red decorative blur to avoid overlap above footer */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#DC143C] to-[#B00020] bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how eReport revolutionizes campus issue reporting with cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#FFD700]">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative h-64 md:h-auto overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-[#FFD700]/20 z-10" />
                          <ImageWithFallback
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-cover"
                          />
                          <motion.div
                            className="absolute top-6 left-6 bg-white rounded-full p-4 shadow-xl z-20"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <feature.icon className="w-8 h-8 text-[#DC143C]" />
                          </motion.div>
                        </div>

                        {/* Content Side */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFF8DC] rounded-full mb-4 self-start">
                            <span className="text-[#B00020]">Feature {index + 1}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl mb-4 text-[#DC143C]">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-2 border-[#DC143C] text-[#DC143C]" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white border-2 border-[#DC143C] text-[#DC143C]" />
          </Carousel>
        </motion.div>

        {/* Feature count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            Swipe or use arrows to explore all {features.length} powerful features
          </p>
        </motion.div>
      </div>
    </section>
  );
}