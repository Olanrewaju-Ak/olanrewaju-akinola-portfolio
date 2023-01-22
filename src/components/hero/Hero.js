import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./Hero.scss";
import arrow from "../../assets/icons/arrow_back-24px.svg";

const Hero = () => {
	const [text] = useTypewriter({
		words: [
			"a Web Developer",
			"a Full-stack Developer",
			"a Front-end Developer",
			"an Architect"
		],
		loop: {},
		typeSpeed: 120,
		deleteSpeed: 50
	});
	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__content">
					<p className="hero__content--intro">Hi, my name is</p>
					<h1 className="hero__content--name">Olanrewaju Akinola</h1>
					<h2 className="hero__content--caption">
						I am <span className="hero__content--typewritten">{text}</span>.
						<span>
							<Cursor cursorStyle="<" />
						</span>
					</h2>
					<a className="connect-btn" href="#">
						Let's connect
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
