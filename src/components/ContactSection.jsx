import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    window.location.href = `mailto:abhishekpandey.codes@gmail.com?subject=Portfolio Enquiry&body=Hi, I’d like to connect with you.`;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mx-5 mt-16 flex flex-col sm:mx-9"
      id="contact"
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-[#e5e5e5] text-2xl font-bold tracking-tight md:text-3xl">
          Get in touch
        </h2>

        <div className="mt-4 h-px w-16 bg-gradient-to-r from-white/40 to-transparent" />

        <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, hit that button.
        </p>

        <form
          onSubmit={handleSubmit}
          className="group mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2 rounded-xl border border-white/15 bg-white/[0.03] p-3 sm:p-2 backdrop-blur-md transition hover:border-white/25"
        >
          <input
            type="email"
            placeholder="Your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
          />

          {/* Dark Metallic Silver Button */}
          <button
            type="submit"
            className="
              relative overflow-hidden
w-full sm:w-auto
rounded-lg px-6 py-3 sm:py-2.5 text-sm font-medium
text-white
bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700
border border-white/20
shadow-[0_0_12px_rgba(255,255,255,0.1)]
transition-all duration-300
hover:scale-[1.04]
hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
active:scale-[0.97]
            "
          >
            <span className="relative z-10">Send Enquiry</span>

            {/* Shine sweep */}
            <span
              className="
                pointer-events-none absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent via-white/30 to-transparent
                opacity-60 blur-md
                transition-transform duration-700
                group-hover:translate-x-full
              "
            />
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
