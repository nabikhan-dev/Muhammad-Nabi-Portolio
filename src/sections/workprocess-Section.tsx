"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ type-only import (fixes TS1484)
import {processsteps} from "../utils/data"


// ✅ Correct animation typing
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 1.1,
      ease: [0.25, 0.1, 0.25, 1], // ✅ valid easing array
    },
  }),
};

const WorkProcessSection = () => {
  const { scrollYProgress } = useScroll();
  const yMove = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <motion.section
      className="relative py-10 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-slate-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="process"
    >
      {/* === Floating Animated Background Orbs === */}
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

      {/* === Section Title === */}
      <motion.h2
        className="text-center mb-10 md:mb-20 bg-gradient-to-br from-cyan-200 to-blue-400 bg-clip-text text-transparent text-2xl sm:text-3xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      Behind the Build
      </motion.h2>

      {/* === Process Steps === */}
      <div className="relative w-[90%] max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {processsteps.map((step, i) => (
          <motion.div
            key={step.id}
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
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 12,
              }}
              className="group relative backdrop-blur-xl bg-gradient-to-br 
              from-gray-800/40 via-gray-700/20 to-transparent border border-gray-500/30 
              rounded-3xl p-8 shadow-lg overflow-hidden h-full 
              transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
              hover:border-cyan-400/50"
            >
              {/* === Shimmer Line === */}
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

              {/* === Step Number === */}
              <motion.span
                className="text-7xl font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 
                absolute top-4 right-6 select-none pointer-events-none"
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {step.id}
              </motion.span>

              {/* === Step Title === */}
              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {step.title}
              </h3>

              {/* === Step Description === */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WorkProcessSection;
