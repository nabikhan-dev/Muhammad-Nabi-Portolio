"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black py-10 border-t border-cyan-300/10 overflow-hidden">
      {/* 🌈 Floating glow orbs (subtle motion) */}
      <div className="w-[90%] max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        {/* ✍️ Copyright */}
        <motion.p
          className="text-gray-400 text-sm tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-semibold">Muhammad Nabi</span>.
          All Rights Reserved.
        </motion.p>

        {/* 💙 Signature line or tagline */}
        <motion.p
          className="text-gray-500 text-xs italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Designed & built with ❤️ using React & Tailwind CSS.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
