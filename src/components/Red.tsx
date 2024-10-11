const Red = () => (
	<section className="flex flex-wrap items-center gap-5 font-medium">
		<button
			type="button"
			className="px-3.5 py-2.5 bg-red-600  outline-4 outline-red-100 focus:outline focus:outline-red-100 border border-transparent text-white h-fit shadow rounded text-sm hover:bg-red-700 focus:bg-red-700"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="px-4 py-2.5 text-base flex gap-2 border border-transparent focus:outline focus:outline-red-100 text-white bg-red-600  outline-4 outline-red-100 rounded h-fit shadow hover:bg-red-700 focus:bg-red-700"
		>
			<i className="ri-star-line" /> <span>Button CTA</span>
		</button>
		<button
			type="button"
			className="flex gap-2 px-5 py-3 text-base text-white bg-red-600 border border-transparent rounded shadow focus:outline focus:outline-red-100 outline-4 outline-red-100 h-fit hover:bg-red-700 focus:bg-red-700"
		>
			<span>Button CTA</span> <i className="ri-star-line" />
		</button>
		<button
			type="button"
			className="px-6 py-4 text-lg text-white bg-red-600 border border-transparent rounded shadow focus:outline focus:outline-red-100 outline-4 outline-red-100 h-fit hover:bg-red-700 focus:bg-red-700"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="px-4 py-4 text-white bg-red-600 border border-transparent rounded shadow focus:outline focus:outline-red-100 outline-4 outline-red-100 h-fit hover:bg-red-700 focus:bg-red-700"
		>
			<i className="ri-star-line" />
		</button>
	</section>
);

export default Red;
