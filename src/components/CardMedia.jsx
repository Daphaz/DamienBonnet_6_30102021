import React, { useState } from "react";

import Spinner from "./Spinner";

const CardMedia = ({ onclick, handleClickMedia, ...rest }) => {
	const [loaded, setLoaded] = useState(false);
	const { title, image, alt, video, likes, id } = rest;
	return (
		<figure role="listitem" className="media">
			<div
				role="link"
				className="media__body"
				aria-label="Lilac breasted roller, closeup view"
				onClick={() => handleClickMedia(rest)}>
				{image && (
					<img
						style={loaded ? {} : { display: "none" }}
						src={`/assets/media/${image}`}
						width="350"
						height="300"
						alt={alt}
						onLoad={() => setLoaded(true)}
					/>
				)}
				{video && (
					<video
						style={loaded ? {} : { display: "none" }}
						width="350"
						height="300"
						onLoadedMetadata={() => setLoaded(true)}>
						<source src={`/assets/media/${video}`} type="video/mp4" />
						Votre navigateur ne prend pas en charge la vidéo.
					</video>
				)}
				{!loaded && (
					<div aria-hidden className="spin-container">
						<Spinner width={30} heigh={30} />
					</div>
				)}
			</div>
			<footer className="media__footer">
				<p className="media__title">{title}</p>
				<button onClick={() => onclick(id)} className="media__like">
					<span>{likes}</span>
					<img src="/assets/like.svg" alt="likes" />
				</button>
			</footer>
		</figure>
	);
};

export default CardMedia;
