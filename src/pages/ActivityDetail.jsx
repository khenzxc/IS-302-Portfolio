import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const activities = {
	"Activity-1": {
		number: "01",
		label: "Discover",
		title: "BPM Unboxed: Inside the Process",
		description: "Documented the Shopee order fulfillment process, from customer order placement through delivery and order completion.",
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
		focus: "Shopee order fulfillment from placement to customer feedback.",
		whatWeDid: "We identified the business process goals and defined the scope of Shopee order fulfillment. The process begins when a customer places an order and includes payment confirmation, seller preparation, warehouse sorting, courier pickup, delivery, order completion, and customer feedback.",
		steps: ["Order placement and payment confirmation", "Seller preparation and warehouse sorting", "Courier delivery and customer feedback"],
		outcome: "A clear process scope for faster, more accurate order fulfillment and improved customer satisfaction.",
		files: {
			document: "https://drive.google.com/file/d/1SmW1ToTrYM7ZmPruMNa-1n2n8EYfcNq7/preview?rm=minimal",
			canva: null,
			video: null,
		},
	},
	"Activity-2": {
		number: "02",
		label: "Improve",
		title: "Shopee Process Architecture Diagram",
		description: "Mapped Shopee's management, core, and support processes into one architecture diagram for a clearer view of how the business operates.",
		image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
		focus: "Seeing how Shopee's processes connect across the whole organization.",
		whatWeDid: "We organized the Shopee process architecture into three connected layers. The management layer covers strategy, finance, risk, performance, and quality. The core layer covers suppliers, marketing, order fulfillment, customer engagement, and service operations. The support layer covers technology, talent, human resources, legal compliance, and innovation.",
		steps: ["Mapped management processes", "Grouped core operations", "Added support processes"],
		outcome: "A one-page architecture diagram that shows how Shopee's processes work together.",
		files: {
			document: "https://drive.google.com/file/d/1LMMJrTauygvvVOM3iExno1-xP4Ao4gH0/preview?rm=minimal",
			canva: null,
			video: null,
		},
	},
	"Activity-2-Part-2": {
		number: "03",
		label: "Build",
		title: "Scenario-driven BPM Simulation",
		description: "Turned the recommended workflow into a responsive web prototype that makes the automated flow easy to explore and discuss.",
		image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
		focus: "Making the recommended workflow tangible and easy to review.",
		whatWeDid: "We translated the recommended workflow into a responsive prototype. The interface demonstrates the proposed flow and gives the team a practical way to review the experience before implementation.",
		steps: ["Planned the user flow", "Built the interface", "Reviewed the prototype as a team"],
		outcome: "A clickable presentation of the proposed solution.",
		files: {
			document: "https://drive.google.com/file/d/1Ibwff0rqXFl6BU_JTZRc4Ju_M0DG-LWO/preview?rm=minimal",
			canva: "https://drive.google.com/file/d/1jr7aaI9yg2NWQoIYR1FOb8UFsPVIsvPO/preview?rm=minimal",
			video: "https://drive.google.com/file/d/1X55DqnTNaOTs1e8UiPrnmPFIWVG9BYI1/preview",
		},
	},
	"Activity-4": {
		number: "04",
		label: "Evaluate",
		title: "Process Performance Review",
		description: "Reviewed the proposed workflow using process measures to identify delays, risks, and opportunities for improvement.",
		image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
		focus: "Understanding whether the improved process is faster, clearer, and easier to manage.",
		whatWeDid: "We assessed the proposed workflow against practical performance criteria. The review focused on handoff delays, repeated work, visibility of order status, and the points where automation could reduce manual effort.",
		steps: ["Defined performance criteria", "Reviewed process risks", "Identified improvement opportunities"],
		outcome: "A focused set of observations to guide the next version of the process and prototype.",
		files: { document: null, canva: null, video: null },
	},
	"Activity-5": {
		number: "05",
		label: "Present",
		title: "BPM Solution Handoff",
		description: "Brought the findings, process model, and prototype together into one clear presentation for review and handoff.",
		image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1400&auto=format&fit=crop",
		focus: "Making the final recommendation easy for others to understand, review, and continue developing.",
		whatWeDid: "We organized the project findings into a concise handoff. The presentation connects the original process problem, the architecture diagram, the recommended workflow, and the prototype so the solution can be reviewed as one complete story.",
		steps: ["Organized the project findings", "Presented the recommended solution", "Prepared the final handoff"],
		outcome: "A complete BPM project presentation ready for review and future implementation.",
		files: { document: null, canva: null, video: null },
	},
};

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
			<section className="relative overflow-hidden bg-[#030e21] px-4 pb-10 pt-6 text-white sm:px-6 sm:pb-16 sm:pt-10">
				<div className="absolute inset-0 bg-[linear-gradient(135deg,#030e21_0%,#071d3e_58%,#062e49_100%)]" />
				<div className="relative mx-auto max-w-7xl">
					<Link to="/activities" className="mb-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-blue-200 hover:text-white sm:text-xs">
						<ArrowLeft className="h-4 w-4" />
						Back to activities
					</Link>
					<div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-8">
						<div>
							<span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Activity {activity.number} · {activity.label}</span>
							<h1 className="mt-3 max-w-3xl text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">{activity.title}</h1>
							<p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100/75 sm:text-base sm:leading-7">{activity.description}</p>
						</div>
						<img src={activity.image} alt="" className="h-36 w-full rounded-xl object-cover sm:h-44 lg:h-52" />
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
						<div className="mt-8 space-y-8">
							{activity.files.document && <div>
								<div className="mb-3 flex items-baseline justify-between gap-4">
									<h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">PDF documentation</h3>
									<span className="text-xs text-slate-400">submitted PDF</span>
								</div>
								<div className="w-full overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
									<iframe title={`${activity.title} PDF documentation`} src={`${activity.files.document}#toolbar=0&navpanes=0&view=FitH`} className="block h-[68vh] min-h-[420px] max-h-[620px] w-full sm:aspect-[8.5/11] sm:h-auto sm:min-h-0 sm:max-h-[80vh]" />
								</div>
							</div>}

							{activity.files.canva && <div>
								<div className="mb-3 flex items-baseline justify-between gap-4">
									<h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">Canva presentation PDF</h3>
									<span className="text-xs text-slate-400">canva.pdf</span>
								</div>
								<iframe title={`${activity.title} Canva presentation`} src={activity.files.canva} className="h-[520px] w-full border border-slate-200 bg-slate-100" />
							</div>}

							{activity.files.video && <div>
								<div className="mb-3 flex items-baseline justify-between gap-4">
									<h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">Recorded presentation</h3>
									<span className="text-xs text-slate-400">Drive video</span>
								</div>
								<div className="relative aspect-[4/3] min-h-[240px] w-full overflow-hidden rounded-lg border border-slate-300 bg-slate-950 shadow-sm sm:aspect-auto sm:h-[520px]">
									<iframe title={`${activity.title} recorded presentation`} src={activity.files.video} className="block h-full w-full touch-auto" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen webkitallowfullscreen="true" />
									<a href={activity.files.video} target="_blank" rel="noreferrer" className="absolute bottom-3 right-3 rounded-md bg-slate-950/80 px-3 py-2 text-xs font-bold text-white underline-offset-2 hover:underline sm:hidden">Open video</a>
								</div>
							</div>}

							{!activity.files.document && !activity.files.canva && !activity.files.video && (
								<p className="border border-dashed border-slate-300 px-5 py-8 text-sm text-slate-500">No files have been added for this activity yet.</p>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}