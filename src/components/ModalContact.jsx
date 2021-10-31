import React from "react";
import closeWhite from "../assets/close-white.svg";

const ModalContact = ({ name }) => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const values = {
			firstname: e.target.firstname.value,
			lastname: e.target.lastname.value,
			email: e.target.email.value,
			message: e.target.message.value,
		};

		console.log(values);
	};

	return (
		<div className="form__contact">
			<form
				className="form"
				aria-labelledby="contact-title"
				onSubmit={handleSubmit}>
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
					<label id="inp-2" htmlFor="lastname" aria-label="Last name">
						Nom
					</label>
					<input type="text" name="lastname" id="lastname" aria-labelledby="inp-2" />
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
