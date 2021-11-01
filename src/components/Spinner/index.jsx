import React from "react";

import "./spinner.css";

const Spinner = ({ width, height }) => {
	return (
		<svg
			role="img"
			className="spin"
			viewBox="0 0 50 50"
			width={width}
			height={height}>
			<title>Chargement...</title>
			<circle
				className="spin-path"
				cx="25"
				cy="25"
				r="20"
				fill="none"
				strokeWidth="5"></circle>
		</svg>
	);
};

export default Spinner;
