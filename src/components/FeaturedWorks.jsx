"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { activityList } from "../data/activities.js";

const SMOOTH_EASE = [0.16, 1, 0.3, 1];

const headerVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.9, 
      ease: SMOOTH_EASE 
    },
  },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: SMOOTH_EASE 
    },
  },
};

export default function FeaturedWorks() {
  return (
    <section 
      id="works" 
      className="relative z-10 bg-[#071938] py-20 text-white border-t border-blue-900/60 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerVariants}
          className="max-w-2xl mb-12 text-center mx-auto"
        >
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1.5">
            Portfolio Highlights
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            Featured Works
          </h2>
          <p className="text-xs sm:text-sm text-sky-100/70">
            A showcase of core systems, process models, and analytical frameworks developed for IS-302.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={gridContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {activityList.map((activity) => (
            <motion.div 
              key={activity.slug}
              variants={cardVariants}
              className="flex flex-col p-5 rounded-2xl bg-[#030d1e]/90 border border-sky-500/20 backdrop-blur-md shadow-xl hover:border-sky-400/50 transition-colors duration-300"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-slate-900 mb-5">
                <img
                src={activity.image}
                alt={activity.title}
                  draggable={false}
                  className="w-full h-full object-cover object-center select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030d1e]/90 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="flex flex-col flex-grow justify-between">
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1.5">
                    {activity.label}
                  </span>
                  
                  <h3 className="font-bold text-base sm:text-lg text-white mb-2">
                    {activity.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sky-900/40 flex items-center justify-between">
                  <Link
                    to={`/activities/${activity.slug}`}
                    className="group inline-flex items-center text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>View Activity</span>
                    <svg
                      className="w-4 h-4 ml-1.5 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}