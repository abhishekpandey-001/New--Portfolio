import { motion, useMotionValueEvent, useScroll, AnimatePresence} from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  const [hovered, setHovered] = useState(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      animate = {{
        boxShadow: scrolled ? "var(--shadow-special)" : "none",
        width: scrolled ? "50%": "100%",
        y: scrolled ? 10 : 0
      }}

      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className="fixed inset-x-0 top-3 z-50 mx-auto max-w-4xl rounded-xl
        flex items-center justify-between px-6 py-2
        backdrop-blur-md bg-bg/70 border border-white/5"
    >
      <img
        className="h-8 w-8 rounded-full object-cover"
        src="/me.png"
        alt="Profile"
      />

      <div className="flex items-center gap-3">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="relative px-2 py-1 text-sm"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <AnimatePresence>
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 20,
                    mass: 1.2,
                    delay: 0.04,
                  }}
                  className="pointer-events-none absolute inset-0 rounded-md bg-white/5 border border-white/10"
                />
              )}
            </AnimatePresence>

            <span className="relative z-10">{item.title}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
