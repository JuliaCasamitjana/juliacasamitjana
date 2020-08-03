import React from 'react';
import HeaderPage from './HeaderPage'

const ComputerSkills = () => (
	<div className="computer">
		<div className="container">
			<HeaderPage num={"04"} name={"Computer"}/> 
			<div className="computer__main">
				<h1>Computer<br /> skills</h1>
				<div className="computer__content">
					<div className="computer__skill">
						<i className="fab fa-html5 fa-4x"></i>
						<p className="computer__skill__info">HTML5, CSS3 and SASS: I am able to reproduce almost any website design that uses only these technologies.</p>
					</div>
					<div className="computer__skill">
						<i className="fab fa-js-square fa-4x"></i>
						<p className="computer__skill__info"> JavaScript: I've learned the latest standards of ES6, I know how to change the DOM through JavaScript events and I can write asynchronous code through Promises</p>
					</div>
					<div className="computer__skill">
						<i className="fab fa-react fa-4x"></i>
						<span className="computer__skill__info">React: I can build an application with React from scratch. I am able to create components, connect them to a global store (REDUX), use the React routing library... I also have some knowledge of Webpack.</span>
					</div>
					<div className="computer__skill">
						<i className="fab fa-node-js fa-4x"></i>
						<p className="computer__skill__info">Node.js: I can create HTTP requests and endpoints to manage CRUD operations. For this I have also acquired basic knowledge of Postman.</p>
					</div>
					<div className="computer__skill">
						<i className="fas fa-database fa-4x"></i>
						<p className="computer__skill__info">MongoDB: I can create a database in both development mode (with Robo 3T) and production mode (with ATLAS MongoDB) and manage it with CRUD operations.</p>
					</div>
					<div className="computer__skill">
						<i className="far fa-file-code fa-4x"></i>
						<p className="computer__skill__info">C++: It was the first programming language I learned at university and the one with which I acquired the knowledge about algorithms and data structures.</p>
					</div>
					<div className="computer__skill">
						<i className="fas fa-cogs fa-4x"></i>
						<p className="computer__skill__info">Engineering softwares: Advanced user of SOLIDWORKS. I have also worked with AutoCad, Ansys and Matlab</p>
					</div>
					<div className="computer__skill">
						<i className="fab fa-wordpress fa-4x"></i>
						<p className="computer__skill__info">WordPress: I've developed several web-sites with WordPress for personal projects.</p>
					</div>
					<div className="computer__skill" id="test">
						<i className="fas fa-video fa-4x"></i>
						<p className="computer__skill__info">I have worked with video editors such as Camtasia and Final Cut Pro.</p>
					</div>
					<div className="computer__skill">
						<i className="fab fa-windows fa-4x"></i>
						<p className="computer__skill__info">User of the Microsoft Office package including Word, Excel and PowerPoint.</p>
					</div>
				</div>
			</div>
		</div>
  	</div>
);

export default ComputerSkills;

