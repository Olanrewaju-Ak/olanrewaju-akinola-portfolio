import "./NavBar.scss";
import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<img src="" alt="logo" />
			</div>
			<ul className="navbar__links">
				{["home", "about", "work", "skills", "contact"].map((item) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
			;
		</nav>
	);
};

export default NavBar;
