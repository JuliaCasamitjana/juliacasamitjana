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
          <nav
            className="home__contact"
            aria-label="Contact and social media links"
          >
            <a
              href="/JuliaCasamitjana-cv.pdf"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Download my CV (PDF, opens in new tab)"
              title="Download my CV (PDF, opens in new tab)"
            >
              <FontAwesomeIcon
                icon={faAddressCard}
                aria-hidden="true"
                size="2xl"
              />
            </a>
            <a
              href="https://github.com/JuliaCasamitjana"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Visit my GitHub profile (opens in new tab)"
              title="Visit my GitHub profile (opens in new tab)"
            >
              <FontAwesomeIcon
                icon={faGithub}
                aria-hidden="true"
                size="2xl"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/juliacasamitjana"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Connect with me on LinkedIn (opens in new tab)"
              title="Connect with me on LinkedIn (opens in new tab)"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                aria-hidden="true"
                size="2xl"
              />
            </a>
            <a href={linktext} aria-label="Send me an email" title="Send me an email">
              <FontAwesomeIcon
                icon={faEnvelope}
                aria-hidden="true"
                size="2xl"
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
