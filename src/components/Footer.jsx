import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconHeart,
} from "@tabler/icons-react";

const Footer = () => {
  const socials = [
    {
      href: "https://github.com/abhishekpandey-001",
      icon: IconBrandGithub,
    },
    {
      href: "https://www.linkedin.com/in/abhishek-pandey001/",
      icon: IconBrandLinkedin,
    },
    {
      href: "https://x.com/syntax_buddy",
      icon: IconBrandTwitter,
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mx-5 mt-20 border-t border-white/10 pt-6 pb-8 sm:mx-9"
    >
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        
        {/* Left */}
        <p className="flex items-center gap-2 text-sm text-white/60">
          Made with
          <IconHeart size={16} className="text-red-500" />
          by <span className="text-white/80">Abhishek Pandey</span>
        </p>

        {/* Right */}
        <div className="flex items-center gap-6">
          {socials.map(({ href, icon: Icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              {/* Silver Shine Sweep */}
              <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.8s_ease-in-out]"></span>
              </span>

              <Icon
                size={22}
                className="relative z-10 text-white/60 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.7)]"
              />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
