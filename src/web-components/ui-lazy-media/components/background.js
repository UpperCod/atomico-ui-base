import { h } from "atomico";

function setBackground(src) {
	return `:host{${
		/ *url\(/.test(src) ? `background:${src}` : `background:url(${src})`
	}}`;
}

export default function Background({ sources, src }) {
	sources = [].concat(sources).reverse();
	return (
		<style>
			{src && setBackground(src)}
			{sources.map(
				source => `@media ${source.media}{${setBackground(source.src)}}`
			)}
		</style>
	);
}
