import React from "react";

import "./About.scss";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="about__container">
				<div className="about__header">
					<h1>About me</h1>
				</div>
				<div className="about__content">
					<div className="about__right-side">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
							quibusdam accusantium nihil doloribus vel suscipit modi similique
							accusamus sit eveniet repellat fuga at assumenda quae facilis,
							blanditiis sapiente! At earum facere quam voluptate laboriosam sapiente,
							aliquam corporis rem quod officia fugit facilis obcaecati,
							exercitationem nulla ipsam praesentium dicta corrupti dolorum?
						</p>
						<br />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
							quibusdam accusantium nihil doloribus vel suscipit modi similique
							accusamus sit eveniet repellat fuga at assumenda quae facilis,
							blanditiis sapiente! At earum facere quam voluptate laboriosam sapiente,
							aliquam corporis rem quod officia fugit facilis obcaecati,
							exercitationem nulla ipsam praesentium dicta corrupti dolorum?
						</p>
					</div>
					<div className="about__profile-image"></div>
				</div>
			</div>
		</section>
	);
};

export default About;
