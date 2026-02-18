import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Fullstack Dev",
  "Frontend Dev",
  "React Developer",
  "UI Engineer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="mx-5 mt-8 flex flex-col sm:mx-9">
      {/* Name + Role */}
      <div className="flex flex-wrap items-center gap-2">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-[#e5e5e5] text-2xl font-bold tracking-tight md:text-3xl"
        >
          Abhishek Pandey
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-sm"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        className="max-w-lg pt-4 text-sm text-white/60 md:text-sm"
      >
        Frontend-focused Software Engineer skilled in building scalable and
        performance-optimized React applications. Experienced in modular
        architecture, RESTful API integration, and deploying projects with
        measurable performance improvements.
      </motion.p>
    </section>
  );
};

export default Hero;
