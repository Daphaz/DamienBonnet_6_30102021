import React from "react";
import closeWhite from "../assets/close-white.svg";

const ModalContact = ({ name }) => {
	return (
		<div className="form__contact">
			<form className="form" aria-labelledby="contact-title">
				<button className="form__close" aria-label="Close Contact form">
					<img src={closeWhite} alt="" />
				</button>
				<h1
					id="contact-title"
					className="form__title"
					aria-label={`Contact me ${name}`}>
					Contactez-moi
					<br />
					{name}
				</h1>
				<div className="form__control">
					<label id="inp-1" htmlFor="firstname" aria-label="First name">
						Prénom
					</label>
					<input
						type="text"
						name="firstname"
						id="firstname"
						aria-labelledby="inp-1"
					/>
				</div>
				<div className="form__control">
					<label id="inp-2" htmlFor="name" aria-label="Last name">
						Nom
					</label>
					<input type="text" name="name" id="name" aria-labelledby="inp-2" />
				</div>
				<div className="form__control">
					<label id="inp-3" htmlFor="email" aria-label="Email">
						Email
					</label>
					<input type="email" name="email" id="email" aria-labelledby="inp-3" />
				</div>
				<div className="form__control">
					<label id="inp-4" htmlFor="message" aria-label="Your message">
						Votre message
					</label>
					<textarea name="message" id="message" aria-labelledby="inp-4"></textarea>
				</div>
				<div className="form__btn">
					<button type="submit" className="btn btn-primary" aria-label="Send">
						Envoyer
					</button>
				</div>
			</form>
		</div>
	);
};

export default ModalContact;
