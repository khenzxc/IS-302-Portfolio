"use client";

import { motion } from "framer-motion";

const TOP_ROW_INSIGHTS = [
  {
    id: 1,
    quote: "Designing BPMN 2.0 diagrams helped us clearly visualize bottlenecks and streamline complex organizational workflows.",
    name: "Samantha Johnson",
    role: "Project Reviewer, IS-302",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "Understanding As-Is and To-Be process modeling was a game changer for eliminating redundant manual steps in our system.",
    name: "Isabella Rodriguez",
    role: "Lead Evaluator, IS-302",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "Applying Root Cause and Gap Analysis allowed us to target real operational pain points instead of just treating symptoms.",
    name: "Gabrielle Williams",
    role: "Peer Collaborator, IS-302",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
  },
];

const BOTTOM_ROW_INSIGHTS = [
  {
    id: 4,
    quote: "Integrating automation into business processes taught us how to significantly reduce cycle times and human error.",
    name: "Alex Mercer",
    role: "Systems Analyst, IS-302",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 5,
    quote: "Aligning Key Performance Indicators (KPIs) with process goals proved essential for measuring continuous improvement.",
    name: "Victoria Thompson",
    role: "UI/UX Reviewer, IS-302",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 6,
    quote: "Standardizing workflows ensures seamless cross-functional collaboration between IT infrastructure and business units.",
    name: "John Peter",
    role: "Technical Lead, IS-302",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 7,
    quote: "BPM lifecycle management demonstrated how continuous monitoring turns static systems into adaptable solutions.",
    name: "Natalie Martinez",
    role: "Database Peer Evaluator",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
];

export default function PeerInsights() {
  const topRowRepeated = [...TOP_ROW_INSIGHTS, ...TOP_ROW_INSIGHTS, ...TOP_ROW_INSIGHTS];
  const bottomRowRepeated = [...BOTTOM_ROW_INSIGHTS, ...BOTTOM_ROW_INSIGHTS, ...BOTTOM_ROW_INSIGHTS];

  return (
    <section
      id="insights"
      className="relative z-10 bg-white py-20 text-slate-900 overflow-hidden"
    >
      {/* Ambient Lighting Glow (Soft Light Blue Center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />

      {/* Side Fade Gradient Overlays Matching White BG */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        {/* Header */}
        <div className="max-w-2xl text-center mx-auto">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1.5">
            Key Learnings & Takeaways
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
            BPM Process Insights
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Core takeaways and methodologies learned throughout our Business Process Management course.
          </p>
        </div>
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-6 overflow-hidden select-none">
        
        {/* Row 1: Moving Right */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {topRowRepeated.map((item, index) => (
            <div
              key={`top-${index}`}
              className="w-[320px] sm:w-[380px] p-6 rounded-2xl bg-slate-50/90 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <QuoteIcon />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>
              <ProfileFooter item={item} />
            </div>
          ))}
        </motion.div>

        {/* Row 2: Moving Left */}
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {bottomRowRepeated.map((item, index) => (
            <div
              key={`bottom-${index}`}
              className="w-[320px] sm:w-[380px] p-6 rounded-2xl bg-slate-50/90 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <QuoteIcon />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>
              <ProfileFooter item={item} />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// Sub-component: Quote Symbol (Deep Blue Accent)
function QuoteIcon() {
  return (
    <svg
      className="w-7 h-7 text-blue-600 mb-4 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

// Sub-component: Profile Avatar & Name
function ProfileFooter({ item }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={item.avatar}
        alt={item.name}
        className="w-9 h-9 rounded-full object-cover border border-blue-600/20 select-none"
        draggable={false}
      />
      <div>
        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
          {item.name}
        </h4>
        <p className="text-[10px] text-slate-500 font-medium">
          {item.role}
        </p>
      </div>
    </div>
  );
}