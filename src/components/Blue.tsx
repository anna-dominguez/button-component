const Blue = () => (
	<section className="flex flex-wrap items-center gap-5 font-medium">
		<button
			type="button"
			className="px-3.5 py-2.5 bg-indigo-700 hover:bg-indigo-800 outline-4 outline-indigo-100 focus:outline focus:outline-indigo-100 text-white h-fit shadow rounded text-sm focus:bg-indigo-800"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="px-4 py-2.5 text-base flex gap-2 text-white focus:outline focus:outline-indigo-100 bg-indigo-700 hover:bg-indigo-800 outline-4 outline-indigo-100 rounded h-fit shadow focus:bg-indigo-800"
		>
			<i className="ri-star-line" /> <span>Button CTA</span>
		</button>
		<button
			type="button"
			className="flex gap-2 px-5 py-3 text-base text-white bg-indigo-700 rounded shadow focus:outline focus:outline-indigo-100-trans outline-4 outline-indigo-100 arent hover:bg-indigo-800 h-fit focus:bg-indigo-800"
		>
			<span>Button CTA</span> <i className="ri-star-line" />
		</button>
		<button
			type="button"
			className="px-6 py-4 text-lg text-white bg-indigo-700 rounded shadow focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 hover:bg-indigo-800 h-fit focus:bg-indigo-800"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="px-4 py-4 text-white bg-indigo-700 rounded shadow focus:outline focus:outline-indigo-100 outline-4 outline-indigo-100 hover:bg-indigo-800 h-fit focus:bg-indigo-800"
		>
			<i className="ri-star-line" />
		</button>
	</section>
);

export default Blue;
