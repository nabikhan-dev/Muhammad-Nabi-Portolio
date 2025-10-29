"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import {services} from "../utils/data"



// === Fade Animation Variants ===
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 1.1,
      ease: [0.25, 0.1, 0.25, 1], // ✅ Correct easing array
    },
  }),
};

const ServiceSection = () => {
  const { scrollYProgress } = useScroll();
  const yMove = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <motion.section
      className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-900 via-gray-900 to-slate-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
    >
      {/* === Floating Background Orbs === */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              y: yMove,
              top: `${i * 20 + 10}%`,
              left: `${(i * 24 + 8) % 80}%`,
            }}
            className="absolute w-[320px] h-[320px] rounded-full blur-3xl opacity-25 
              bg-gradient-to-br from-blue-500/30 via-cyan-600/40 to-indigo-500/50"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -120, 100, 0],
              scale: [1, 1.25, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 22 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* === Title === */}
      <motion.h2
        className="text-center mb-20 font-extrabold text-transparent text-4xl sm:text-3xl 
        bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 
        animate-gradient-x drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Expertise & Service
      </motion.h2>

      {/* === Service Cards === */}
      <div className="relative w-[90%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            custom={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 0 40px rgba(34,211,238,0.25)",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="group relative backdrop-blur-xl bg-gradient-to-br 
              from-gray-800/40 via-gray-700/20 to-transparent border border-gray-500/30 
              rounded-3xl p-8 shadow-lg overflow-hidden h-full 
              transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
              hover:border-cyan-400/50"
            >
              {/* Shimmer Sweep Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                whileHover={{ opacity: 0.5 }}
                animate={{ x: ["-200%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServiceSection;
