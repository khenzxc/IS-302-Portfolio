import { ArrowRight, Mail, Users } from "lucide-react";
import { Link } from "react-router-dom";

const members = [
	{
		name: "Yuki Ezekiel Ablen",
		role: "Team Leader",
		email: "ablen.yukiezekiel.bsis@gmail.com",
		image: "/yuki.webp",
		description: "Led the team from process discovery to the final presentation, coordinating the work and keeping the project focused and moving forward.",
	},
	{
		name: "Simon Paul Bolus",
		role: "Documentation Creator",
		email: "bolus.simonpaul.bsis@gmail.com",
		image: "/simon.webp",
		description: "Created and organized the team's documentation, process diagrams, and other project outputs, helping turn our BPM research and ideas into complete activity submissions.",
	},
	{
		name: "Khen Vonoe Gabriel",
		role: "Tech Coordinator",
		email: "gabriel.khenvonoe.bsis@gmail.com",
		image: "/khen.webp",
		description: "Coordinated the technical tools used in the project, helping the team organize, build, and present our BPM activities effectively.",
	},
	{
		name: "Eldon Rex Santos",
		role: "Process Researcher",
		email: "santos.eldonrex.bsis@gmail.com",
		image: "/eldon.webp",
		description: "Researched the business context, gathered evidence, and connected each observation to the goals of the selected process.",
	},
	{
		name: "Kaiross Gabriel Sta Ana",
		role: "Project Checker",
		email: "staana.kairossgabriel.bsis@gmail.com",
		image: "/kaiross.webp",
		description: "Checked the details across our activities so the process maps, written work, and final outputs stayed accurate and consistent.",
	},
];

export default function AboutUs() {
	return (
		<div className="bg-white font-['Plus_Jakarta_Sans',-apple-system,sans-serif] text-slate-900">
			<section className="relative overflow-hidden bg-[#030e21] px-6 pb-20 pt-16 text-white sm:pb-28 sm:pt-24">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.32),transparent_32%),linear-gradient(135deg,#030e21_0%,#071d3e_58%,#062e49_100%)]" />
				<div className="relative mx-auto max-w-7xl">
					<span className="mb-4 block text-xs font-bold uppercase tracking-[0.24em] text-sky-300">About us</span>
					<h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight sm:text-6xl">Five perspectives, one process story.</h1>
					<p className="mt-6 max-w-2xl text-sm leading-7 text-blue-100/75 sm:text-base">
						We are BSIS 3A Group 1, studying Business Process Management through real workflows, careful analysis, and practical project work.
					</p>
					<div className="mt-10 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider text-blue-100/80">
						<span className="inline-flex items-center gap-2 border border-sky-300/25 px-3 py-2"><Users className="h-4 w-4 text-sky-300" />5 members</span>
						<span className="border border-sky-300/25 px-3 py-2">IS 302 · BPM</span>
					</div>
				</div>
			</section>

			<section className="px-6 py-16 sm:py-24">
				<div className="mx-auto max-w-7xl">
					<div className="mb-14 max-w-2xl">
						<span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">The team</span>
						<h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Different roles, shared direction.</h2>
						<p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Every member brings a different strength to the work, from research and writing to visual thinking and quality checks.</p>
					</div>

					  <div className="mx-auto max-w-5xl space-y-8 sm:space-y-10">
						{members.map((member, index) => {
							const imageOnLeft = index % 2 === 0;

							return (
								<article key={member.name} className={`grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:border-blue-300 hover:shadow-md lg:grid-cols-2 ${imageOnLeft ? "" : "lg:[&>div:first-child]:order-2"}`}>
									  <div className="relative aspect-[4/3] overflow-hidden bg-white">
										<img
											src={member.image}
											alt={member.name}
											className="h-full w-full object-contain p-4 grayscale-[15%]"
										/>
									</div>
									  <div className={`flex flex-col justify-center p-5 sm:p-7 ${imageOnLeft ? "lg:pr-12" : "lg:pl-12"}`}>
										<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">{member.role}</span>
										<h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">{member.name}</h3>
										<p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">{member.description}</p>
										<a
											href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(member.email)}`}
											target="_blank"
											rel="noreferrer"
											className="mt-5 inline-flex w-fit items-center gap-2 text-xs font-bold text-blue-600 transition-colors hover:text-blue-800"
										>
											<Mail className="h-4 w-4" />
											{member.email}
										</a>
										<div className="mt-6 h-0.5 w-12 bg-blue-600" />
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
