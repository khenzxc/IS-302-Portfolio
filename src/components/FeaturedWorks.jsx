import { Layers, Database, Workflow, ShieldCheck } from "lucide-react";

const FEATURED_WORKS = [
  {
    id: "01",
    title: "Sagana Web Application",
    category: "Full-Stack System",
    desc: "A web platform designed to streamline supply chain workflows and inventory operations for agricultural distribution.",
    icon: Layers,
    tags: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    id: "02",
    title: "Business Process Modeling",
    category: "BPMN & DFD Framework",
    desc: "Comprehensive As-Is and To-Be process models mapping out organizational workflows and data movement.",
    icon: Workflow,
    tags: ["BPMN 2.0", "Data Flow Diagram", "Process Mapping"],
  },
  {
    id: "03",
    title: "Database & ERD Design",
    category: "System Architecture",
    desc: "Normalized entity-relationship schemas structured with explicit business rules for reliable data consistency.",
    icon: Database,
    tags: ["ERD", "SQL Schema", "Business Rules"],
  },
  {
    id: "04",
    title: "Financial & Efficiency Report",
    category: "Process Analytics",
    desc: "In-depth financial ratio analysis and cost-benefit evaluations driving data-informed business transformation.",
    icon: ShieldCheck,
    tags: ["WACC", "Profitability Ratios", "BPM Metrics"],
  },
];

export default function FeaturedWorks() {
  return (
    <section 
      id="works" 
      className="relative z-10 bg-[#030e21] py-20 text-white border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Centered */}
        <div className="max-w-2xl mb-12 text-center mx-auto">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1.5">
            Portfolio Highlights
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            Featured Works
          </h2>
          <p className="text-xs sm:text-sm text-blue-200/70">
            A showcase of core systems, process models, and analytical frameworks developed for IS-302.
          </p>
        </div>

        {/* 2 by 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {FEATURED_WORKS.map((work) => {
            const IconComponent = work.icon;
            return (
              <div 
                key={work.id} 
                className="group p-6 rounded-2xl bg-[#0a1835]/80 border border-blue-900/50 shadow-md hover:border-blue-500/50 hover:bg-[#0a1835] transition-all backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black text-blue-400">
                      {work.id}
                    </span>
                    <div className="p-2.5 rounded-xl bg-blue-950/60 text-blue-400 border border-blue-800/40 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category & Title */}
                  <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider block mb-1">
                    {work.category}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {work.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-blue-100/70 leading-relaxed mb-5">
                    {work.desc}
                  </p>
                </div>

                {/* Badges / Tags */}
                <div className="pt-4 border-t border-blue-900/40 flex flex-wrap gap-2">
                  {work.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-md bg-blue-950/80 text-[11px] font-medium text-blue-200 border border-blue-800/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}