import React from "react";

import usePhotographer from "../hooks/usePhotographer";

import Header from "../components/Header";
import CardPhotographer from "../components/CardPhotographer";
import ScrollTop from "../components/ScrollTop";

const HomeScreen = () => {
	const { photographers, filterByTag } = usePhotographer();

	return (
		<>
			<ScrollTop />
			<Header showNav onClick={filterByTag} />
			<main id="main" className="main container">
				<h1 className="main__title container" aria-label="Nos photographes">
					Nos photographes
				</h1>
				<div
					className="main__list"
					role="list"
					aria-label="liste de nos photographes">
					{photographers?.map((item) => (
						<CardPhotographer key={item.id} {...item} onClick={filterByTag} />
					))}
				</div>
			</main>
		</>
	);
};

export default HomeScreen;
