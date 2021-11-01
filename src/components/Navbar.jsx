import React from "react";
import useTags from "../hooks/useTags";

const NavItem = ({ ariaLabel, name, tabindex, onClick }) => {
	return (
		<li className="header__navItem">
			<button
				className="link"
				aria-label={ariaLabel}
				tabIndex={tabindex}
				onClick={() => onClick(name)}>
				#{name}
			</button>
		</li>
	);
};

const Navbar = ({ onClick }) => {
	const { tags } = useTags();
	return (
		<nav className="header__nav" aria-label="photographer categories">
			<ul className="header__list" aria-label="liste de tags">
				{tags.map((tag) => (
					<NavItem key={`header-navitem-${tag.name}`} {...tag} onClick={onClick} />
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
