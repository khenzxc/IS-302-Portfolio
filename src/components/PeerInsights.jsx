"use client";

import { useState, useEffect, useMemo, useCallback } from "react";

const TOP_ROW_INSIGHTS = [
  {
    id: 1,
    quote: "Designing BPMN 2.0 diagrams helped us clearly visualize bottlenecks and streamline complex organizational workflows.",
    name: "Khen Gabriel",
    role: "Visual Creator, Team 1",
    avatar: "khen.webp",
  },
  {
    id: 2,
    quote: "Understanding As-Is and To-Be process modeling was a game changer for eliminating redundant manual steps in our system.",
    name: "Eldon Santos",
    role: "Lead Researcher, Team 1",
    avatar: "eldon.webp"
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
    name: "Yuki Ezekiel",
    role: "Team Leader, Team 1",
    avatar: "yuki.webp"
  },
  {
    id: 5,
    quote: "Aligning Key Performance Indicators (KPIs) with process goals proved essential for measuring continuous improvement.",
    name: "Simon Bolus",
    role: "Lead Writer, Team 1",
    avatar: "simon.webp"
  },
  {
    id: 6,
    quote: "Standardizing workflows ensures seamless cross-functional collaboration between IT infrastructure and business units.",
    name: "Kairos Sta Ana",
    role: "Project Checker, Team 1",
    avatar: "kaiross.webp",
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
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  const topRowRepeated = useMemo(
    () => [...TOP_ROW_INSIGHTS, ...TOP_ROW_INSIGHTS, ...TOP_ROW_INSIGHTS],
    []
  );
  const bottomRowRepeated = useMemo(
    () => [...BOTTOM_ROW_INSIGHTS, ...BOTTOM_ROW_INSIGHTS, ...BOTTOM_ROW_INSIGHTS],
    []
  );

  const resumeAll = useCallback(() => {
    setIsPausedRow1(false);
    setIsPausedRow2(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", resumeAll, { passive: true });
    window.addEventListener("touchmove", resumeAll, { passive: true });

    return () => {
      window.removeEventListener("scroll", resumeAll);
      window.removeEventListener("touchmove", resumeAll);
    };
  }, [resumeAll]);

  const handleMobileTouch = useCallback((row, e) => {
    if (!window.matchMedia("(pointer: coarse)").matches) return;

    e.stopPropagation();

    if (row === 1) {
      setIsPausedRow1((prev) => !prev);
      return;
    }

    setIsPausedRow2((prev) => !prev);
  }, []);

  return (
    <section
      id="insights"
      className="relative z-10 bg-white pt-0 pb-20 text-slate-900 overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] select-none"
    >
      <style jsx global>{`
        @keyframes marqueeRight {
          0% { transform: translate3d(-33.33%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
        @keyframes marqueeLeft {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-33.33%, 0, 0); }
        }
        .animate-marquee-right {
          animation: marqueeRight 35s linear infinite;
          will-change: transform;
        }
        .animate-marquee-left {
          animation: marqueeLeft 35s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="hidden md:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="hidden md:block absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
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

      <div className="flex flex-col gap-6 overflow-hidden">
        <div className="flex overflow-hidden">
          <div
            className="flex gap-6 w-max animate-marquee-right"
            style={{ animationPlayState: isPausedRow1 ? "paused" : "running" }}
            onClick={(e) => handleMobileTouch(1, e)}
          >
            {topRowRepeated.map((item, index) => (
              <div
                key={`top-${index}`}
                className="w-[320px] sm:w-[380px] p-6 rounded-2xl bg-slate-50/90 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex-shrink-0 flex flex-col justify-between"
              >
                <div>
                  <QuoteIcon />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 pointer-events-none">
                    "{item.quote}"
                  </p>
                </div>
                <ProfileFooter item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div
            className="flex gap-6 w-max animate-marquee-left"
            style={{ animationPlayState: isPausedRow2 ? "paused" : "running" }}
            onClick={(e) => handleMobileTouch(2, e)}
          >
            {bottomRowRepeated.map((item, index) => (
              <div
                key={`bottom-${index}`}
                className="w-[320px] sm:w-[380px] p-6 rounded-2xl bg-slate-50/90 border border-slate-200/80 backdrop-blur-md shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex-shrink-0 flex flex-col justify-between"
              >
                <div>
                  <QuoteIcon />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 pointer-events-none">
                    "{item.quote}"
                  </p>
                </div>
                <ProfileFooter item={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="w-7 h-7 text-blue-600 mb-4 fill-current pointer-events-none"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function ProfileFooter({ item }) {
  return (
    <div className="flex items-center gap-3 pointer-events-none">
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