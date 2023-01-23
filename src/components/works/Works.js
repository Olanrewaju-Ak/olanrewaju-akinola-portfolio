import React from "react";

import "./Works.scss";

import pr from "../../assets/images/pr.jpg";

const Works = () => {
	return (
		<section className="works">
			<div className="works__container">
				<div className="works__header">
					<h2 className="works__header--text">Some Projects I've Built</h2>
				</div>
				<div className="works__content">
					<div className="project">
						<div className="project__content">
							<p className="project__overline">Featured Project</p>
							<h4 className="project__title">Project Name</h4>
							<div className="project__description">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
									tempore adipisci ratione vel natus provident ab facilis
									voluptatum. Doloremque, porro?
								</p>
							</div>
							<ul className="project__tech-list">
								<li className="project__tech-list--item">React</li>
								<li className="project__tech-list--item">Node</li>
								<li className="project__tech-list--item">Express</li>
							</ul>
							<div className="project__links">
								<a href=""></a>
								<a href=""></a>
							</div>
						</div>
						<div className="project__image">
							<a href="#">
								<img src={pr} alt="project 1" className="project__image--img" />
							</a>
						</div>
					</div>
					<div className="project project--reversed">
						<div className="project__content">
							<p className="project__overline">Featured Project</p>
							<h4 className="project__title">Project Name</h4>
							<div className="project__description">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
									tempore adipisci ratione vel natus provident ab facilis
									voluptatum. Doloremque, porro?
								</p>
							</div>
							<ul className="project__tech-list">
								<li className="project__tech-list--item">React</li>
								<li className="project__tech-list--item">Node</li>
								<li className="project__tech-list--item">Express</li>
							</ul>
							<div className="project__links">
								<a href=""></a>
								<a href=""></a>
							</div>
						</div>
						<div className="project__image">
							<a href="#">
								<img src={pr} alt="project 1" className="project__image--img" />
							</a>
						</div>
					</div>
					<div className="project">
						<div className="project__content">
							<p className="project__overline">Featured Project</p>
							<h4 className="project__title">Project Name</h4>
							<div className="project__description">
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
									tempore adipisci ratione vel natus provident ab facilis
									voluptatum. Doloremque, porro?
								</p>
							</div>
							<ul className="project__tech-list">
								<li className="project__tech-list--item">React</li>
								<li className="project__tech-list--item">Node</li>
								<li className="project__tech-list--item">Express</li>
							</ul>
							<div className="project__links">
								<a href=""></a>
								<a href=""></a>
							</div>
						</div>
						<div className="project__image">
							<a href="#">
								<img src={pr} alt="project 1" className="project__image--img" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Works;
