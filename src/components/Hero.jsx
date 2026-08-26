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
            className="sticky top-16 z-0 overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-12 bg-white text-gray-900 transition-transform duration-75 ease-out will-change-transform"
        >
            {/* Subtle Blue Grid Lines Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb15_1px,transparent_1px),linear-gradient(to_bottom,#2563eb15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* ================= BACKGROUND GEOMETRIC SVG CIRCLES ================= */}

            {/* Top-Left Concentric Circle Accent */}
            <svg className="absolute -left-12 -top-12 w-64 h-64 text-blue-200/60 pointer-events-none hidden md:block" fill="none" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* Bottom-Right Concentric Circle Accent */}
            <svg className="absolute -right-16 -bottom-16 w-80 h-80 text-blue-200/50 pointer-events-none hidden md:block" fill="none" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
            </svg>

            {/* Center Subtle Grid Ring */}
            <div className="absolute w-[450px] h-[450px] rounded-full border border-dashed border-blue-200/50 pointer-events-none hidden lg:block" />

            {/* ================= FLOATING ICONS ONLY (NO BACKGROUND BADGES) ================= */}

            {/* 1. Top Left Corner */}
            <div className="absolute left-8 lg:left-16 top-12 hidden md:flex items-center pointer-events-none z-0">
                <Workflow className="w-8 h-8 text-blue-500/80 drop-shadow-sm" strokeWidth={1.8} />
            </div>

            {/* 2. Middle Left Side */}
            <div className="absolute left-6 lg:left-20 top-1/2 -translate-y-1/2 hidden md:flex items-center pointer-events-none z-0">
                <FileText className="w-10 h-10 text-blue-600 drop-shadow-md" strokeWidth={1.8} />
            </div>

            {/* 3. Bottom Left Corner */}
            <div className="absolute left-12 lg:left-28 bottom-12 hidden md:flex items-center pointer-events-none z-0">
                <Database className="w-8 h-8 text-blue-500/80 drop-shadow-sm" strokeWidth={1.8} />
            </div>

            {/* 4. Top Right Corner */}
            <div className="absolute right-10 lg:right-20 top-12 hidden md:flex items-center pointer-events-none z-0">
                <Settings className="w-9 h-9 text-blue-500/80 animate-[spin_16s_linear_infinite] drop-shadow-sm" strokeWidth={1.8} />
            </div>

            {/* 5. Middle Right Side */}
            <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden md:flex items-center pointer-events-none z-0">
                <GitBranch className="w-9 h-9 text-blue-600 drop-shadow-md" strokeWidth={1.8} />
            </div>

            {/* 6. Bottom Right Corner */}
            <div className="absolute right-14 lg:right-32 bottom-10 hidden md:flex items-center pointer-events-none z-0">
                <Network className="w-8 h-8 text-blue-600/80 drop-shadow-sm" strokeWidth={1.8} />
            </div>

            {/* 7. Bottom Center Subtle Icon */}
            <div className="absolute left-1/3 bottom-6 hidden lg:flex items-center pointer-events-none z-0">
                <ShieldCheck className="w-7 h-7 text-blue-400/70" strokeWidth={1.5} />
            </div>

            {/* Curved Dashed Connector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-0 hidden lg:block" fill="none">
                <path d="M 90 80 Q 130 280 130 500" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="5 5" />
                <path d="M 850 80 Q 920 300 880 500" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="5 5" />
            </svg>

            {/* ================= HERO CONTENT ================= */}

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 my-auto">
                <span className="text-xs font-bold tracking-widest text-[#030e21] uppercase mb-4 block">
                    IS-302 • Course Portfolio & Submissions
                </span>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-black leading-none mb-6">
                    Class{" "}
                    <span className="relative inline-block text-blue-600">
                        Activities
                        {/* Thick Curved Line Underline */}
                        <svg
                            className="absolute -bottom-3 left-0 w-full h-4 text-blue-600 pointer-events-none"
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
                    & Class Files
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