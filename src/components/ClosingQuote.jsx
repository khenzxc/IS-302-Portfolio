import { motion } from "framer-motion";

export default function ClosingQuote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-10 border-0 bg-white pt-4 pb-20 sm:pt-6 sm:pb-24"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-10 h-px w-full bg-slate-500 sm:mb-12" aria-hidden="true" />

        <blockquote className="text-2xl font-medium leading-relaxed tracking-[-0.03em] text-slate-900 sm:text-4xl lg:text-5xl">
          “At first, dreams seem impossible, then improbable, and eventually inevitable.”
        </blockquote>

        <p className="mt-8 text-base font-medium tracking-[0.2em] text-slate-600 uppercase sm:text-lg">
          — Marcus Aurelius
        </p>
      </div>
    </motion.section>
  );
}
