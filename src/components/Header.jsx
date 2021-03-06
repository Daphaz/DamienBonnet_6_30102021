import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

import Navbar from "./Navbar";

const Header = ({ showNav, onClick }) => {
	return (
		<header className="header container">
			<Link
				className="header__logo"
				to="/home"
				aria-label="Fisheye Home page"
				aria-current="page">
				<img src={logo} alt="Fisheye Home page" width="200" height="50" />
			</Link>
			{showNav && <Navbar onClick={onClick} />}
		</header>
	);
};

export default Header;
