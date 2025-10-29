"use client";
import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiDribbble,
  FiPhone,
  FiGlobe,
  FiGithub,
} from "react-icons/fi";

const contacts = [
  {
    name: "Email",
    icon: <FiMail className="w-6 h-6 text-cyan-400" />,
    link: "mailto:nabiwazir30@gmail.com",
    value: "nabiwazir30@email.com",
  },
  {
    name: "LinkedIn",
    icon: <FiLinkedin className="w-6 h-6 text-cyan-400" />,
    link: "https://pk.linkedin.com/in/muhammad-nabi-061546298",
    value: "Muhammad Nabi",
  },
  {
    name: "Dribbble",
    icon: <FiDribbble className="w-6 h-6 text-cyan-400" />,
    link: "https://dribbble.com/nabi12",
    value: "Muhammad Nabi",
  },
  {
    name: "Behance",
    icon: <FiGlobe className="w-6 h-6 text-cyan-400" />,
    link: "https://www.behance.net/nabiwadaan",
    value: "Muhammad Nabi",
  },
  {
    name: "WhatsApp",
    icon: <FiPhone className="w-6 h-6 text-cyan-400" />,
    link: "https://wa.me/923348885173",
    value: "+92 3348885173",
  },
  {
    name: "GitHub",
    icon: <FiGithub className="w-6 h-6 text-cyan-400" />,
    link: "https://github.com/nabikhan-dev",
    value: "nabikhan-dev",
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-10 sm:py-16 md:py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* 🌈 Floating Lights */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-cyan-500/30 via-blue-600/40 to-indigo-600/50"
            animate={{
              x: [0, 100, -120, 0],
              y: [0, -80, 120, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 18 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${i * 25 + 10}%`,
              left: `${(i * 20 + 15) % 80}%`,
            }}
          />
        ))}
      </div>

      {/* 📬 Contact Info */}
      <div className="relative w-[90%] max-w-5xl mx-auto text-center space-y-12">
        <motion.h2
          className="text-center mb-10 md:mb-20 bg-gradient-to-br from-cyan-200 to-blue-400 bg-clip-text text-transparent text-2xl sm:text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Reach Out Anytime
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Feel free to reach out for collaborations, design discussions, or
          exciting new projects. I’m always open to creative ideas and teamwork!
        </motion.p>

        {/* 💌 Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 place-items-center">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-80 bg-white/5 border border-cyan-300/20 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 hover:border-cyan-300/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex-shrink-0 animate-pulse-slow">
                {contact.icon}
              </div>
              <div className="text-left">
                <h4 className="text-cyan-300 font-semibold">{contact.name}</h4>
                <p className="text-gray-400 text-sm">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
