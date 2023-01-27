import "./Header.scss";
import React from "react";
import { useState } from "react";

import hamburger from "../../assets/icons/menu.svg";
import X from "../../assets/icons/close-24px.svg";

const Header = () => {
	const [activeLink, setActiveLink] = useState("#home");

	const [isMobile, setIsMobile] = useState(false);

	const handleClick = (e) => {
		setIsMobile(!isMobile);
	};

	function handleActive(e) {
		console.log(e.target.hash);
		setActiveLink(e.target.hash);
	}

	return (
		<header className="header">
			<div className="header__container">
				<div className="navbar__logo">
					<div />
					<h2 className="navbar__logo-text">Olánrewájú</h2>
				</div>
				<ul className={isMobile ? "mobile" : "navbar__list"}>
					{["home", "about", "skills", "work", "contact"].map((item) => (
						<li
							className={isMobile ? "mobile__list-item" : "navbar__list-item"}
							key={`link-${item}`}
							onClick={isMobile ? handleClick : undefined}
						>
							<div />
							<a
								className={
									activeLink === `#${item}`
										? "navbar__link--active"
										: "navbar__link"
								}
								href={`#${item}`}
								onClick={handleActive}
							>
								{item}
							</a>
						</li>
					))}
					<li className="navbar__list-item" onClick={isMobile ? handleClick : undefined}>
						<div />
						<a
							href="https://drive.google.com/file/d/1jxpM-3BR1opjWk1bOE_qjD-xvGyFRvuK/view?usp=share_link"
							target="_blank"
							rel="noreferrer"
							className={
								activeLink === "#resume"
									? "navbar__link--active"
									: "navbar__link-btn"
							}
						>
							resume
						</a>
					</li>
				</ul>

				<div className="mobile-menu">
					<button className="mobile-menu--btn" onClick={handleClick}>
						<img
							src={isMobile ? X : hamburger}
							alt="mobile-menu"
							className="mobile-menu--icon"
						/>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
