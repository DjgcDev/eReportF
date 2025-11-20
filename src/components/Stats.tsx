import { motion } from "motion/react";
import { useEffect, useState } from "react";

const stats = [
];

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-[#DC143C] via-[#B00020] to-[#DC143C] relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #FFD700 0%, transparent 50%), radial-gradient(circle at 80% 80%, #FFD700 0%, transparent 50%)`,
          backgroundSize: "100% 100%",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 hidden"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of students making their campus better every day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-[#FFD700] shadow-2xl hover:shadow-3xl transition-all duration-300">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl mb-4 text-[#FFD700]">
                    {isVisible ? (
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-white text-lg">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#FFD700] opacity-50" />
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#FFD700] opacity-50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge removed */}
      </div>
    </section>
  );
}
