import "./NavBar.scss";
import React from "react";
import { Link } from "react-router-dom";

import hamburger from "../../assets/icons/menu.svg";

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__container">
				<div className="navbar__logo">
					<h2>Ọlánrewájú</h2>
				</div>
				<ul className="navbar__links">
					{["home", "about", "skills", "works", "contact"].map((item) => (
						<li className="navbar__links-item " key={`link-${item}`}>
							<div />
							<Link to={`${item}`} className="navbar__links-text " href={`#${item}`}>
								{item}
							</Link>
						</li>
					))}
				</ul>
				<div className="navbar__button">
					<button>Resume</button>
				</div>
				<div className="navbar__mobile-menu">
					<button>
						<img src={hamburger} alt="mobile-menu" />
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
