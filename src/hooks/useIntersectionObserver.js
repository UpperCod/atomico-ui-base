import { useEffect, useState, useHost } from "atomico";

export default function useIntersectionObserver() {
	let [intercepted, setIntercepted] = useState(false);
	let ref = useHost();
	useEffect(() => {
		let { current } = ref;
		let observer = new IntersectionObserver(
			([entrie]) => {
				if (entrie.isIntersecting) {
					setIntercepted(true);
				} else {
					setIntercepted(false);
				}
			},
			{
				rootMargin: "200px 0px"
			}
		);
		observer.observe(current);
	}, [ref]);
	return intercepted;
}
