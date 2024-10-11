import React from 'react';

const TransparentWithBorder = () => (
	<section className="flex flex-wrap items-center gap-5 font-medium">
		<button
			type="button"
			className="bg-white px-3.5 py-2.5 border border-neutral-200 text-neutral-900 h-fit shadow rounded text-sm focus:outline focus:outline-indigo-100 hover:bg-neutral-50 focus:bg-neutral-50"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="bg-white px-4 py-2.5 text-base border flex gap-2 border-neutral-200 text-neutral-900 rounded h-fit shadow focus:outline focus:outline-indigo-100 hover:bg-neutral-50 focus:bg-neutral-50"
		>
			<i className="ri-star-line" /> <span>Button CTA</span>
		</button>
		<button
			type="button"
			className="flex gap-2 px-5 py-3 text-base bg-white border rounded shadow text-neutral-900 border-neutral-200 h-fit focus:outline focus:outline-indigo-100 hover:bg-neutral-50 focus:bg-neutral-50"
		>
			<span>Button CTA</span> <i className="ri-star-line" />
		</button>
		<button
			type="button"
			className="px-6 py-4 text-lg bg-white border rounded shadow text-neutral-900 border-neutral-200 h-fit focus:outline focus:outline-indigo-100 hover:bg-neutral-50 focus:bg-neutral-50"
		>
			Button CTA
		</button>
		<button
			type="button"
			className="px-4 py-4 bg-white border rounded shadow text-neutral-900 border-neutral-200 h-fit focus:outline focus:outline-indigo-100 hover:bg-neutral-50 focus:bg-neutral-50"
		>
			<i className="ri-star-line" />
		</button>
	</section>
);

export default TransparentWithBorder;
