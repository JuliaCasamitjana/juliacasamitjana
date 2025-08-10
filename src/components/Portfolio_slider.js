import {useState} from 'react';
import HeaderPage from './HeaderPage';

import readingtimes from "..//img/readingtimes.png";
import bank from "../img/bank.png";
import countries from "../img/countries.png";
import edad from "../img/edad.png";
import game from "../img/game.png";
import latex from "../img/latex.png";


const Portfolio = () =>{

	let sliderArr = [
	{
		img: readingtimes,
		title: "Book searcher",
		description: "Estimates the reading time for the chosen book",
		stack: "Stack used: React, Nodejs, Express, MongoDB, Mongoose, Amazon API",
		website: "https://readingtimes.herokuapp.com/"
	},
	{
		img: game,
		title: "Rock paper scissors game",
		stack: "Stack used: Basic web design languages (HTML5 and CSS3), SASS and React",
		website: "https://rock-paper-scissors-react-git-master.juliacasamitjana.vercel.app/"
	},
	{
		img: countries,
		title: "Country searcher",
		description: "Fetches information from every conutry in the workd in an API.",
		stack: "Stack used: Basic web design languages (HTML5 and CSS3), SASS, React, Redux and axios", 
		website: "https://rest-countries-api-git-master.juliacasamitjana.vercel.app/"
	},
	{
		img: bank,
		title: "Easybakn",
		description: "easyBank website reproduction",
		stack: "Stack used: Basic web design languages (HTML5 and CSS3) and SASS.",
		website: "https://front-end-mentor-easybank-git-master.juliacasamitjana.vercel.app/"
	},
	{
		img: edad,
		title: "How old are you really?",
		description: "Tells you how many days, minutes and seconds you've been alive and your age in other solar system planets",
		stack: "Stack used: Basic web design languages (HTML5 and CSS3). (Backend in PHP not done by me)",
		website: "https://edadexacta.com/03-01-1990"
	},
	{
		img: latex,
		title: "Latex",
		description: "easyBank website reproduction",
		stack: "Stack used: Basic web design languages (HTML5 and CSS3). (Backend in PHP not done by me)",
		website: "https://www.manualdelatex.com"
	}]

	const [x, setX] = useState(0)

	// useEffect(() => {
	// 	const play = () => {
	// 	  autoPlayRef.current()
	// 	}
	
	// 	const interval = setInterval(play, 3000)
	// 	return () => clearInterval(interval)
	//   }, [])

	const goLeft = () => {
		(x === 0) ? setX(-100*sliderArr.length) : setX(x+100);
	}

	const goRight = () => {
		(x === -100*(sliderArr.length-1)) ? setX(0) : setX(x-100);	
	}


	// const autoPlayRef = useRef()
	// 	useEffect(() => {
	// 	autoPlayRef.current = goRight
	// })


	
	return (
    <div className="portfolio">
      <div className="container">
     	<HeaderPage num={"05"} name={"Portfolio"}/> 
		<div className="portfolio__main">
			<div className="portfolio__title">
				<h1>Portfolio</h1>
				<hr className="base__hr"/>
				<p>Those are some of the web sites I’ve designed and programmed for personal projects, including the web site you’re currently visiting.</p>
			</div>
			<div className="portfolio__slider">
				{
					sliderArr.map((item, index) =>(
						<div key={index} className="portfolio__item" style={{transform:`translateX(${x}%)`}}>
							<img className="portfolio__item__img"src={item.img} alt={item.title}></img>
							<div className="portfolio__item__info">
								<h2>{item.title}</h2>
								<p>{item.description}</p>
								<p className="portfolio__item__stack">{item.stack}</p>
								<a href={item.website} className="portfolio__item__visit" target="_blank" rel="noopener noreferrer"><button>Visit</button></a>
							</div>
						</div>
					))
				}

				<div className="portfolio__dots">
				{
					sliderArr.map((item, index) =>(
						<span key={index} className={"portfolio__dot " + (x === -index*100 ? 'portfolio__dot--active' : '')}></span>
					))
				}
				</div>

				<button className="portfolio__btn" id="portfolio__btn--left" onClick={goLeft}>
					<i className="fas fa-chevron-left fa-2x"></i>
				</button>
				<button className="portfolio__btn" id="portfolio__btn--right" onClick={goRight}>
					<i className="fas fa-chevron-right fa-2x"></i>
				</button>
			</div>
		
			</div>	
		</div>
    </div>
);
}


export default Portfolio;

