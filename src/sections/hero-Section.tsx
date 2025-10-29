"use client";
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
  AnimatePresence,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import dev from "../../src/assets/dev.png";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const TITLES = ["React Native Developer", "UI/UX Designer", "Web Developer"];

const HeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const [index, setIndex] = useState(0);

  // Animate gradient color
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // Rotate title every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      id="index"
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-primary px-4 py-24 text-gray-200"
    >
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center mt-2">
        <img src={dev} alt="Developer" className="w-24 mt-6" />

        <div className="mb-1.5 flex items-center rounded-full justify-between bg-gray-900/80 w-45 px-4 py-1.5 text-sm border border-gray-700">
          <div className="blinking-circle"></div>
          <h1>Nabi is Available..!!</h1>
        </div>

        {/* Animated Title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={TITLES[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl md:text-7xl"
          >
            {TITLES[index]}
          </motion.h1>
        </AnimatePresence>

        {/* Description */}
        <p className="my-6 max-w-3xl text-center text-base leading-relaxed text-gray-300 md:text-lg">
          I build modern mobile and web apps that look great and run smoothly.
          Using <strong>React Native</strong> and <strong>React.js</strong>, I focus on clean design,
          simple user experiences, and reliable performance. From design to deployment,
          I make sure every project is fast, user-friendly, and built to last.
        </p>

        {/* Button */}
        <motion.a
          href="https://docs.google.com/document/d/1h3A4OdAcsr4Rj-G1SdZ6MPQLktStL_SMFVaRDaViBQQ/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Download CV
          <FiArrowRight className="transition-transform group-hover:rotate-90 group-active:rotate-12" />
        </motion.a>
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default HeroSection;
