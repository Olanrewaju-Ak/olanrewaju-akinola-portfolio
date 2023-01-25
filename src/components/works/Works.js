import React from "react";

import "./Works.scss";

import Ontrack from "../../assets/images/ontrack.jpg";
import EA from "../../assets/images/EA.jpg";
import pr from "../../assets/images/pr.jpg";
import brainflix from "../../assets/images/brainflix.jpg";

import github from "../../assets/icons/github.svg";
import arrowUpright from "../../assets/icons/external-link.svg";

const Works = () => {
	return (
		<section className="works" id="works">
			<div className="works__container">
				<div className="works__header">
					<h2 className="works__header--text">Some Projects I've Built</h2>
				</div>
				<div className="works__content">
					<div className="project">
						<div className="project__content">
							<p className="project__overline">Featured Project</p>
							<h4 className="project__title">OnTrack</h4>
							<div className="project__description">
								<p>
									OnTrack is a personal financial application that helps users
									keep record of their daily income and expenses, and helps users
									to create budgets.
								</p>
							</div>
							<ul className="project__tech-list">
								<li className="project__tech-list--item">React</li>
								<li className="project__tech-list--item">Node</li>
								<li className="project__tech-list--item">Express</li>
								<li className="project__tech-list--item">MySQL</li>
								<li className="project__tech-list--item">Knex Js</li>
								<li className="project__tech-list--item">Charts.js</li>
							</ul>
							<div className="project__links">
								<a
									href="https://drive.google.com/file/d/1Zh1muU40wtmWavI_wTdTRbbxO4Mv4xvX/view?usp=share_link"
									target="_blank"
									rel="noreferrer"
									className="project__links-item"
								>
									<img
										src={arrowUpright}
										alt="external link"
										className="project__links-item--img"
									/>
								</a>

								<a
									href="https://github.com/Olanrewaju-Ak/olanrewaju-akinola-capstone-ontrack"
									target="_blank"
									rel="noreferrer"
									className="project__links-item"
								>
									<img
										src={github}
										alt="linkedin icon"
										className="project__links-item--img"
									/>
								</a>
							</div>
						</div>
						<div className="project__image">
							<a href="#">
								<img
									src={Ontrack}
									alt="project 1"
									className="project__image--img"
								/>
							</a>
						</div>
					</div>
					<div className="project ">
						<div className="project__image--rev">
							<a href="#">
								<img src={EA} alt="project 2" className="project__image--img" />
							</a>
						</div>
						<div className="project__content--rev">
							<p className="project__overline">Featured Project</p>
							<h4 className="project__title">EA Hackatton</h4>
							<div className="project__description">
								<p>
									A 24hrs cross-functional hackathon hosted by BrainStation and
									Electronic Arts (EA) aimed at solutions to ensure the EA app is
									adopted by their current users. A redesign of the application.
								</p>
							</div>
							<ul className="project__tech-list">
								<li className="project__tech-list--item-rev">React</li>
								<li className="project__tech-list--item-rev">Javascript</li>
								<li className="project__tech-list--item-rev">SCSS</li>
							</ul>
							<div className="project__links project__links--rev">
								<a
									href="https://drive.google.com/file/d/1xRPHJASMUhpguv7l_ZqMGDuFcbU5vsZD/view?usp=sharing"
									target="_blank"
									rel="noreferrer"
									className="project__links-item"
								>
									<img
										src={arrowUpright}
										alt="external link"
										className="project__links-item--img"
									/>
								</a>

								<a
									href="https://github.com/Olanrewaju-Ak/team-badassets-industry-project"
									target="_blank"
									rel="noreferrer"
									className="project__links-item"
								>
									<img
										src={github}
										alt="linkedin icon"
										className="project__links-item--img"
									/>
								</a>
							</div>
						</div>
					</div>
					<div className="project">
						<div className="project__content">
							<p className="project__overline">Featured Project</p>
							<h4 className="project__title">BrainFlix</h4>
							<div className="project__description">
								<p>
									A video sharing website like YouTube, using React framework and
									custom Api and database.
								</p>
							</div>
							<ul className="project__tech-list">
								<li className="project__tech-list--item">React</li>
								<li className="project__tech-list--item">Node</li>
								<li className="project__tech-list--item">Express</li>
							</ul>
							<div className="project__links">
								<a
									href="#"
									target="_blank"
									rel="noreferrer"
									className="project__links-item"
								>
									<img
										src={arrowUpright}
										alt="external link"
										className="project__links-item--img"
									/>
								</a>

								<a
									href="https://github.com/Olanrewaju-Ak/olanrewaju-akinola-brainflix"
									target="_blank"
									rel="noreferrer"
									className="project__links-item"
								>
									<img
										src={github}
										alt="linkedin icon"
										className="project__links-item--img"
									/>
								</a>
							</div>
						</div>
						<div className="project__image">
							<a href="#">
								<img
									src={brainflix}
									alt="project 3"
									className="project__image--img"
								/>
							</a>
						</div>
					</div>
					<div className="project ">
						<div className="project__image--rev">
							<a href="#">
								<img src={pr} alt="project 4" className="project__image--img" />
							</a>
						</div>
						<div className="project__content--rev">
							<p className="project__overline">Featured Project</p>
							<h4 className="project__title">Portfolio Website</h4>
							<div className="project__description">
								<p>First iteration of my personal portfolio website.</p>
							</div>
							<ul className="project__tech-list">
								<li className="project__tech-list--item-rev">React</li>
								<li className="project__tech-list--item-rev">Sass</li>
								<li className="project__tech-list--item-rev">JavaScript</li>
							</ul>
							<div className="project__links project__links--rev">
								<a
									href="#"
									target="_blank"
									rel="noreferrer"
									className="project__links-item"
								>
									<img
										src={arrowUpright}
										alt="external link"
										className="project__links-item--img"
									/>
								</a>

								<a
									href="https://github.com/Olanrewaju-Ak/olanrewaju-akinola-portfolio"
									target="_blank"
									rel="noreferrer"
									className="project__links-item"
								>
									<img
										src={github}
										alt="linkedin icon"
										className="project__links-item--img"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Works;
