import React from "react";

import html from "../../assets/images/html.webp";
import css from "../../assets/images/css.webp";
import sass from "../../assets/images/sass.webp";
import js from "../../assets/images/javascript.webp";
import react from "../../assets/images/react.webp";
import figma from "../../assets/images/figma.webp";
import node from "../../assets/images/node.webp";
import api from "../../assets/images/api.webp";
import git from "../../assets/images/git.webp";
import mysql from "../../assets/images/mysql.webp";
import knex from "../../assets/images/knex.webp";
import ps from "../../assets/images/ps.webp";

import "./Skills.scss";

const Skills = () => {
	return (
		<section className="skills" id="skills">
			<div className="skills__container">
				<div className="skills__header">
					<h3 className="skills__header--text">My Skills</h3>
				</div>
				<div className="skills__content">
					<div className="skill__item  wave-div">
						<div className="skill__item-icon">
							<img src={html} alt="html" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">HTML</p>
					</div>
					<div className="skill__item  wave-div">
						<div className="skill__item-icon">
							<img src={css} alt="css" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name ">CSS</p>
					</div>
					<div className="skill__item  wave-div">
						<div className="skill__item-icon">
							<img src={sass} alt="sass" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">SASS</p>
					</div>
					<div className="skill__item wave-div">
						<div className="skill__item-icon">
							<img src={js} alt="Javascript" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">JavaScript</p>
					</div>
					<div className="skill__item wave-div">
						<div className="skill__item-icon">
							<img src={react} alt="React" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">React</p>
					</div>
					<div className="skill__item wave-div">
						<div className="skill__item-icon">
							<img src={figma} alt="Figma" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Figma</p>
					</div>
					<div className="skill__item wave-div">
						<div className="skill__item-icon">
							<img src={ps} alt="Photoshop" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Photoshop</p>
					</div>
					<div className="skill__item wave-div">
						<div className="skill__item-icon">
							<img src={git} alt="Git" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Git</p>
					</div>
					<div className="skill__item wave-div">
						<div className="skill__item-icon">
							<img src={node} alt="Node" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">Node.js</p>
					</div>
					<div className="skill__item wave-div">
						<div className="skill__item-icon">
							<img src={api} alt="api" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">API</p>
					</div>
					<div className="skill__item wave-div">
						<div className="skill__item-icon">
							<img src={mysql} alt="mysql" className="skill__item-icon--image" />
						</div>
						<p className="skill__item-name">MySQL</p>
					</div>
					<div className="skill__item wave-div">
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
