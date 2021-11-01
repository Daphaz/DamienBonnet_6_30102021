import React from "react";
import Spinner from "../components/Spinner";

const LoadingScreen = () => {
	return (
		<main className="spinner">
			<Spinner width={60} height={60} />
		</main>
	);
};

export default LoadingScreen;
