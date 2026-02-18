import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
  useTransform,
} from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const navItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Contact", href: "#contact" },
  ];

  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["50%", "40%"]);
  const bgOpacity = useTransform(scrollY, [0, 100], [0.4, 0.7]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
    setMenuOpen(false)
  });

  return (
    <motion.nav
      style={{
        boxShadow: scrolled ? "var(--shadow-special)" : "none",
        width,
        y,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 top-3 z-50 mx-auto max-w-4xl  rounded-xl
        flex items-center justify-between px-6 py-2 border border-white/5"
    >
      {/* Background blur layer */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0 backdrop-blur-md bg-bg"
      />

      {/* Content */}
      <img
        className="relative z-10 h-8 w-8 rounded-full object-cover"
        src="/me.png"
        alt="Profile"
      />

      {/* Desktop Nav */}
      <div className="relative z-10 hidden items-center gap-3 md:flex">
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

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="relative z-10 block md:hidden"
      >
        <div className="flex flex-col gap-1.5">
          <span className="h-[2px] w-5 bg-white/80" />
          <span className="h-[2px] w-5 bg-white/80" />
          <span className="h-[2px] w-5 bg-white/80" />
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full mt-2 w-full rounded-xl border border-white/5 bg-bg/80 backdrop-blur-xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 w-full py-2 text-sm text-white/80 hover:bg-white/5"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
