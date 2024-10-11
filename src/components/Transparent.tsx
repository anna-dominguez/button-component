const Transparent = () => (
	<section className="flex flex-wrap items-center gap-5 font-medium">
		<button
			type="button"
			className="px-3.5 py-2.5 outline-4 focus:outline focus:outline-indigo-100 outline-indigo-100 text-indigo-700 h-fit rounded text-sm hover:bg-neutral-50 focus:bg-neutral-50"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="px-4 py-2.5 text-base flex gap-2 outline-4 focus:outline focus:outline-indigo-100 outline-indigo-100 text-indigo-700 rounded h-fit hover:bg-neutral-50 focus:bg-neutral-50"
		>
			<i className="ri-star-line" /> <span>Button CTA</span>
		</button>
		<button
			type="button"
			className="flex gap-2 px-5 py-3 text-base text-indigo-700 rounded outline-4 focus:outline focus:outline-indigo-100 outline-indigo-100 h-fit hover:bg-neutral-50 focus:bg-neutral-50"
		>
			<span>Button CTA</span> <i className="ri-star-line" />
		</button>
		<button
			type="button"
			className="px-6 py-4 text-lg text-indigo-700 rounded outline-4 focus:outline focus:outline-indigo-100 outline-indigo-100 h-fit hover:bg-neutral-50 focus:bg-neutral-50"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="px-4 py-4 text-indigo-700 rounded outline-4 focus:outline focus:outline-indigo-100 outline-indigo-100 h-fit hover:bg-neutral-50 focus:bg-neutral-50"
		>
			<i className="ri-star-line" />
		</button>
	</section>
);

export default Transparent;
