import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="mx-5 mt-8 flex flex-col sm:mx-9">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-[#e5e5e5] text-2xl font-bold tracking-tight md:text-4xl"
      >
        Abhishek Pandey
      </motion.h1>

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
