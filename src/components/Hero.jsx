import { FileText, Database, Settings, GitBranch, Network, Workflow, ShieldCheck } from "lucide-react";
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

const floatingIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Hero() {
    const { opacity, blur, scale, isMobile } = useScrollEffects();

    const heroStyle = isMobile
        ? { opacity, transform: `scale(${scale})` }
        : {
            opacity,
            filter: `blur(${blur}px)`,
            transform: `scale(${scale})`,
          };

    return (
        <section
            style={heroStyle}
            className="sticky top-16 z-0 overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-12 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 text-gray-900 transition-transform duration-75 ease-out will-change-transform relative"
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
                variants={floatingIconVariants}
                initial="hidden"
                animate="visible"
                className="absolute left-8 lg:left-16 top-12 hidden md:flex items-center pointer-events-none z-10"
            >
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                    <Workflow className="w-10 h-10 text-blue-500/80 drop-shadow-sm" strokeWidth={1.8} />
                </motion.div>
            </motion.div>

            <motion.div 
                variants={floatingIconVariants}
                initial="hidden"
                animate="visible"
                className="absolute left-6 lg:left-20 top-1/2 -translate-y-1/2 hidden md:flex items-center pointer-events-none z-0"
            >
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}>
                    <FileText className="w-12 h-12 text-blue-600 drop-shadow-md" strokeWidth={1.8} />
                </motion.div>
            </motion.div>

            <motion.div 
                variants={floatingIconVariants}
                initial="hidden"
                animate="visible"
                className="absolute left-12 lg:left-28 bottom-12 hidden md:flex items-center pointer-events-none z-0"
            >
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}>
                    <Database className="w-10 h-10 text-blue-500/80 drop-shadow-sm" strokeWidth={1.8} />
                </motion.div>
            </motion.div>

            <motion.div 
                variants={floatingIconVariants}
                initial="hidden"
                animate="visible"
                className="absolute right-10 lg:right-20 top-12 hidden md:flex items-center pointer-events-none z-0"
            >
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.2 }}>
                    <Settings className="w-11 h-11 text-blue-500/80 animate-[spin_16s_linear_infinite] drop-shadow-sm" strokeWidth={1.8} />
                </motion.div>
            </motion.div>

            <motion.div 
                variants={floatingIconVariants}
                initial="hidden"
                animate="visible"
                className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 hidden md:flex items-center pointer-events-none z-0"
            >
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.8 }}>
                    <GitBranch className="w-11 h-11 text-blue-600 drop-shadow-md" strokeWidth={1.8} />
                </motion.div>
            </motion.div>

            <motion.div 
                variants={floatingIconVariants}
                initial="hidden"
                animate="visible"
                className="absolute right-14 lg:right-32 bottom-10 hidden md:flex items-center pointer-events-none z-0"
            >
                <motion.div animate={{ y: [0, -7, 0] }} transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.4 }}>
                    <Network className="w-10 h-10 text-blue-600/80 drop-shadow-sm" strokeWidth={1.8} />
                </motion.div>
            </motion.div>

            <motion.div 
                variants={floatingIconVariants}
                initial="hidden"
                animate="visible"
                className="absolute left-1/3 bottom-6 hidden lg:flex items-center pointer-events-none z-0"
            >
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.2 }}>
                    <ShieldCheck className="w-9 h-9 text-blue-400/70" strokeWidth={1.5} />
                </motion.div>
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