import React from "react";

import "./Contact.scss";

import email from "../../assets/icons/email.svg";
// import linkedin from "../../assets/icons/linkedin.svg";

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<div className="contact__container">
				<div className="contact__header">
					<h3 className="contact__header--text">Get In Touch</h3>
				</div>
				<div className="contact__content">
					<div className="connect">
						<p className="connect__message">
							I am currently seeking a role as a Junior Software Developer. If you
							have an opening that you think would be a good fit for my skills and
							experience, please don't hesitate to get in touch. Thank you for
							considering me for any available positions.
						</p>
						<div className="connect__inbox">
							<div className="connect__email">
								<img src={email} alt="email" className="connect__icon" />
								<p className="connect__text">akinola_lanrewaju@yahoo.com</p>
								<a
									href="mailto:akinola_lanrewaju@yahoo.com"
									className="connect-btn"
								>
									<p className="connect-btn--text">Shoot Me An Email</p>
								</a>
							</div>
							{/* <div className="connect__linked">
								<img src={linkedin} alt="linkedin" className="connect__icon" />
								<p className="connect__text">Olanrewaju Akinola</p>
								<a
									href="https://www.linkedin.com/in/olanrewaju-akinola/"
									target="_blank"
									rel="noreferrer"
									className="connect-btn"
								>
									<p className="connect-btn--text">Shoot Me A Message</p>
								</a>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
