import React from "react";

import "./About.scss";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="about__container">
				<div className="about__header">
					<h3 className="about__header--text">About Me</h3>
				</div>
				<div className="about__content">
					<div className="about__right-side">
						<p className="paragraph">
							Hello, my name is Olanrewaju{" "}
							<span className="transcript">/o-lan-raey-wah-ju/</span>, you can call me
							Lanre <span className="transcript">/lan-raey/</span>. I am a
							<span className="highlight"> Full-stack Developer</span> with a
							background in architecture and design.
						</p>
						<br />
						<p className="paragraph">
							I love designing and turning ideas into creative and tangible products.
							My passion for user-centered designs and using technology to provide
							creative solutions that will positively impact the world, led me into
							web development. I'm keen on gathering knowledge and experience every
							step of the way.
						</p>
						<br />
						<p className="paragraph">
							In my free time, you can catch me watching movies, sports, listening to
							music and podcasts. I also enjoy viewing arts, hiking, taking
							photographs and spending time with family and friends.
						</p>
					</div>
					<div className="about__profile-image"></div>
				</div>
			</div>
		</section>
	);
};

export default About;
