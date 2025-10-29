"use client";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import {data} from "../utils/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  }),
};

const ProjectSection = () => {
  const [selected, setSelected] = useState<any>(null);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);
  const [showFullDescription, setShowFullDescription] = useState<{ [key: number]: boolean }>({});

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const glowMove = useTransform(scrollYProgress, [0, 1], ["translateY(0%)", "translateY(20%)"]);

  return (
    <motion.section
      className="relative overflow-hidden py-10 sm:py-16 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
    >
      {/* === BACKGROUND === */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-primary">
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-sky-900/20 via-cyan-700/10 to-indigo-700/20 bg-[length:200%_200%]"
        />
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            style={{ y: yParallax, top: `${i * 25 + 10}%`, left: `${i * 20 + 5}%` }}
            className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-cyan-500 to-indigo-700"
            animate={{ x: [0, 100, -50, 0], y: [0, -50, 100, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <motion.div style={{ y: glowMove }} className="absolute inset-0 opacity-[0.07]" />
      </div>

      {/* === CONTENT === */}
      <div className="relative w-[90%] max-w-7xl mx-auto">
        <motion.h2
          className="text-center mb-10 md:mb-20 bg-gradient-to-br from-cyan-200 to-blue-400 bg-clip-text text-transparent text-2xl sm:text-3xl font-bold"
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
       Some of My Favorite Work
        </motion.h2>

        {/* === PROJECT GRID === */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {data.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={fadeUp}
              whileHover={{ rotateY: 8, rotateX: -3, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              className="group relative backdrop-blur-md bg-white/5 border border-gray-800 rounded-3xl overflow-hidden shadow-lg transition-all duration-700"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-t-3xl group-hover:scale-110 transition-transform duration-[1500ms]"
              />
              <div className="p-6 flex flex-col justify-between min-h-[220px]">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm ">
                    {showFullDescription[project.id]
                      ? project.description
                      : project.description.length > 120
                        ? project.description.slice(0, 120) + "..."
                        : project.description}


                    {project.description.length > 120 && (
                      <button
                        onClick={() =>
                          setShowFullDescription((prev) => ({
                            ...prev,
                            [project.id]: !prev[project.id],
                          }))
                        }
                        className="text-cyan-400 text-sm hover:underline mb-8"
                      >
                        {showFullDescription[project.id] ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </p>
                </div>

                {/* === TECH ICONS === */}
                <div className="flex items-center gap-3 text-2xl mt-auto text-cyan-400 mb-4">
                  {project.tech.map((icon: any, idx: number) => (
                    <motion.img
                      key={idx}
                      src={icon.src}
                      alt={icon.name}
                      className="w-6 h-6"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2 + idx, repeat: Infinity }}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.08, backgroundColor: "#0f172a" }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setSelected(project);
                    setActiveScreenshot(project.screenshots[0]);
                  }}
                  className="group flex items-center gap-2 rounded-full px-5 py-2 text-sm text-white border border-gray-500/50 hover:border-gray-400/50 transition-all"
                >
                  View Project
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* === MODAL === */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl max-h-[90vh] w-full max-w-2xl relative shadow-2xl border border-gray-700 overflow-hidden flex flex-col"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  onClick={() => {
                    setSelected(null);
                    setActiveScreenshot(null);
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl z-50"
                >
                  ✕
                </button>

                <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                  {activeScreenshot && (
                    <motion.img
                      key={activeScreenshot}
                      src={activeScreenshot}
                      alt={selected.title}
                      className="w-full object-cover h-[250px] sm:h-[300px] rounded-t-2xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  )}

                  <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      {selected.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-2">
                      {showFullDescription[selected.id]
                        ? selected.description
                        : selected.description.length > 180
                          ? selected.description.slice(0, 180) + "..."
                          : selected.description}
                    </p>

                    {selected.description.length > 200 && (
                      <button
                        onClick={() =>
                          setShowFullDescription((prev) => ({
                            ...prev,
                            [selected.id]: !prev[selected.id],
                          }))
                        }
                        className="text-cyan-400 font-medium hover:underline mb-4"
                      >
                        {showFullDescription[selected.id] ? "Read Less" : "Read More"}
                      </button>
                    )}

                    <div className="flex gap-3 mt-4 pb-2 flex-wrap justify-center">
                      {selected.screenshots.map((src: string, i: number) => (
                        <motion.img
                          key={i}
                          src={src}
                          alt={`${selected.title} screenshot ${i + 1}`}
                          className={`w-28 h-20 sm:w-32 sm:h-24 object-cover rounded-lg cursor-pointer border transition-transform hover:scale-105 ${activeScreenshot === src
                            ? "border-cyan-400"
                            : "border-gray-700 hover:border-cyan-400"
                            }`}
                          onClick={() => setActiveScreenshot(src)}
                        />
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center mt-6">
                      {selected.tech.map((t: any, idx: number) => (
                        <span
                          key={idx}
                          className="text-xs sm:text-sm px-3 py-1 rounded-full text-white shadow-md border border-gray-700"
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
