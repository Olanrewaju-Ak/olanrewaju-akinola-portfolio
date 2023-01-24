import "./Header.scss";
import React from "react";
import { useState } from "react";

import hamburger from "../../assets/icons/menu.svg";
import X from "../../assets/icons/close-24px.svg";

const Header = () => {
	const [activeLink, setActiveLink] = useState("");

	const [isMobile, setIsMobile] = useState(true);

	return (
		<header className="header">
			<div className="header__container">
				<div className="navbar__logo">
					<h2 className="navbar__logo-text">Ọlánrewájú</h2>
				</div>
				<ul className={isMobile ? "navbar__list mobile" : "navbar__list"}>
					{["home", "about", "skills", "works", "contact"].map((item) => (
						<li className="navbar__list-item" key={`link-${item}`}>
							<div />
							<a
								className={
									activeLink === `${item}`
										? "navbar__link--active"
										: "navbar__link"
								}
								href={`#${item}`}
							>
								{item}
							</a>
						</li>
					))}
					<li className="navbar__list-item">
						<div />
						<a
							href="https://drive.google.com/file/d/1jxpM-3BR1opjWk1bOE_qjD-xvGyFRvuK/view?usp=share_link"
							target="_blank"
							rel="noreferrer"
							className={
								activeLink === "resume" ? "navbar__link--active" : "navbar__link"
							}
						>
							Resume
						</a>
					</li>
				</ul>

				<div className="navbar__mobile-menu">
					<button className="navbar__mobile-menu--icon">
						<img src={hamburger} alt="mobile-menu" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
