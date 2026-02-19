import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Forge UI",
    description:
      "AI-driven React app that converts text prompts into optimized UI components using Gemini API, featuring live in-browser preview via Sandpack and performance-focused architecture.",
    image: "/forgeui.png", // <-- add image url here
    tech: [
      { name: "React", logo: "https://cdn.simpleicons.org/react" },
      { name: "Sandpack", logo: "https://cdn.simpleicons.org/codesandbox" },
      { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Gemini API", logo: "https://cdn.simpleicons.org/google" },
    ],
    live: "https://forge-ui-alpha.vercel.app/",
    github: "https://github.com/abhishekpandey-001/ForgeUI",
  },
  {
    title: "Artifacta-Landing Page",
    description:
      "Modern, responsive landing page built with React and Vite, featuring smooth animations and a modular, performance-optimized architecture.",
    image: "/landingpage.png", // <-- add image url here
    tech: [
      { name: "React", logo: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Framer Motion", logo: "https://cdn.simpleicons.org/framer" },
    ],
    live: "https://artifacta-frontend.vercel.app/",
    github:
      "https://github.com/abhishekpandey-001/Artifacta-Frontend/tree/main",
  },
  {
    title: "Developer Portfolio",
    description:
      "A clone of Apple's website that showcases their products and services.",
    image: "/portfolio.png", // <-- add image url here
    tech: [
      { name: "React", logo: "https://cdn.simpleicons.org/react" },
      { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
      { name: "Framer Motion", logo: "https://cdn.simpleicons.org/framer" },
    ],
    live: "https://new-portfolio-sepia-six.vercel.app/",
    github: "https://github.com/abhishekpandey-001/New--Portfolio",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="mx-5 mt-10 flex flex-col sm:mx-9">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-[#e5e5e5] text-2xl font-bold tracking-tight md:text-3xl"
      >
        My Projects
      </motion.h1>

      <div className="mt-4 h-px w-16 bg-gradient-to-r from-white/40 to-transparent" />

      <p className="mt-4 text-white/60">
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: idx * 0.08,
            }}
            whileHover={{ y: -4 }}
            className="
              group relative overflow-hidden rounded-2xl
              border border-white/10 bg-white/[0.02]
              transition hover:border-white/20
            "
          >
            {/* Subtle navbar-style hover background */}
            <span
              className="
                pointer-events-none absolute inset-0
                rounded-2xl bg-white/[0.04] border border-white/10
                opacity-0 transition
                group-hover:opacity-100
              "
            />

            {/* Image */}
            <div className="relative z-10 h-44 w-full overflow-hidden rounded-xl bg-white/5">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-white/30">
                  Add project image
                </div>
              )}
            </div>

            {/* Content */}
            <div className="relative z-10 p-4">
              <h3 className="text-lg font-semibold text-[#e5e5e5]">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-white/60">
                {project.description}
              </p>

              {/* Tech Stack */}

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {project.tech.map((t) => (
                  <div
                    key={t.name}
                    className="
                    flex items-center gap-1.5 rounded-full
                    border border-white/10 bg-white/5
                    px-2 py-1
      "
                  >
                    <img
                      src={t.logo}
                      alt={t.name}
                      className="h-3.5 w-3.5 opacity-80"
                    />
                    <span className="text-[11px] text-white/70">{t.name}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-xs text-white/70 transition hover:text-white"
                >
                  Live →
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-xs text-white/70 transition hover:text-white"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
