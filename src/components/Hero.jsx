import { FileText, Database, Settings, GitBranch, Network, Workflow, ShieldCheck } from "lucide-react";
import { useScrollEffects } from "../hooks/useScrollEffects";

export default function Hero() {
    const { opacity, blur, scale } = useScrollEffects();

    return (
        <section
            style={{
                opacity,
                filter: `blur(${blur}px)`,
                transform: `scale(${scale})`,
            }}
            className="sticky top-16 z-0 overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-12 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 text-gray-900 transition-transform duration-75 ease-out will-change-transform relative"
        >
            {/* ================= VISIBLE AMBIENT BLUE GLOWS ================= */}
            
            {/* 1. Top/Center Primary Glow (Responsive Width/Height) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[650px] h-[85vw] max-h-[650px] bg-blue-200/50 sm:bg-blue-100/60 rounded-full blur-3xl pointer-events-none z-0" />

            {/* 2. Bottom Secondary Glow (Adjusted Position per Screen Size) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[90vw] max-w-[550px] h-[40vw] max-h-[300px] bg-blue-200/40 sm:bg-blue-100/50 rounded-full blur-3xl pointer-events-none z-0" />

            {/* Subtle Blue Grid Lines Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb15_1px,transparent_1px),linear-gradient(to_bottom,#2563eb15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* ================= FLOATING ICONS ================= */}

            {/* 1. Top Left Corner */}
            <div className="absolute left-8 lg:left-16 top-12 hidden md:flex items-center pointer-events-none z-10">
                <Workflow className="w-10 h-10 text-blue-500/80 drop-shadow-sm" strokeWidth={1.8} />
            </div>

            {/* 2. Middle Left Side */}
            <div className="absolute left-6 lg:left-20 top-1/2 -translate-y-1/2 hidden md:flex items-center pointer-events-none z-0">
                <FileText className="w-12 h-12 text-blue-600 drop-shadow-md" strokeWidth={1.8} />
            </div>

            {/* 3. Bottom Left Corner */}
            <div className="absolute left-12 lg:left-28 bottom-12 hidden md:flex items-center pointer-events-none z-0">
                <Database className="w-10 h-10 text-blue-500/80 drop-shadow-sm" strokeWidth={1.8} />
            </div>

            {/* 4. Top Right Corner */}
            <div className="absolute right-10 lg:right-20 top-12 hidden md:flex items-center pointer-events-none z-0">
                <Settings className="w-11 h-11 text-blue-500/80 animate-[spin_16s_linear_infinite] drop-shadow-sm" strokeWidth={1.8} />
            </div>

            {/* 5. Middle Right Side */}
            <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden md:flex items-center pointer-events-none z-0">
                <GitBranch className="w-11 h-11 text-blue-600 drop-shadow-md" strokeWidth={1.8} />
            </div>

            {/* 6. Bottom Right Corner */}
            <div className="absolute right-14 lg:right-32 bottom-10 hidden md:flex items-center pointer-events-none z-0">
                <Network className="w-10 h-10 text-blue-600/80 drop-shadow-sm" strokeWidth={1.8} />
            </div>

            {/* 7. Bottom Center Icon */}
            <div className="absolute left-1/3 bottom-6 hidden lg:flex items-center pointer-events-none z-0">
                <ShieldCheck className="w-9 h-9 text-blue-400/70" strokeWidth={1.5} />
            </div>

            {/* ================= HERO CONTENT ================= */}

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 my-auto">
                <span className="text-xs font-bold tracking-widest text-[#030e21] uppercase mb-4 block">
                    IS-302 • Business Process Management
                </span>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-black leading-[1.25] mb-6">
                    Our{" "}
                    <span className="relative inline-block text-blue-600">
                        Learning
                        {/* Thick Curved Line Underline */}
                        <svg
                            className="absolute -bottom-1.5 left-0 w-full h-4 text-blue-600 pointer-events-none"
                            viewBox="0 0 250 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M 5 14 Q 125 2, 245 14"
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>{" "}
                    <span className="ml-2">Journey in BPM</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto font-normal leading-relaxed mb-8">
                    A collection of our diagrams, group activities, case studies, and project files for Business Process Management.
                </p>

                <div className="inline-flex items-center p-1.5 bg-gray-50/90 backdrop-blur-sm rounded-full border border-gray-200 gap-2">
                    <a
                        href="#process"
                        className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 transition-all cursor-pointer"
                    >
                        Course Deliverables
                    </a>
                    <a
                        href="#team"
                        className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-gray-700 hover:text-black transition-colors cursor-pointer"
                    >
                        Group Members
                    </a>
                </div>
            </div>
        </section>
    );
}