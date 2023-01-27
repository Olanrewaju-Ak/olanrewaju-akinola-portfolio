import React from "react";

import "./Contact.scss";

import email from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<div className="contact__container">
				<div className="contact__header">
					<h2 className="contact__header--text">Get In Touch</h2>
				</div>
				<div className="contact__content">
					<div className="connect">
						<p className="connect__message">
							I'm currently looking for an entry level role or an internship as a
							junior developer. Kindly contact me if you have any opportunity for me.
							Also feel free to reach out to me if you have a question or just want to
							say hi .
						</p>
						<div className="connect__inbox">
							<div className="connect__email">
								<img src={email} alt="email" className="connect__icon" />
								<p className="connect__text">akinola_lanrewaju@yahoo.com</p>
								<a
									href="mailto:akinola_lanrewaju@yahoo.com"
									className="connect-btn"
								>
									<p className="connect-btn--text">Send Me An Email</p>
								</a>
							</div>
							<div className="connect__linked">
								<img src={linkedin} alt="linkedin" className="connect__icon" />
								<p className="connect__text">Olanrewaju Akinola</p>
								<a
									href="https://www.linkedin.com/in/olanrewaju-akinola/"
									target="_blank"
									rel="noreferrer"
									className="connect-btn"
								>
									<p className="connect-btn--text">Send Me A Message</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
