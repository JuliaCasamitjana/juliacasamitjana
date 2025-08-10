import React from "react";
import HeaderPage from "./HeaderPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faFileCode, faCogs, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faJsSquare, faReact, faNodeJs, faWordpress, faWindows } from "@fortawesome/free-brands-svg-icons";

const ComputerSkills = () => (
  <div className="computer">
    <div className="container">
      <HeaderPage num={"04"} name={"Computer"} />
      <div className="computer__main">
        <h1>
          Computer
          <br /> skills
        </h1>
        <div className="computer__content">
          <div className="computer__skill">
            <FontAwesomeIcon icon={faHtml5} className="home__card" />
            <p className="computer__skill__info">HTML5, CSS3 and SASS: I am able to reproduce almost any website design that uses only these technologies.</p>
          </div>
          <div className="computer__skill">
            <FontAwesomeIcon icon={faJsSquare} className="home__card" />
            <p className="computer__skill__info">
              {" "}
              JavaScript: I've learned the latest standards of ES6, I know how to change the DOM through JavaScript events and I can write asynchronous code
              through Promises
            </p>
          </div>
          <div className="computer__skill">
            <FontAwesomeIcon icon={faReact} className="home__card" />
            <span className="computer__skill__info">
              React: I can build an application with React from scratch. I am able to create components, connect them to a global store (REDUX), use the React
              routing library... I also have some knowledge of Webpack.
            </span>
          </div>
          <div className="computer__skill">
            <FontAwesomeIcon icon={faNodeJs} className="home__card" />
            <p className="computer__skill__info">
              Node.js: I can create HTTP requests and endpoints to manage CRUD operations. For this I have also acquired basic knowledge of Postman.
            </p>
          </div>
          <div className="computer__skill">
            <FontAwesomeIcon icon={faDatabase} className="home__card" />
            <p className="computer__skill__info">
              MongoDB: I can create a database in both development mode (with Robo 3T) and production mode (with ATLAS MongoDB) and manage it with CRUD
              operations.
            </p>
          </div>
          <div className="computer__skill">
            <FontAwesomeIcon icon={faFileCode} className="home__card" />
            <p className="computer__skill__info">
              C++: It was the first programming language I learned at university and the one with which I acquired the knowledge about algorithms and data
              structures.
            </p>
          </div>
          <div className="computer__skill">
            <FontAwesomeIcon icon={faCogs} className="home__card" />
            <p className="computer__skill__info">Engineering softwares: Advanced user of SOLIDWORKS. I have also worked with AutoCad, Ansys and Matlab</p>
          </div>
          <div className="computer__skill">
            <FontAwesomeIcon icon={faWordpress} className="home__card" />
            <p className="computer__skill__info">WordPress: I've developed several web-sites with WordPress for personal projects.</p>
          </div>
          <div className="computer__skill" id="test">
            <FontAwesomeIcon icon={faVideo} className="home__card" />

            <p className="computer__skill__info">I have worked with video editors such as Camtasia and Final Cut Pro.</p>
          </div>
          <div className="computer__skill">
            <FontAwesomeIcon icon={faWindows} className="home__card" />

            <p className="computer__skill__info">User of the Microsoft Office package including Word, Excel and PowerPoint.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ComputerSkills;
