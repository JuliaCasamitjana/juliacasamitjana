import React from 'react';
import HeaderPage from './HeaderPage'

const Education = () =>(
    <div className="education">
        <div className="container">
            <HeaderPage num={"02"} name={"Education"}/>
            <div className="education__main">
                <div>
                    <h1>Educational<br /> Background</h1>
                </div>
                <div className="education__timeline">
                    <div className="education__item">
                        <p>Sept. 2008 - June 2013</p>
                        <h2>Master's degree in Industrial Engineering</h2>
                        <p>Universitat Politècnica de Catalunya - ETSEIB</p>
                        <p>Calculus, Algebra, Physics, Computing and Programming, Materials Science, Thermodynamics, Mechanics, Fluid Dynamics, Electronic Circuits, Heat and Mass Transfer, Automatic Control, Theory of Structures, Industridsal Organization and Business Administration.</p>
                    </div>
                    <div className="education__item">
                        <p>Sept. 2013 - Sept. 2014</p>
                        <h2>Master’s in Innovation Management and Industrial Design</h2>
                        <p>Université de Lorraine - ENSGSI</p>
                        <p>Technical Creativity for Product Conception, Innovation Marketing, Need Analysis, Value Engineering and Project Management.</p>
                    </div>
                    <div className="education__item">
                        <p> Aug. 2016</p>
                        <h2>Web Design for Everybody: Basics of Web Development and Coding Specialization </h2>
                        <p>Coursera - by University of Michigan</p>
                        <p>Introduction to HTML5, introduction to CSS3, advanced styling with responsive design and interactivity with JavaScript</p>
                    </div>
                    <div className="education__item">
                        <p>Jan. 2017</p>
                        <h2>JavaScript and the DOM</h2>
                        <p>Coursera - by University of Michigan</p>
                        <p>The Document Object Model, creating content with JavaScript, working with Browser Events and Performance.</p>
                    </div>
                    <div className="education__item">
                        <p> Mar. 2020</p>
                        <h2>JavaScript Design Patterns</h2>
                        <p>Udacity - by Ben Jaffe</p>
                        <p >The importance of code organization and how to implement it with either vanilla JavaScript or an organizational library or framework</p>
                    </div>
                    <div className="education__item">
                        <p>Mai 2020</p>
                        <h2>The Complete React Developer Course (w/ Hooks and Redux) </h2>
                        <p>Udemy - by Andrew Mead</p>
                        <p>Building, testing (Jest), and launching React applications, use of cutting-edge ES6/ES7 JavaScript, Redux, React-Router, setting up authentication and user accounts and deployment.</p>
                    </div>
                    <div className="education__item">
                        <p>June 2020</p>
                        <h2>The Complete Node.js Developer Course (3rd Edition)</h2>
                        <p>Udemy - by Andrew Mead</p>
                        <p>Building, testing, and launching Node applications, creation of Express web servers and APIs, data storing with Mongoose and MongoDB and deployment to production.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Education;
