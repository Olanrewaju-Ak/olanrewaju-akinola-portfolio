import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import "./Hero.scss";

const Hero = () => {
	const [text] = useTypewriter({
		words: ["a developer", "a full-stack developer", "an Architect"],
		loop: {},
		typeSpeed: 120,
		deleteSpeed: 50
	});
	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__text">
					<h2>
						Hello, <br /> I'm Olanrewaju Akinola
					</h2>
					<h3>
						I am <span style={{ fontweight: "bold", color: "red" }}>{text}</span>.
						<span>
							<Cursor cursorStyle="<" />
						</span>
					</h3>
					<button>Let's connect</button>
				</div>
				<div className="hero__profile-image"></div>
			</div>
		</section>
	);
};

export default Hero;
