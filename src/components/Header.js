import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {

    const [nav, setNav] = useState('close')
    
    const toggleHeader = () => {
       return (nav === 'close') ? setNav('open') : setNav('close');
    }

    // if(nav === 'open'){
    //     document.body.addEventListener('click',toggleHeader)
    // }
       
    useEffect(() => {
        function handleResize() {
           if (window.innerWidth> 1000 && nav==="open"){
            setNav('close')
           }
          }
        window.addEventListener("resize", handleResize);// Add event listener
        handleResize();// Call handler right away so state gets updated with initial window size
        return () => window.removeEventListener("resize", handleResize);// Remove event listener on cleanup
      }, [nav]);
    
    return(
	<header className="header">
        <div className={"header__nav " + (nav === 'open' ? 'header__nav--active' : '')}>
            <NavLink  to="/" className="header__item" activeClassName="is-active" exact={true}>JC</NavLink>
            <NavLink to="/education" className="header__item" activeClassName="is-active" >Education</NavLink>
            <NavLink to="/experience" className="header__item" activeClassName="is-active" >Experience</NavLink>
            <NavLink to="/computerskills" className="header__item" activeClassName="is-active">Computer Skills</NavLink>
            <NavLink to="/portfolio" className="header__item" activeClassName="is-active">Portfolio</NavLink>
            <NavLink to="/languageskills" className="header__item" activeClassName="is-active">Language Skills</NavLink>
            <NavLink to="/contact" className="header__item" activeClassName="is-active">Contact</NavLink>
        </div>
        <div className={"header__icon " + (nav === 'open' ? 'header__icon--hide' : '')} id="open-header" onClick={toggleHeader}><i className={"fas fa-chevron-down fa-2x"}></i></div>
        <div className={"header__icon " + (nav === 'close' ? 'header__icon--hide' : '')} id="close-header" onClick={toggleHeader}><i className={"fas fa-chevron-up fa-2x"}></i></div>
	</header>

    
)};


export default Header;

