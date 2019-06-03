function expression(exp) {
	let sizes = [];
	let media = exp
		.replace(/&&/g, " and ")
		.replace(/(\d+)(\w|h)(!){0,1}/g, (all, size, type, negative) => {
			sizes.push(Number(size) * (negative ? -1 : 1));
			return `(${negative ? "min-" : "max-"}${
				type == "w" ? "width" : "height"
			}: ${size}px)`;
		});
	return {
		media,
		sizes
	};
}

export default function parse(srcset) {
	let sources = [];
	return {
		src: srcset
			.replace(/([^,])$/, "$1,")
			.replace(/\s+/g, " ")
			.replace(
				/([^,]+) +((?:\d+)(?:w|h)(?:!){0,1}(&&(?:\d+)(?:w|h)(?:!){0,1}){0,}),/g,
				(all, src, exp) => {
					let { media, sizes } = expression(exp);
					sources.push({
						src,
						media,
						order: sizes.reduce((total, value) => total + value, 0)
					});
					return media ? "" : all;
				}
			)
			.replace(/, *$/, ""),
		sources: sources.sort((a, b) => (a.order > b.order ? 1 : -1))
	};
}
