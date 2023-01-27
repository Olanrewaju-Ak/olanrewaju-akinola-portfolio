import React from "react";

import "./About.scss";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="about__container">
				<div className="about__header">
					<h1 className="about__header--text">About Me</h1>
				</div>
				<div className="about__content">
					<div className="about__right-side">
						<p className="paragraph">
							Hello, my name is olanrewaju /'O' as in or - 'lan'- 're' as in
							(ra)y-w-'a' as in America-ju /. I am a full-stack developer with a
							background in architecture and design. I love designing and creating
							things. My passion for human centered designs and using technology to
							provide creative solutions, led me into web development and I'm keen on
							gathering knowledge and experience every step of the way.
						</p>
						<br />
						<p className="paragraph">
							In my free time, you can catch me watching movies , listening to music ,
							or following sports. I aslo love arts, hiking and taking photographs
							(albeit just casually). It is always lovely to enjoy nature with
							friends.
						</p>
					</div>
					<div className="about__profile-image"></div>
				</div>
			</div>
		</section>
	);
};

export default About;
