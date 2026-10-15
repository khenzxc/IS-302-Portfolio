import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectMilestones } from "../data/team.js";
import { activityList } from "../data/activities.js";

export default function Activities() {
	return (
		<div className="bg-white text-slate-900 font-['Plus_Jakarta_Sans',-apple-system,sans-serif]">
			<section className="relative flex h-[380px] items-center overflow-hidden bg-[#030e21] px-6 py-10 text-white sm:h-[400px] sm:py-16">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.3),transparent_30%),linear-gradient(135deg,#030e21_0%,#071d3e_58%,#062e49_100%)]" />
				<div className="relative mx-auto w-full max-w-7xl">
					<div className="max-w-3xl">
						<span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-sky-300">Coursework archive</span>
						<h1 className="max-w-2xl text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">Activities that move the process forward.</h1>
						<p className="mt-4 max-w-xl text-xs leading-6 text-blue-100/75 sm:text-sm">
							A working record of our Business Process Management exercises, from first observations to a usable digital prototype.
						</p>
					</div>

					<div className="mt-6 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
						<div className="border-l border-sky-300/30 pl-3"><strong className="block text-xl font-black text-white">05</strong><span className="text-[11px] text-blue-200/70">Core activities</span></div>
						<div className="border-l border-sky-300/30 pl-3"><strong className="block text-xl font-black text-white">02</strong><span className="text-[11px] text-blue-200/70">Process states</span></div>
						<div className="border-l border-sky-300/30 pl-3"><strong className="block text-xl font-black text-white">01</strong><span className="text-[11px] text-blue-200/70">Prototype</span></div>
						<div className="border-l border-sky-300/30 pl-3"><strong className="block text-xl font-black text-white">IS-302</strong><span className="text-[11px] text-blue-200/70">Course focus</span></div>
					</div>
				</div>
			</section>

			<section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/70 to-white px-6 py-10 sm:py-16" id="activities-list">
				<div className="pointer-events-none absolute -left-28 top-36 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
				<div className="pointer-events-none absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
				<div className="mx-auto max-w-7xl">
					<div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
						<div>
							<span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Our workflow</span>
							<h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">From observation to outcome</h2>
						</div>
						<p className="max-w-sm text-sm leading-6 text-slate-500">Each activity builds on the last, keeping the final solution grounded in the way work actually happens.</p>
					</div>

					<div className="relative grid gap-5 lg:grid-cols-3">
						{activityList.map(({ number, displayName, slug, label, title, description, image, tags }) => (
							<Link to={`/activities/${slug}`} key={title} className="group flex min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl border border-blue-200/80 bg-gradient-to-br from-white via-blue-50 to-sky-100/80 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)]">
								<div className="relative -mx-6 -mt-6 mb-6 h-48 overflow-hidden">
									<img src={image} alt={`${title} activity`} className="h-full w-full object-cover" />
									<div className="absolute inset-0 bg-gradient-to-t from-[#061a39]/80 via-[#061a39]/10 to-transparent transition-colors group-hover:from-blue-950/80" />
									<span className="absolute bottom-4 left-4 rounded-lg border border-white/30 bg-blue-950/70 px-3 py-1 text-3xl font-black tracking-tight text-white shadow-lg backdrop-blur-sm">{number}</span>
									<span className="absolute right-4 top-4 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-800 shadow-sm">{label}</span>
								</div>
								<div>
									<div className="mb-3"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">{displayName}</span></div>
									<h3 className="text-xl font-extrabold tracking-tight text-slate-950 transition-colors group-hover:text-blue-800">{title}</h3>
									<p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
								</div>
								<div className="mt-8 flex flex-wrap items-center gap-2 border-t border-blue-200/70 pt-4">
									{tags.map((tag) => <span key={tag} className="rounded-full border border-blue-200/80 bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">{tag}</span>)}
									<span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-white shadow-md transition-all group-hover:translate-x-1 group-hover:bg-blue-800">
										<ArrowUpRight className="h-5 w-5" />
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-slate-200 bg-slate-50 px-6 py-16 sm:py-20">
				<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
					<div>
						<span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Activity snapshot</span>
						<h2 className="max-w-md text-3xl font-extrabold tracking-tight text-slate-950">The handoff is part of the work.</h2>
						<p className="mt-4 max-w-md text-sm leading-7 text-slate-600">Our deliverables connect research, modeling, and interface decisions so every artifact has a clear place in the wider process.</p>
					</div>
					<div className="grid gap-3 sm:grid-cols-3">
						{projectMilestones.map((milestone, index) => <div key={milestone.title} className="rounded-xl border border-slate-200 bg-white p-5"><span className="text-xs font-black text-blue-600">0{index + 1}</span><p className="mt-3 text-sm font-bold leading-5 text-slate-800">{milestone.title.replace(/^\d+\.\s*/, "")}</p></div>)}
					</div>
				</div>
			</section>
		</div>
	);
}
