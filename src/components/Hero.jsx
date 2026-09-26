import { motion } from "framer-motion";
import { useScrollEffects } from "../hooks/useScrollEffects";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Hero() {
    const { opacity } = useScrollEffects();

    const heroStyle = { opacity };

    return (
        <section
            style={heroStyle}
            className="sticky top-16 z-0 overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-12 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 text-gray-900 will-change-opacity relative"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[650px] h-[85vw] max-h-[650px] bg-blue-200/50 sm:bg-blue-100/60 rounded-full blur-3xl pointer-events-none z-0"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[90vw] max-w-[550px] h-[40vw] max-h-[300px] bg-blue-200/40 sm:bg-blue-100/50 rounded-full blur-3xl pointer-events-none z-0"
            />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#2563eb15_1px,transparent_1px),linear-gradient(to_bottom,#2563eb15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, x: 24, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="absolute right-[5%] top-[18%] hidden w-52 rotate-3 rounded-2xl border border-white/80 bg-white/55 p-4 text-left shadow-[0_20px_60px_rgba(37,99,235,0.14)] backdrop-blur-xl lg:block pointer-events-none z-1"
            >
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Process flow</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span className="h-px flex-1 bg-blue-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                    <span className="h-px flex-1 bg-blue-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
                </div>
                <div className="mt-4 space-y-2">
                    <div className="h-1.5 overflow-hidden rounded-full bg-blue-100"><motion.div initial={{ width: 0 }} animate={{ width: "82%" }} transition={{ duration: 1.2, delay: 1.2 }} className="h-full rounded-full bg-blue-500" /></div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-blue-100"><motion.div initial={{ width: 0 }} animate={{ width: "64%" }} transition={{ duration: 1.2, delay: 1.35 }} className="h-full rounded-full bg-sky-400" /></div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-blue-100"><motion.div initial={{ width: 0 }} animate={{ width: "46%" }} transition={{ duration: 1.2, delay: 1.5 }} className="h-full rounded-full bg-indigo-300" /></div>
                </div>
                <span className="mt-3 block text-[10px] font-semibold text-blue-600">Workflow aligned</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -20, y: 12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="absolute bottom-[18%] left-[6%] hidden w-44 -rotate-3 rounded-2xl border border-white/80 bg-white/50 p-4 text-left shadow-[0_20px_60px_rgba(37,99,235,0.12)] backdrop-blur-xl lg:block pointer-events-none z-1"
            >
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Project status</span>
                <div className="mt-3 flex items-end gap-1.5">
                    <span className="h-5 w-2 rounded-full bg-blue-200" />
                    <span className="h-8 w-2 rounded-full bg-blue-300" />
                    <span className="h-6 w-2 rounded-full bg-blue-400" />
                    <span className="h-11 w-2 rounded-full bg-blue-500" />
                    <span className="h-9 w-2 rounded-full bg-sky-400" />
                    <span className="ml-auto text-lg font-black text-slate-900">84%</span>
                </div>
                <span className="mt-2 block text-[10px] text-slate-500">Learning progress</span>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl mx-auto px-6 text-center relative z-10 my-auto"
            >
                <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-[#030e21] uppercase mb-4 block">
                    IS-302 | Business Process Management
                </motion.span>

                <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-black leading-[1.25] mb-6">
                    Our{" "}
                    <span className="relative inline-block text-blue-600">
                        Learning
                        <motion.svg
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
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
                        </motion.svg>
                    </span>{" "}
                    <span className="ml-2">Journey in BPM</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto font-normal leading-relaxed mb-8">
                    A collection of our diagrams, group activities, case studies, and project files for Business Process Management.
                </motion.p>

                <motion.div variants={itemVariants} className="inline-flex items-center p-1 bg-gray-50/90 backdrop-blur-sm rounded-full border border-gray-200 gap-1 sm:p-1.5 sm:gap-2">
                    <a
                        href="#process"
                        className="px-4 py-2 rounded-full bg-blue-600 text-white font-bold text-[11px] sm:px-6 sm:py-3 sm:text-sm hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 cursor-pointer block"
                    >
                        Course Deliverables
                    </a>
                    <a
                        href="#team"
                        className="px-4 py-2 rounded-full text-[11px] sm:px-6 sm:py-3 sm:text-sm font-bold text-gray-700 hover:text-black transition-colors hover:scale-105 active:scale-95 cursor-pointer block"
                    >
                        Group Members
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}