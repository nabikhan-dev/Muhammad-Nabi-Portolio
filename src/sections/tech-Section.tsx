"use client";
import { motion } from "framer-motion";

const techRings = [
    {
        radius: 110,
        speed: 60,
        direction: "clockwise",
        iconSize: 20,
        icons: [
            { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        ],
    },
    {
        radius: 180,
        speed: 80,
        direction: "counterclockwise",
        iconSize: 24,
        icons: [
            { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", src: "https://devicon-website.vercel.app/api/express/original.svg?color=%23FFFFFF" },
            { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" },
            { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
            { name: "Appwrite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg" },
            { name: "Clerk", src: "https://devicon-website.vercel.app/api/circleci/plain.svg?color=%23FFFFFF" },
            { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", src: "https://devicon-website.vercel.app/api/github/original.svg?color=%23FFFFFF" },
        ],
    },
    {
        radius: 250,
        speed: 90,
        direction: "clockwise",
        iconSize: 26,
        icons: [
            { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Expo", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
            { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Photoshop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
            { name: "Illustrator", src: "https://devicon-website.vercel.app/api/illustrator/plain.svg?color=%23FAA625" },
            { name: "VSCode", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        ],
    },
];

const TechSection = () => {
    return (
        <section className="relative overflow-hidden" id="tech">
            {/* 🌈 Animated Gradient Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden bg-primary">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[320px] h-[320px] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-blue-500/30 via-cyan-600/40 to-indigo-500/50"
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
                        style={{
                            top: `${i * 20 + 10}%`,
                            left: `${(i * 24 + 8) % 80}%`,
                        }}
                    />
                ))}
            </div>


            <div className="relative py-10 flex flex-col lg:flex-row items-center justify-between w-[90%] max-w-7xl mx-auto overflow-hidden rounded-3xl gap-10 ">

                {/* 🧠 Left Side: Animated Description */}
                <motion.div
                    className="lg:w-1/2 w-full text-center lg:text-left space-y-6"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h3
                        className="text-3xl font-bold text-cyan-300"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        My Tech Stack
                    </motion.h3>

                    <motion.p
                        className="text-lg text-gray-300 leading-relaxed "
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        I use a diverse range of modern technologies to design and build
                        fast, scalable, and visually appealing applications. My primary
                        front-end tools include <span className="text-cyan-400 font-semibold">React.js</span>,
                        <span className="text-cyan-400 font-semibold"> React Native</span>,
                        <span className="text-cyan-400 font-semibold"> Next.js</span>, and
                        <span className="text-cyan-400 font-semibold"> Tailwind CSS</span>, which help me create
                        beautiful user interfaces. For backend development, I rely on
                        <span className="text-cyan-400 font-semibold"> Node.js</span>,
                        <span className="text-cyan-400 font-semibold"> Express.js</span>, and databases such as
                        <span className="text-cyan-400 font-semibold"> MongoDB</span>,
                        <span className="text-cyan-400 font-semibold"> Supabase</span>, and
                        <span className="text-cyan-400 font-semibold"> Firebase</span>.
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-300 leading-relaxed mb-24"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        I also integrate modern authentication tools like
                        <span className="text-cyan-400 font-semibold"> Clerk</span> and
                        <span className="text-cyan-400 font-semibold"> Appwrite</span> for secure user management.
                        For design and prototyping, I use
                        <span className="text-cyan-400 font-semibold"> Figma</span>,
                        <span className="text-cyan-400 font-semibold"> Photoshop</span>, and
                        <span className="text-cyan-400 font-semibold"> Illustrator</span>.
                        My workflow is powered by
                        <span className="text-cyan-400 font-semibold"> Git</span>,
                        <span className="text-cyan-400 font-semibold"> GitHub</span>, and
                        <span className="text-cyan-400 font-semibold"> VS Code</span>.
                        I love working with <span className="text-cyan-400 font-semibold">TypeScript</span>,
                        <span className="text-cyan-400 font-semibold"> JavaScript</span>, and frameworks like
                        <span className="text-cyan-400 font-semibold"> Expo</span> to bring projects to life.
                    </motion.p>
                </motion.div>

                {/* 💫 Right Side: Animated Tech Rings (unchanged) */}
                <div className="relative flex items-center justify-center p-4">
                    <div className="relative  w-[600px] aspect-square flex items-center justify-center">
                        <div className="w-10 h-10 border-2 border-cyan-300 rounded-full flex items-center justify-center bg-white/5 shadow-lg animate-pulse-slow z-20"></div>

                        {techRings.map((ring, ringIndex) => (
                            <motion.div
                                key={ringIndex}
                                className="absolute rounded-full border border-cyan-300/10"
                                style={{
                                    width: `${ring.radius * 2}px`,
                                    height: `${ring.radius * 2}px`,
                                }}
                                animate={{
                                    rotate: ring.direction === "clockwise" ? [0, 360] : [0, -360],
                                }}
                                transition={{
                                    duration: ring.speed,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                {ring.icons.map((tech, idx) => {
                                    const angle = (360 / ring.icons.length) * idx;
                                    // scale radius based on viewport for small devices
                                    const scaleFactor = Math.min(1, window.innerWidth / 300);
                                    const x = ring.radius * scaleFactor * Math.cos((angle * Math.PI) / 180);
                                    const y = ring.radius * scaleFactor * Math.sin((angle * Math.PI) / 180);
                                    const iconSize = ring.iconSize * scaleFactor;

                                    return (
                                        <div
                                            key={tech.name}
                                            className="absolute"
                                            style={{
                                                top: "50%",
                                                left: "50%",
                                                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                                            }}
                                        >
                                            <div
                                                className="rounded-full flex items-center justify-center shadow-md animate-float overflow-hidden bg-white/10 transition-transform duration-300 hover:scale-110 border border-cyan-200/30"
                                                style={{
                                                    width: `${iconSize * 1.9}px`,
                                                    height: `${iconSize * 1.9}px`,
                                                }}
                                            >
                                                <img
                                                    src={tech.src}
                                                    alt={tech.name}
                                                    title={tech.name}
                                                    style={{
                                                        width: `${iconSize}px`,
                                                        height: `${iconSize}px`,
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSection;
