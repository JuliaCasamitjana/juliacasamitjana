import React from 'react';
import HeaderPage from './HeaderPage'

const Contact = () =>  {
  
  const username = "casamitjana.julia";
  const hostname = "gmail.com";
  const linktext = "mailto:" + username + "@" + hostname ;


  return(
  <div className="contact">
      <div className="container">  
          <HeaderPage num={"07"} name={"Contact"}/> 
          <h1>Get in touch</h1>
          <div className="contact__main">
          
            <a href="https://github.com/JuliaCasamitjana"  rel="noopener noreferrer" target="_blank">
              <i className="fab fa-github fa-5x"></i>
            </a>
            <a href="https://www.linkedin.com/in/juliacasamitjana" rel="noopener noreferrer" target="_blank" >
              <i className="fab fa-linkedin fa-5x"></i>
            </a>
            <a href={linktext}>
              <i className="fas fa-envelope fa-5x"></i>
            </a>
          </div>
      </div>
  </div>
)};

export default Contact;
