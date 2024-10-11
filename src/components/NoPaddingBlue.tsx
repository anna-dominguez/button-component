const NoPaddingBlue = () => (
	<section className="flex flex-wrap items-center self-start gap-5 font-medium">
		<button
			type="button"
			className="text-sm text-indigo-700 focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 h-fit"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="flex gap-2 text-base text-indigo-700 focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 h-fit"
		>
			<i className="ri-star-line" /> <span>Button CTA</span>
		</button>
		<button
			type="button"
			className="flex gap-2 text-base text-indigo-700 focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 h-fit"
		>
			<span>Button CTA</span> <i className="ri-star-line" />
		</button>
		<button
			type="button"
			className="text-lg text-indigo-700 focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 h-fit"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="text-indigo-700 focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 h-fit"
		>
			<i className="ri-star-line" />
		</button>
	</section>
);

export default NoPaddingBlue;
