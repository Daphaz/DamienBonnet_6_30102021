import React from "react";
import { Link } from "react-router-dom";

const TagItem = ({ name, onClick }) => {
	return (
		<li className="card__navItem">
			<button
				className="link"
				role="link"
				aria-label={`Tag ${name}`}
				onClick={() => onClick(name)}>
				#{name}
			</button>
		</li>
	);
};

const CardPhotographer = ({
	name,
	id,
	city,
	country,
	tags,
	tagline,
	price,
	portrait,
	onClick,
}) => {
	return (
		<figure className="card">
			<Link
				to={`/photographer-page/${id}`}
				className="card__header"
				aria-label={name}>
				<img src={`/assets/profile/${portrait}`} alt="" />
				<h2>{name}</h2>
			</Link>
			<div className="card__body">
				<p className="card__city">{`${city}, ${country}`}</p>
				<p className="card__quote">{tagline}</p>
				<p className="card__price">{`${price}€/jour`}</p>
			</div>
			<footer className="card__footer">
				<ul className="card__list">
					{tags.map((tag, index) => (
						<TagItem key={`tag-card-${index}`} name={tag} onClick={onClick} />
					))}
				</ul>
			</footer>
		</figure>
	);
};

export default CardPhotographer;
