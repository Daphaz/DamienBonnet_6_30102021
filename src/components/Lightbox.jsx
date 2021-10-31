import React, { useCallback, useEffect, useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import Close from "../assets/close.svg";
import useKeyboard from "../hooks/useKeyboard";

const LightboxItem = ({ title, image, alt, video, className }) => (
	<picture className={className}>
		{image && (
			<img src={`/assets/media/${image}`} alt={alt} width="1050" height="900" />
		)}
		{video && (
			<video width="1050" height="900" controls>
				<source src={`/assets/media/${video}`} type="video/mp4" />
				Votre navigateur ne prend pas en charge la vidéo.
			</video>
		)}
		<p className="lightbox__title">{title}</p>
	</picture>
);

const Lightbox = ({ items, firstItem, handleClose }) => {
	const [slideIndex, setSlideIndex] = useState();

	const { key, setKey } = useKeyboard();

	const getFirstIndex = useCallback(() => {
		const findIndex = items.findIndex((item) => item.id === firstItem.id);

		setSlideIndex(findIndex + 1);
	}, [firstItem.id, items]);

	useEffect(() => {
		getFirstIndex();

		return () => getFirstIndex();
	}, [getFirstIndex]);

	const nextSlide = () => {
		if (slideIndex !== items.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === items.length) {
			setSlideIndex(1);
		}
	};

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(items.length);
		}
	};

	useEffect(() => {
		if (key === "prev") {
			prevSlide();
			setKey(null);
		} else if (key === "next") {
			nextSlide();
			setKey(null);
		}
	});

	return (
		<div className="lightbox">
			<div
				role="dialog"
				aria-label="image closeup view"
				className="lightbox__modal">
				<button
					onClick={prevSlide}
					role="link"
					className="lightbox__btn"
					aria-label="Previous image">
					<img width="48" height="30" src={arrowLeft} alt="<" />
				</button>
				<div className="lightbox__container">
					{items?.map((item, index) => (
						<LightboxItem
							key={item.id}
							{...item}
							className={
								slideIndex === index + 1 ? "lightbox__item visible" : "lightbox__item"
							}
						/>
					))}
				</div>
				<div className="lightbox__containerIcon">
					<button
						aria-label="Close dialog"
						className="lightbox__close"
						onClick={handleClose}>
						<img width="42" height="42" src={Close} alt="X" />
					</button>
					<button
						onClick={nextSlide}
						role="link"
						className="lightbox__btn"
						aria-label="Next image">
						<img width="48" height="30" src={arrowRight} alt=">" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Lightbox;
