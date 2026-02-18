import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-5 mt-10 flex flex-col sm:mx-9"
    >
      <h1 className="text-[#e5e5e5] text-2xl font-bold tracking-tight md:text-4xl">
        Education
      </h1>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        {/* University Logo */}
        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src="/myuni.png"
            alt="AKTU Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-[#e5e5e5]">
            Abdul Kalam Technical University
          </h3>
          <p className="text-sm text-white/70">
            Bachelor of Technology in Computer Science & Engineering
          </p>
        </div>

        {/* Year */}
        <div className="text-sm text-white/60 sm:ml-auto whitespace-nowrap">
          2021 – 2025
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
