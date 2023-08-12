import React from "react";
import HeaderPage from "./HeaderPage";

const Education = () => (
  <div className="education">
    <div className="container">
      <HeaderPage num={"02"} name={"Education"} />
      <div className="education__main">
        <div>
          <h1>
            Educational
            <br /> Background
          </h1>
        </div>
        <div className="education__timeline">
          <div className="education__item">
            <p className="education__details">Sept. 2008 - June 2013</p>
            <h2>Master's degree in Industrial Engineering</h2>
            <p className="education__details">Universitat Politècnica de Catalunya - ETSEIB</p>
            <p className="education__text">
              Calculus, Algebra, Physics, Computing and Programming, Materials Science, Thermodynamics, Mechanics, Fluid Dynamics, Electronic Circuits, Heat and
              Mass Transfer, Automatic Control, Theory of Structures, Industridsal Organization and Business Administration.
            </p>
          </div>
          <div className="education__item">
            <p className="education__details">Sept. 2013 - Sept. 2014</p>
            <h2>Master in Innovation Management and Industrial Design</h2>
            <p className="education__details">Université de Lorraine - ENSGSI</p>
            <p className="education__text">
              Technical Creativity for Product Conception, Innovation Marketing, Need Analysis, Value Engineering and Project Management.
            </p>
          </div>
          <div className="education__item">
            <p className="education__details">Aug. 2023</p>
            <h2>Professional Scrum Master™ (PSM1) </h2>
            <p className="education__details">Scrum.org</p>
            <p className="education__text">Knowledge of the Scrum framework, the Scrum Master accountabilities and how to apply Scrum on a project.</p>
          </div>
          <div className="education__item">
            <p className="education__details"> Aug. 2016 - present</p>
            <h2>Several courses on software development</h2>

            <ul className="education__list">
              <li>
                <h3>
                  Basics of Web Development and Coding Specialization <span>and</span>
                </h3>
                <h3>JavaScript and the DOM</h3>
                <p className="education__details">Coursera - by University of Michigan</p>
              </li>
              <li>
                <h3>JavaScript Design Patterns</h3>
                <p className="education__details">Udacity - by Ben Jaffe</p>
              </li>
              <li>
                <h3>
                  The Complete React Developer Course (w/ Hooks and Redux) <span>and</span>
                </h3>
                <h3>The Complete Node.js Developer Course (3rd Edition)</h3>
                <p className="education__details">Udemy - by Andrew Mead</p>
              </li>
              <li>
                <h3>Full Stack for Front-End Engineers</h3>
                <p className="education__details">Frontend masters - by Jem Young</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
