import React from "react";
import { Redirect } from "react-router";

import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import CardMedia from "../components/CardMedia";

import useMedia from "../hooks/useMedia";
import useProfile from "../hooks/useProfile";

import { hasNumber } from "../utils";

const PhotographerScreen = ({ match: { params } }) => {
	const { profile } = useProfile(Number(params.id));
	const { media } = useMedia(Number(params.id));

	if (!hasNumber(params.id)) return <Redirect to="/not-found" />;

	if (profile) {
		return (
			<>
				<Header />
				<main className="photographer container">
					<section className="profile">
						<div className="profile__content">
							<div className="profile__line">
								<h1 className="profile__title">{profile.name}</h1>
								<button
									className="btn btn-primary profile__btn"
									aria-label="Contact-me">
									Contactez-moi
								</button>
							</div>
							<p className="profile__city">{`${profile.city}, ${profile.country}`}</p>
							<p className="profile__tagline">{profile.tagline}</p>
							<ul className="profile__list">
								{profile.tags.map((tag) => (
									<li key={`profile-item-${tag}`}>
										<button type="button" className="link" aria-label={`Tag ${tag}`}>
											#{tag}
										</button>
									</li>
								))}
							</ul>
						</div>
						<div className="profile__img">
							<img src={`/assets/profile/${profile.portrait}`} alt="" />
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
						<Dropdown />
					</div>
					<div className="photographer__list">
						{media && media.map((item) => <CardMedia key={item.id} {...item} />)}
					</div>
				</main>
			</>
		);
	}

	return <div>Loading...</div>;
};

export default PhotographerScreen;
