import React from "react";
import HeaderPage from "./HeaderPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const username = "casamitjana.julia";
  const hostname = "gmail.com";
  const linktext = "mailto:" + username + "@" + hostname;

  return (
    <div className="home">
      <div className="container">
        <HeaderPage num={"01"} name={"Home"} />
        <div>
          <h1>
            Julia <br /> Casamitjana
          </h1>
          <hr className="base__hr" />
          <div className="home__contact">
            {/* <a href="/JuliaCasamitjana-cv.pdf" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faAddressCard} className="home__card" />
            </a> */}
            <a href="https://github.com/JuliaCasamitjana" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="home__github" />
            </a>
            <a href="https://www.linkedin.com/in/juliacasamitjana" rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="home__linkedin" />
            </a>
            <a href={linktext}>
              <FontAwesomeIcon icon={faEnvelope} className="home__mail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
