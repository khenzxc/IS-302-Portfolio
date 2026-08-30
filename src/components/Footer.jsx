"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { href: "/", label: "Home", onClick: true },
  { href: "#about", label: "About Project" },
  { href: "#works", label: "Featured Works" },
  { href: "#team", label: "Team Members" },
  { href: "#insights", label: "Peer Insights" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "mailto:contact@example.com",
    label: "Email",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const fluidSpring = {
  type: "spring",
  stiffness: 70,
  damping: 14,
  mass: 0.8,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fluidSpring,
  },
};

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-[#030e21] border-t border-slate-800/80 pt-20 pb-12 text-slate-300 font-['Plus_Jakarta_Sans',sans-serif]">
      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          <motion.div variants={itemVariants} className="md:col-span-6 flex flex-col gap-4">
            <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest">
              Course Portfolio
            </span>

            <div className="flex items-center gap-4 my-1">
              <img
                src="insight-logo.webp"
                alt="InSight Logo"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              />
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                In<span className="text-blue-500">Sight</span>
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-md leading-relaxed">
                An academic portfolio showcase designed for students learning business processes and workflow architecture through practical team projects.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-slate-400">
              {quickLinks.map(({ href, label, onClick }) => (
                <a
                  key={label}
                  href={href}
                  onClick={onClick ? scrollToTop : undefined}
                  className="hover:text-blue-400 transition-colors w-fit flex items-center gap-1.5 cursor-pointer"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest">
              Connect
            </h4>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="w-11 h-11 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800/80 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-all hover:scale-105 shadow-sm"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-semibold text-slate-400 gap-4"
        >
          <p>© {new Date().getFullYear()} BSIS 3A-G2 Team 1 - BulSU</p>
          <p>
            Driven by insight.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}