import React, { useEffect, useRef } from "react";

const ScrollTop = () => {
	const linkRef = useRef(null);

	useEffect(() => {
		const setVisibleToScroll = () => {
			if (linkRef.current) {
				if (window.scrollY > 10) {
					linkRef.current.classList.add("visible");
				} else {
					linkRef.current.classList.remove("visible");
				}
			}
		};
		document.addEventListener("scroll", setVisibleToScroll);

		return () => document.removeEventListener("scroll", setVisibleToScroll);
	}, []);

	return (
		<a href="#main" className="scrollTop" ref={linkRef}>
			Passer au contenu
		</a>
	);
};

export default ScrollTop;
