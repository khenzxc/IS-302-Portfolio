import { projectMilestones } from "../data/team.js";

export default function Process() {
  return (
    <section 
      id="process" 
      className="relative z-10 bg-[#030e21] py-20 text-white border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Centered */}
        <div className="max-w-2xl mb-12 text-center mx-auto">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1.5">
            Coursework
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            Activities & Class Files
          </h2>
          <p className="text-xs sm:text-sm text-blue-200/70">
            Summary of exercises and requirements submitted for IS-302.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectMilestones.map((item, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-[#0a1835]/80 border border-blue-900/50 shadow-md hover:border-blue-500/50 hover:bg-[#0a1835] transition-all backdrop-blur-sm flex flex-col gap-1.5"
            >
              <span className="text-xl font-black text-blue-400 block mb-1">
                0{idx + 1}
              </span>
              <h3 className="font-bold text-sm sm:text-base text-white mb-1">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}