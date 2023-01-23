import React from "react";

import "./Footer.scss";

import email from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";

const Footer = () => {
	return (
		<section className="footer">
			<div className="footer__container">
				<div className="footer__note">
					<p>&#169; Olanrewaju Akinola</p>
				</div>
				<div className="footer__socials">
					<a href="#" className="footer__socials-link">
						<img src={email} alt="mail" className="footer__socials-img" />
					</a>
					<a href="#" className="footer__socials-link">
						<img src={linkedin} alt="linkedin" className="footer__socials-img" />
					</a>
					<a href="#" className="footer__socials-link">
						<img src={github} alt="github" className="footer__socials-img" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Footer;
