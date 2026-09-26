import { ArrowRight, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";

const members = [
	{
		name: "Yuki Ezekiel Ablen",
		role: "Team Leader",
		email: "ablen.yukiezekiel.bsis@gmail.com",
		image: "/yuki.webp",
		description: "Led the team from process discovery to the final presentation.",
	},
	{
		name: "Simon Paul Bolus",
		role: "Documentation Creator",
		email: "bolus.simonpaul.bsis@gmail.com",
		image: "/simon.webp",
		description: "Created the team's documentation, process diagrams, and activity outputs.",
	},
	{
		name: "Khen Vonoe Gabriel",
		role: "Tech Coordinator",
		email: "gabriel.khenvonoe.bsis@gmail.com",
		image: "/khen.webp",
		description: "Coordinated the tools used to build and present our BPM activities.",
	},
	{
		name: "Eldon Rex Santos",
		role: "Process Researcher",
		email: "santos.eldonrex.bsis@gmail.com",
		image: "/eldon.webp",
		description: "Researched the business context and connected evidence to process goals.",
	},
	{
		name: "Kaiross Gabriel Sta Ana",
		role: "Project Checker",
		email: "staana.kairossgabriel.bsis@gmail.com",
		image: "/kaiross.webp",
		description: "Checked our process maps and outputs for accuracy and consistency.",
	},
];

export default function AboutUs() {
	return (
		<div className="bg-white font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-slate-900">
			<section className="relative flex h-[380px] items-center overflow-hidden bg-[#030e21] px-6 py-10 text-white sm:h-[400px] sm:py-16">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.3),transparent_30%),linear-gradient(135deg,#030e21_0%,#071d3e_58%,#062e49_100%)]" />
				<div className="relative mx-auto w-full max-w-7xl">
					<div className="max-w-3xl">
						<span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-sky-300">About us</span>
						<h1 className="max-w-2xl text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl">Five perspectives, one process story.</h1>
						<p className="mt-4 max-w-xl text-xs leading-6 text-blue-100/75 sm:text-sm">
							We are BSIS 3A Group 1, studying Business Process Management through real workflows, careful analysis, and practical project work.
						</p>
					</div>
					<div className="mt-6 flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-wider text-blue-100/80">
						<span className="inline-flex items-center gap-2 border border-sky-300/25 px-3 py-1.5"><Users className="h-3.5 w-3.5 text-sky-300" />5 members</span>
						<span className="border border-sky-300/25 px-3 py-1.5">IS 302 · BPM</span>
					</div>
				</div>
			</section>

			<section className="px-6 py-8 sm:py-10">
				<div className="mx-auto max-w-7xl">
					<div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
						<div>
							<span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-blue-600">The team</span>
							<h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Different roles, shared direction.</h2>
						</div>
						<p className="max-w-sm text-xs leading-5 text-slate-500">Every member brings a different strength to the work, from research and writing to visual thinking and quality checks.</p>
					</div>

					<div className="mx-auto grid max-w-7xl gap-4 sm:gap-5 lg:grid-cols-2">
						{members.map((member, index) => {
							const imageOnLeft = index === 0 || index % 2 !== 0;

							return (
								<article key={member.name} className={`grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:border-blue-300 hover:shadow-md lg:h-56 lg:grid-cols-2 ${index === 0 ? "lg:col-span-2 lg:justify-self-center lg:w-[calc(50%-0.625rem)]" : ""} ${!imageOnLeft ? "lg:[&>div:first-child]:order-2" : ""}`}>
									<div className="relative min-h-0 overflow-hidden bg-white">
										<img
											src={member.image}
											alt={member.name}
											className="h-full w-full object-contain p-5 grayscale-[15%]"
										/>
									</div>
									<div className="flex flex-col justify-center p-4 sm:p-5">
										<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">{member.role}</span>
										<h3 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">{member.name}</h3>
										<p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">{member.description}</p>
										<a
											href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(member.email)}`}
											target="_blank"
											rel="noreferrer"
											className="mt-3 inline-flex w-fit items-center gap-2 text-xs font-bold text-blue-600 transition-colors hover:text-blue-800"
										>
											<Mail className="h-3.5 w-3.5" />
											{member.email}
										</a>
										<div className="mt-4 h-0.5 w-10 bg-blue-600" />
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section className="border-t border-slate-200 bg-slate-50 px-6 py-16 sm:py-20">
				<div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
					<div>
						<span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Keep exploring</span>
						<h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">See how our work came together.</h2>
					</div>
					<Link to="/activities" className="inline-flex items-center gap-2 bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-700">
						View activities <ArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</section>
		</div>
	);
}
