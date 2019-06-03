import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { h, customElement, useMemo, useEffect } from "atomico";

import parse from "./expression";
import Video from "./components/video";
import Image from "./components/image";
import Background from "./components/background";

function LazyMedia({ type, srcset = "", lazy, shadowDom, styleMedia }) {
	let state = useMemo(() => parse(srcset), [srcset]);
	let intercepted = useIntersectionObserver();
	return (
		<host
			shadowDom={shadowDom || type == "background"}
			intercepted={intercepted}
			lazy={lazy || intercepted}
		>
			{lazy ? (
				type == "video" ? (
					<Video {...state} intercepted={intercepted} styleMedia={styleMedia} />
				) : type == "background" ? (
					<Background {...state} />
				) : (
					<Image {...state} styleMedia={styleMedia} />
				)
			) : (
				""
			)}
		</host>
	);
}

LazyMedia.observables = {
	type: String,
	lazy: Boolean,
	srcset: String,
	intercepted: Boolean,
	shadowDom: Boolean,
	styleMedia: String
};

customElement("ui-lazy-media", LazyMedia);
