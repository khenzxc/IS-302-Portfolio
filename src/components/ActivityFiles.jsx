function FileHeading({ title, label }) {
	return (
		<div className="mb-3 flex items-baseline justify-between gap-4">
			<h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800">{title}</h3>
			<span className="text-xs text-slate-400">{label}</span>
		</div>
	);
}

function EmbeddedFrame({ title, src, className }) {
	return (
		<iframe
			title={title}
			src={src}
			className={className}
			allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
			allowFullScreen
			webkitallowfullscreen="true"
		/>
	);
}

export default function ActivityFiles({ activity }) {
	const { document, canva, video } = activity.files;
	const hasFiles = document || canva || video;

	if (!hasFiles) {
		return <p className="border border-dashed border-slate-300 px-5 py-8 text-sm text-slate-500">No files have been added for this activity yet.</p>;
	}

	return (
		<div className="mt-8 space-y-8">
			{document && (
				<div>
					<FileHeading title="PDF documentation" label="submitted PDF" />
					<div className="w-full overflow-hidden rounded-lg border border-slate-300 bg-white shadow-sm">
						<EmbeddedFrame
							title={`${activity.title} PDF documentation`}
							src={`${document}#toolbar=0&navpanes=0&view=FitH`}
							className="block h-[68vh] min-h-[420px] max-h-[620px] w-full sm:aspect-[8.5/11] sm:h-auto sm:min-h-0 sm:max-h-[80vh]"
						/>
					</div>
				</div>
			)}

			{canva && (
				<div>
					<FileHeading title="Canva presentation PDF" label="canva.pdf" />
					<EmbeddedFrame title={`${activity.title} Canva presentation`} src={canva} className="h-[520px] w-full border border-slate-200 bg-slate-100" />
				</div>
			)}

			{video && (
				<div>
					<FileHeading title="Recorded presentation" label="Drive video" />
					<div className="relative aspect-video min-h-[220px] w-full overflow-hidden rounded-lg border border-slate-300 bg-slate-950 shadow-sm sm:aspect-auto sm:h-[520px]">
						<EmbeddedFrame
							title={`${activity.title} recorded presentation`}
							src={video}
							className="block h-full w-full touch-auto"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
