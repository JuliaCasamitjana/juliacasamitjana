import HeaderPage from "./HeaderPage";
import bank from "../img/bank.png";
import countries from "../img/countries.png";
import edad from "../img/edad.png";
import game from "../img/game.png";
import latex from "../img/latex.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <HeaderPage num={"05"} name={"Portfolio"} />
        <div className="portfolio__main">
          <div className="portfolio__title">
            <h1>Portfolio</h1>
            <hr className="base__hr" />
            <p>Those are some of the web sites I’ve developed as personal projects, including the web site you’re currently visiting.</p>
          </div>
          <div className="portfolio__content">
            <div className="portfolio__item">
              <div>
                <img className="portfolio__item__img" src={countries} alt="country searcher"></img>
              </div>
              <div className="portfolio__item__info">
                <h2>Country searcher</h2>
                <p>Fetches information from every conutry in the world from an API.</p>
                <p className="portfolio__item__stack">Stack used: Basic web design languages (HTML5 and CSS3), SASS, React, Redux and axios</p>
                <a
                  href="https://rest-countries-api-git-master.juliacasamitjana.vercel.app/"
                  className="portfolio__item__visit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Visit</button>
                </a>
              </div>
            </div>
            <div className="portfolio__item">
              <div>
                <img className="portfolio__item__img" src={game} alt="reading timeapp"></img>
              </div>
              <div className="portfolio__item__info">
                <h2>Rock paper scissors game</h2>
                <p className="portfolio__item__stack">Stack used: Basic web design languages (HTML5 and CSS3), SASS and React</p>
                <a
                  href="https://rock-paper-scissors-react-git-master.juliacasamitjana.vercel.app/"
                  className="portfolio__item__visit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Visit</button>
                </a>
              </div>
            </div>

            <div className="portfolio__item">
              <div>
                <img className="portfolio__item__img" src={bank} alt="EasyBank"></img>
              </div>
              <div className="portfolio__item__info">
                <h2>EasyBank</h2>
                <p>easyBank main page reproduction</p>
                <p className="portfolio__item__stack">Stack used: Basic web design languages (HTML5 and CSS3) and SASS.</p>
                <a
                  href="https://front-end-mentor-easybank-git-master.juliacasamitjana.vercel.app/"
                  className="portfolio__item__visit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Visit</button>
                </a>
              </div>
            </div>
            <div className="portfolio__item">
              <div>
                <img className="portfolio__item__img" src={edad} alt="How old are you?"></img>
              </div>
              <div className="portfolio__item__info">
                <h2>How old are you really</h2>
                <p>Tells you how many days, minutes and seconds you've been alive as well as your age in other solar system planets</p>
                <p className="portfolio__item__stack">Stack used: Basic web design languages (HTML5 and CSS3). (Backend in PHP not done by me)</p>
                <a href="https://edadexacta.com/03-01-1990" className="portfolio__item__visit" target="_blank" rel="noopener noreferrer">
                  <button>Visit</button>
                </a>
              </div>
            </div>
            <div className="portfolio__item">
              <div>
                <img className="portfolio__item__img" src={latex} alt="Latex tutorials"></img>
              </div>
              <div className="portfolio__item__info">
                <h2>Latex</h2>
                <p>Latex tutorials and handbook</p>
                <p className="portfolio__item__stack">Stack used: Basic web design languages (HTML5 and CSS3). (Backend in PHP not done by me)</p>
                <a href="https://www.manualdelatex.com" className="portfolio__item__visit" target="_blank" rel="noopener noreferrer">
                  <button>Visit</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
