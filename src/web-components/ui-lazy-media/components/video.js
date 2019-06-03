import { h, useRef, useEffect } from "atomico";

export default function Video({ sources = [], src = "", intercepted }) {
	let ref = useRef();
	useEffect(() => {
		ref.current[intercepted ? "play" : "pause"]();
	}, [intercepted]);
	return (
		<video ref={ref}>
			{sources.map(source => (
				<source src={source.src} media={source.media} />
			))}
			<source src={src} />
		</video>
	);
}
