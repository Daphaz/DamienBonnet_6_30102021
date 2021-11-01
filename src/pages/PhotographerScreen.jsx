import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router";

import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import CardMedia from "../components/CardMedia";
import Spinner from "../components/Spinner";
import TotalLike from "../components/TotalLike";
import Lightbox from "../components/Lightbox";
import ModalContact from "../components/ModalContact";

import LoadingScreen from "./LoadingScreen";

import useMedia from "../hooks/useMedia";
import useProfile from "../hooks/useProfile";

import { hasNumber } from "../utils";

const PhotographerScreen = ({ match: { params } }) => {
	const [total, setTotal] = useState();
	const [ids, setIds] = useState([]);
	const [isFetch, setIsFetch] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openContact, setOpenContact] = useState(false);
	const [itemMedia, setItemMedia] = useState(null);
	const [loaded, setLoaded] = useState(false);

	const { profile } = useProfile(Number(params.id));
	const {
		photographerMedias,
		orderByDate,
		orderByPopularity,
		orderByTitle,
		filterByTag,
		incrementLikeMedia,
	} = useMedia(Number(params.id));

	const getTotalPrice = useCallback(
		(medias) => {
			if (!isFetch) {
				const totalLikes = medias.reduce((acc, item) => {
					return acc + item.likes;
				}, 0);

				setTotal(totalLikes);
				setIsFetch(true);
			}
		},
		[isFetch]
	);

	const incrementLike = (mediaId) => {
		if (ids.length === 0) {
			setTotal((prev) => prev + 1);
			setIds((prev) => [...prev, mediaId]);
			incrementLikeMedia(mediaId);
		} else {
			const findMedia = ids.find((id) => id === mediaId);
			if (!findMedia) {
				setTotal((prev) => prev + 1);
				setIds((prev) => [...prev, mediaId]);
				incrementLikeMedia(mediaId);
			}
		}
	};

	useEffect(() => {
		if (photographerMedias && !isFetch) {
			getTotalPrice(photographerMedias);
		}
	}, [photographerMedias, getTotalPrice, isFetch]);

	const handleClickMedia = (item) => {
		setItemMedia(item);
		setOpenModal(true);
	};

	const handleClose = () => {
		setOpenModal(false);
	};

	const handleOpenContactModal = () => {
		setOpenContact(true);
	};

	const handleCloseModalContact = () => {
		setOpenContact(false);
	};

	if (!hasNumber(params.id)) return <Redirect to="/not-found" />;

	if (profile && photographerMedias) {
		if (!openModal) {
			return (
				<>
					<Header />
					<main className="photographer container">
						<section className="profile">
							<div className="profile__content">
								<div className="profile__line">
									<h1 className="profile__title">{profile.name}</h1>
									<button
										onClick={handleOpenContactModal}
										className="btn btn-primary profile__btn"
										aria-label="Contact-me">
										Contactez-moi
									</button>
								</div>
								<p className="profile__city">{`${profile.city}, ${profile.country}`}</p>
								<p className="profile__tagline">{profile.tagline}</p>
								<ul
									className="profile__list"
									aria-label={`liste des Tags de ${profile.name}`}>
									{profile.tags.map((tag) => (
										<li key={`profile-item-${tag}`}>
											<button
												tabIndex="0"
												type="button"
												className="link"
												aria-label={`Tag ${tag}`}
												onClick={() => filterByTag(tag)}>
												#{tag}
											</button>
										</li>
									))}
								</ul>
							</div>
							<div className="profile__img">
								<img
									style={loaded ? {} : { display: "none" }}
									src={`/assets/profile/${profile.portrait.toLowerCase()}`}
									alt=""
									onLoad={() => setLoaded(true)}
								/>
								<div
									aria-hidden
									className="spin-container"
									style={!loaded ? {} : { display: "none" }}>
									<Spinner width={30} heigh={30} />
								</div>
							</div>
						</section>
						<div className="photographer__sort">
							<label
								id="label-select"
								aria-label="Order by"
								className="dropdown__label"
								htmlFor="select-sort">
								Trier par
							</label>
							<Dropdown
								orderByDate={orderByDate}
								orderByPopularity={orderByPopularity}
								orderByTitle={orderByTitle}
							/>
						</div>
						<div
							role="list"
							aria-label={`Galerie d'image de ${profile.name}`}
							className="photographer__list">
							{photographerMedias.length > 0 ? (
								photographerMedias.map((item) => (
									<CardMedia
										key={item.id}
										{...item}
										onclick={incrementLike}
										handleClickMedia={handleClickMedia}
									/>
								))
							) : (
								<div aria-errormessage="No images found with this hastag">
									Nous n'avons pas trouvé d'image avec ce Hashtag..
								</div>
							)}
						</div>
						<TotalLike price={profile.price} total={total} />
						{openContact && (
							<ModalContact
								name={profile.name}
								handleClose={handleCloseModalContact}
							/>
						)}
					</main>
				</>
			);
		}

		return (
			<Lightbox
				items={photographerMedias}
				firstItem={itemMedia}
				handleClose={handleClose}
			/>
		);
	}

	return <LoadingScreen />;
};

export default PhotographerScreen;
