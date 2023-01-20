import React from "react";
import Typewriter from "typewriter-effect";

import "./Hero.scss";

const Hero = () => {
	return (
		<hero>
			<div className="hero__container">
				<div className="hero__text">
					<h2>Hello , I'm Olanrewaju Akinola</h2>
				</div>
				<h2>
					I am{" "}
					<span>
						<Typewriter
							options={{
								autoStart: true,
								loop: true,
								delay: 50,
								strings: ["a developer", "a full-stack developer", "an Architect"]
							}}
						/>
					</span>
				</h2>
				<div className="hero__profile-image"></div>
			</div>
		</hero>
	);
};

export default Hero;
