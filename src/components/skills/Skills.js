import React from "react";

import html from "../../assets/images/html.png";
import css from "../../assets/images/html.png";
import sass from "../../assets/images/sass.png";
import js from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import figma from "../../assets/images/figma.png";
import node from "../../assets/images/node.png";
import api from "../../assets/images/api.png";
import git from "../../assets/images/git.png";
import mysql from "../../assets/images/mysql.png";
import knex from "../../assets/images/knex.png";

import "./Skills.scss";

const Skills = () => {
	return (
		<section className="skills" id="skills">
			<div className="skills__container">
				<div className="skills__header">
					<h2>My skills</h2>
				</div>
				<div className="skills__content">
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={html} alt="html" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Html</p>
					</div>
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={css} alt="css" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Css</p>
					</div>
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={sass} alt="sass" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Sass</p>
					</div>
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={js} alt="Javascript" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">JavaScript</p>
					</div>
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={react} alt="React" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">React</p>
					</div>
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={figma} alt="Figma" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Figma</p>
					</div>
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={git} alt="Git" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Git</p>
					</div>
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={node} alt="Node" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Node</p>
					</div>
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={api} alt="api" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Api</p>
					</div>
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={mysql} alt="mysql" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">MySQL</p>
					</div>
					<div className="skill__item">
						<div className="skill__item-icon">
							<img src={knex} alt="Knex" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Knex</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
