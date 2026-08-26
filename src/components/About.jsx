export default function About() {
  return (
    <section 
      id="about" 
      className="relative z-10 bg-white py-20 text-gray-900 border-t border-slate-200 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.15)] rounded-t-[2.5rem]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Grid Layout: Course Info Left, Highlights Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT SIDE: Course Meta & Description */}
          <div className="flex flex-col gap-5">
            
            {/* Section Header */}
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1.5">
                Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mb-1">
                About the Course
              </h2>
              <p className="text-gray-600 text-sm font-semibold">
                IS 302 • Business Process Management (BPM)
              </p>
            </div>

            {/* Compact Course Meta Info Chips - 2 columns on mobile, flex row on sm+ */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 text-[11px] font-medium text-slate-700">
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200/80 rounded-xl sm:rounded-full truncate text-center sm:text-left">
                <strong className="text-slate-900">College:</strong> CICT
              </span>
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200/80 rounded-xl sm:rounded-full truncate text-center sm:text-left">
                <strong className="text-slate-900">Program:</strong> BSIS
              </span>
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200/80 rounded-xl sm:rounded-full truncate text-center sm:text-left">
                <strong className="text-slate-900">Pre-req:</strong> IS 207
              </span>
              <span className="px-3 py-1.5 bg-slate-100 border border-slate-200/80 rounded-xl sm:rounded-full truncate text-center sm:text-left">
                <strong className="text-slate-900">Faculty:</strong> Dr. J. Bayonito
              </span>
            </div>

            {/* Course Description */}
            <div className="p-0 mt-1">
              <h3 className="text-base sm:text-lg font-bold text-black mb-2">
                Course Description
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                This course introduces the principles, methodologies, and tools used to define, model, analyze, implement, monitor, and improve business processes within organizations. It emphasizes the strategic role of BPM in aligning information systems with business goals to drive operational efficiency and innovation.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Students explore business process modeling techniques, performance measurement frameworks, and process improvement strategies such as reengineering and continuous improvement to contribute to data-driven decision-making and digital transformation initiatives.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE: Key Highlights (01, 02, 03) */}
          <div className="flex flex-col gap-4">
            
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <span className="text-xl font-black text-blue-600 block mb-1">01</span>
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Process Modeling</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Define, model, and analyze organizational workflows using industry standards.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <span className="text-xl font-black text-blue-600 block mb-1">02</span>
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Process Improvement</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Apply reengineering strategies and continuous improvement frameworks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
              <span className="text-xl font-black text-blue-600 block mb-1">03</span>
              <h4 className="font-bold text-black text-sm sm:text-base mb-1">Digital Alignment</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Align information systems with strategic business goals for transformation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}