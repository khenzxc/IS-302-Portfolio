import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fluidSpring,
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: fluidSpring,
  },
};

export default function About() {
  return (
    <section 
      id="about" 
      className="relative z-10 bg-white py-20 text-gray-900 border-t border-slate-200 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.15)] rounded-t-[2.5rem]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-5"
          >
            <motion.div variants={itemVariants}>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1.5">
                Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-1">
                About the Course
              </h2>
              <p className="text-gray-600 text-sm font-semibold">
                IS 302 • Business Process Management (BPM)
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 text-[11px] font-medium text-slate-700">
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200/80 rounded-xl sm:rounded-full truncate text-center sm:text-left transition-transform hover:scale-105">
                <strong className="text-slate-900">College:</strong> CICT
              </span>
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200/80 rounded-xl sm:rounded-full truncate text-center sm:text-left transition-transform hover:scale-105">
                <strong className="text-slate-900">Program:</strong> BSIS
              </span>
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200/80 rounded-xl sm:rounded-full truncate text-center sm:text-left transition-transform hover:scale-105">
                <strong className="text-slate-900">Pre-req:</strong> IS 207
              </span>
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200/80 rounded-xl sm:rounded-full truncate text-center sm:text-left transition-transform hover:scale-105">
                <strong className="text-slate-900">Faculty:</strong> Dr. Josephine Bayonito
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="p-0 mt-1">
              <h3 className="text-base sm:text-lg font-bold text-black mb-2">
                Course Description
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                This course introduces the principles, methodologies, and tools used to define, model, analyze, implement, monitor, and improve business processes within organizations. It emphasizes the strategic role of BPM in aligning information systems with business goals to drive operational efficiency and innovation.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Students explore business process modeling techniques, performance measurement frameworks, and process improvement strategies such as reengineering and continuous improvement to contribute to data-driven decision-making and digital transformation initiatives.
              </p>
            </motion.div>

          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4"
          >
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-shadow cursor-default"
            >
              <span className="text-xl font-black text-blue-600 block mb-1">01</span>
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Process Modeling</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Define, model, and analyze organizational workflows using industry standards.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-shadow cursor-default"
            >
              <span className="text-xl font-black text-blue-600 block mb-1">02</span>
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Process Improvement</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Apply reengineering strategies and continuous improvement frameworks.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-shadow cursor-default"
            >
              <span className="text-xl font-black text-blue-600 block mb-1">03</span>
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Digital Alignment</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Align information systems with strategic business goals for transformation.
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}