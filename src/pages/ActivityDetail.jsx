import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { activities } from "../data/activities.js";
import ActivityFiles from "../components/ActivityFiles.jsx";

export default function ActivityDetail() {
	const { activityId } = useParams();
	const activity = activities[activityId];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [activityId]);

	if (!activity) {
		return (
			<section className="px-6 py-24 text-center">
				<h1 className="text-3xl font-black text-slate-950">Activity not found</h1>
				<Link to="/activities" className="mt-5 inline-block text-sm font-bold text-blue-600">Back to activities</Link>
			</section>
		);
	}

	return (
		<div className="bg-white font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-slate-900">
			<section className="relative flex h-[380px] items-center overflow-hidden bg-[#030e21] px-6 py-10 text-white sm:h-[400px] sm:py-16">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.3),transparent_30%),linear-gradient(135deg,#030e21_0%,#071d3e_58%,#062e49_100%)]" />
				<div className="relative mx-auto w-full max-w-7xl">
					<Link to="/activities" className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-200 hover:text-white sm:mb-6 sm:text-xs">
						<ArrowLeft className="h-4 w-4" />
						Back to activities
					</Link>
					<div className="grid gap-5 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-8">
						<div>
							<span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300">{activity.displayName} · {activity.label}</span>
							<h1 className="mt-2 max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">{activity.title}</h1>
							<p className="mt-3 max-w-xl text-xs leading-6 text-blue-100/75 sm:text-sm sm:leading-7">{activity.description}</p>
						</div>
						<img src={activity.image} alt="" className="h-32 w-full rounded-xl object-cover sm:h-40 lg:h-48" />
					</div>
				</div>
			</section>

			<section className="bg-slate-50 px-4 py-10 sm:px-6 sm:py-16">
				<div className="mx-auto max-w-7xl">
					<div className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:pb-12">
						<div className="max-w-md">
							<span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Activity overview</span>
							<h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl">{activity.focus}</h2>
							<div className="mt-6 border-l-2 border-blue-600 pl-5">
								<span className="text-xs font-bold uppercase tracking-wider text-slate-400">Result</span>
								<p className="mt-2 text-sm font-bold leading-6 text-slate-800">{activity.outcome}</p>
							</div>
						</div>
						<div>
							<span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">What we did</span>
							<p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{activity.whatWeDid}</p>
							<div className="mt-6 grid gap-4 sm:grid-cols-3">
								{activity.steps.map((step, index) => (
									<div key={step} className="border-t-2 border-slate-200 pt-3">
										<span className="text-xs font-black text-blue-600">0{index + 1}</span>
										<p className="mt-2 text-sm font-bold leading-5 text-slate-800">{step}</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="mx-auto mt-10 max-w-5xl sm:mt-12">
						<span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Activity files</span>
						<h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">Submitted document</h2>
						<p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Available submitted materials for this activity are shown directly below.</p>
						<ActivityFiles activity={activity} />
					</div>
					<div className="mt-10 border-t border-slate-200 pt-6">
						<Link to="/activities" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-600 transition-colors hover:text-blue-800 sm:text-xs">
							<ArrowLeft className="h-4 w-4" />
							Back to activities
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}