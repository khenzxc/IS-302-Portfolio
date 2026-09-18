import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectMilestones } from "../data/team.js";

const activityDetails = [
	{
		number: "01",
		slug: "Activity-1",
		label: "Discover",
		title: "BPM Unboxed: Inside the Process",
		description: "Documented the Shopee order fulfillment process, from customer order placement through delivery and order completion.",
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
		tags: ["Shopee", "Order Fulfillment"],
	},
	{
		number: "02",
		slug: "Activity-2",
		label: "Improve",
		title: "Shopee Process Architecture Diagram",
		description: "Mapped Shopee's management, core, and support processes into one architecture diagram.",
		image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
		tags: ["Process Architecture", "Shopee"],
	},
	{
		number: "03",
		slug: "interactive-prototype",
		label: "Build",
		title: "Interactive Prototype",
		description: "Turned the recommended workflow into a responsive web prototype that makes the automated flow easy to explore and discuss.",
		image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
		tags: ["React", "Prototype"],
	},
];

export default function Activities() {
	return (
		<div className="bg-white text-slate-900 font-['Plus_Jakarta_Sans',-apple-system,sans-serif]">
			<section className="relative overflow-hidden bg-[#030e21] px-6 pb-20 pt-16 text-white sm:pt-24">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.3),transparent_30%),linear-gradient(135deg,#030e21_0%,#071d3e_58%,#062e49_100%)]" />
				<div className="relative mx-auto max-w-7xl">
					<div className="max-w-3xl">
						<span className="mb-4 block text-xs font-bold uppercase tracking-[0.24em] text-sky-300">Coursework archive</span>
						<h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">Activities that move the process forward.</h1>
						<p className="mt-6 max-w-2xl text-sm leading-7 text-blue-100/75 sm:text-base">
							A working record of our Business Process Management exercises, from first observations to a usable digital prototype.
						</p>
					</div>

					<div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
						<div className="border-l border-sky-300/30 pl-4"><strong className="block text-2xl font-black text-white">03</strong><span className="text-xs text-blue-200/70">Core activities</span></div>
						<div className="border-l border-sky-300/30 pl-4"><strong className="block text-2xl font-black text-white">02</strong><span className="text-xs text-blue-200/70">Process states</span></div>
						<div className="border-l border-sky-300/30 pl-4"><strong className="block text-2xl font-black text-white">01</strong><span className="text-xs text-blue-200/70">Prototype</span></div>
						<div className="border-l border-sky-300/30 pl-4"><strong className="block text-2xl font-black text-white">IS-302</strong><span className="text-xs text-blue-200/70">Course focus</span></div>
					</div>
				</div>
			</section>

			<section className="px-6 py-16 sm:py-24" id="activities-list">
				<div className="mx-auto max-w-7xl">
					<div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
						<div>
							<span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Our workflow</span>
							<h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">From observation to outcome</h2>
						</div>
						<p className="max-w-sm text-sm leading-6 text-slate-500">Each activity builds on the last, keeping the final solution grounded in the way work actually happens.</p>
					</div>

					<div className="grid gap-5 lg:grid-cols-3">
						{activityDetails.map(({ number, slug, label, title, description, image, tags }, index) => (
							<Link to={`/activities/${slug}`} key={title} className={`flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl border p-6 shadow-sm ${index === 1 ? "border-blue-200 bg-[#eef5ff]" : "border-slate-200 bg-slate-50/70"}`}>
								<div className="relative -mx-6 -mt-6 mb-6 h-44 overflow-hidden">
									<img src={image} alt={`${title} activity`} className="h-full w-full object-cover" />
									<div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
									<span className="absolute bottom-4 left-4 text-4xl font-black tracking-tight text-white/90">{number}</span>
								</div>
								<div>
									<div className="mb-5"><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Activity {number}</span></div>
									<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">{label}</span>
									<h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950">{title}</h3>
									<p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
								</div>
								<div className="mt-8 flex flex-wrap items-center gap-2 border-t border-slate-200/80 pt-4">
									{tags.map((tag) => <span key={tag} className="rounded-md bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">{tag}</span>)}
									<ArrowUpRight className="ml-auto h-5 w-5 text-blue-500" />
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
