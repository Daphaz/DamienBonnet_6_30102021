import React from "react";

const CardMedia = ({ onclick, handleClickMedia, ...rest }) => {
	const { title, image, alt, video, likes, id } = rest;
	return (
		<figure role="listitem" className="media">
			<div
				role="link"
				tabIndex="0"
				className="media__body"
				aria-label="Lilac breasted roller, closeup view"
				onClick={() => handleClickMedia(rest)}>
				{image && (
					<img src={`/assets/media/${image}`} width="350" height="300" alt={alt} />
				)}
				{video && (
					<video width="350" height="300" title={alt}>
						<source src={`/assets/media/${video}`} type="video/mp4" />
						Votre navigateur ne prend pas en charge la vidéo.
					</video>
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
