import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./Hero.scss";
import ParticlesBackground from "../particles-background/ParticlesBackground";

const Hero = () => {
	const [text] = useTypewriter({
		words: ["a Web Developer.", "a Full-stack Developer.", "a Front-end Developer."],
		loop: {},
		typeSpeed: 120,
		deleteSpeed: 120
	});
	return (
		<section className="hero" id="home">
			<div className="hero__container">
				<div>
					<ParticlesBackground />
				</div>
				<div className="hero__content">
					<p className="hero__content--intro">Hi, my name is</p>
					<h1 className="hero__content--name">Olanrewaju Akinola</h1>
					<h2 className="hero__content--caption">
						I am <span className="hero__content--typewritten">{text}</span>
						<span className="hero__content--typewritten">
							<Cursor cursorStyle="" />
						</span>
					</h2>
					<p className="hero__content--bio">
						I enjoy designing and creating user-centric solutions.
					</p>
					<a className="connect__btn" href="#contact">
						<p className="connect__btn-text">Let's connect</p>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
