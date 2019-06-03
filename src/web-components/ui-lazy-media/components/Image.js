import { h } from "atomico";

export default function Image({ sources = [], src = "", styleMedia }) {
	return (
		<picture>
			{sources.map(source => (
				<source srcset={source.src} media={source.media} />
			))}
			{src && (
				<img
					src={src}
					style={
						styleMedia ||
						"max-width:var(--max-width,100%);max-height:var(--max-height,100%);display:inline-block;"
					}
				/>
			)}
		</picture>
	);
}
