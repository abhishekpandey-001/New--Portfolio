import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", logo: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", logo: "https://cdn.simpleicons.org/css" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
  { name: "Express", logo: "https://cdn.simpleicons.org/express" },
  { name: "Material UI", logo: "https://cdn.simpleicons.org/mui" },
  { name: "Zustand", logo: "https://cdn.simpleicons.org/zotero" },
  { name: "Redux Toolkit", logo: "https://cdn.simpleicons.org/redux" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
];

const Skills = () => {
  return (
    <div className="mx-5 mt-10 flex flex-col sm:mx-9">
      <h1 className="text-[#e5e5e5] text-2xl font-bold tracking-tight md:text-4xl">
        Tech Stack
      </h1>

      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
        {skillsData.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 }}
            viewport={{ once: true }}
            className="
              group relative flex items-center gap-2 rounded-xl
              border border-white/10 bg-white/5 px-3 py-2
              transition hover:border-white/20
            "
          >
            {/* Subtle hover highlight (navbar/projects style) */}
            <span
              className="
                pointer-events-none absolute inset-0 rounded-xl
                bg-white/[0.04] border border-white/10
                opacity-0 transition
                group-hover:opacity-100
              "
            />

            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="relative z-10 h-4 w-4 opacity-80 transition group-hover:opacity-100"
              loading="lazy"
            />
            <span className="relative z-10 text-sm text-white/80 group-hover:text-white">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
