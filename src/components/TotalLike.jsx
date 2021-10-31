import React from "react";

const TotalLike = ({ total, price }) => {
	return (
		<div className="photographer__count__container">
			<div className="photographer__count" aria-hidden>
				<span className="photographer__likes">
					{total} <img src="/assets/like-black.svg" alt="likes" />
				</span>
				<span className="photographer__price">{price}€/jour</span>
			</div>
		</div>
	);
};

export default TotalLike;
