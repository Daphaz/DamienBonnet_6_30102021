import React from "react";

const CardMedia = ({ title, image, video, likes }) => {
	return (
		<figure className="media">
			<div
				className="media__body"
				aria-label="Lilac breasted roller, closeup view">
				{image && <img src={`/assets/media/${image}`} alt="" />}
				{video && (
					<video width="350" height="300">
						<source src={`/assets/media/${video}`} type="video/mp4" />
						Votre navigateur ne prend pas en charge la vidéo.
					</video>
				)}
			</div>
			<footer className="media__footer">
				<p className="media__title">{title}</p>
				<div className="media__like">
					<span>{likes}</span>
					<img src="/assets/like.svg" alt="likes" />
				</div>
			</footer>
		</figure>
	);
};

export default CardMedia;
