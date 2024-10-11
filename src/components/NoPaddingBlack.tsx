const NoPaddingBlack = () => (
	<section className="flex flex-wrap items-center self-start gap-5 font-medium">
		<button
			type="button"
			className="text-sm text-neutral-600 focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 h-fit"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="flex gap-2 text-base text-neutral-600 focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 h-fit"
		>
			<i className="ri-star-line" /> <span>Button CTA</span>
		</button>
		<button
			type="button"
			className="flex gap-2 text-base text-neutral-600 focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 h-fit"
		>
			<span>Button CTA</span> <i className="ri-star-line" />
		</button>
		<button
			type="button"
			className="text-lg text-neutral-600 focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 h-fit"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="text-neutral-600 focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 h-fit"
		>
			<i className="ri-star-line" />
		</button>
	</section>
);

export default NoPaddingBlack;
