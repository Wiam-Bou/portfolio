import React from 'react';
import './Skills.scss';
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import nodeJs from '../../assets/nodejs.png';
import mongoDb from '../../assets/mongo.png';
import sass from '../../assets/sass.png';

function Skills() {
  const skills = [
    { src: html, alt: "logo html et css", title: "HTML & CSS" },
    { src: javascript, alt: "javascript logo", title: "JavaScript" },
    { src: react, alt: "React JS logo", title: "React JS" },
    { src: nodeJs, alt: "NodeJS logo", title: "NodeJS" },
    { src: mongoDb, alt: "MongoDB logo", title: "MongoDB" },
    { src: sass, alt: "Sass logo", title: "Sass" }
  ];

  return (
    <section id='skills'>
      <h2 className="skill-title">Mes compétences</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-element" key={index}>
            <img src={skill.src} alt={skill.alt} className="skill-img" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;