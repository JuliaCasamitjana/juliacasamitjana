import { useState, useEffect } from "react";
import { NavLink, useLocation, withRouter } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [nav, setNav] = useState("close");
  const [pos, setPos] = useState(window.pageYOffset);
  const { pathname } = useLocation();

  useEffect(() => {
    //Scroll to top when changing route
    window.scrollTo(1, 0, "smooth");
  }, [pathname]);

  const toggleHeader = () => {
    nav === "close" ? setNav("open") : setNav("close");
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1000 && nav === "open") {
        setNav("close");
      }
    }
    window.addEventListener("resize", handleResize); // Add event listener
    handleResize(); // Call handler right away so state gets updated with initial window size
    return () => window.removeEventListener("resize", handleResize); // Remove event listener on cleanup
  }, [nav]);

  useEffect(() => {
    function closeNav() {
      if (nav === "open") {
        setNav("close");
      }
    }
    window.addEventListener("click", closeNav); // Add event listener
    return () => window.removeEventListener("click", closeNav); // Remove event listener on cleanup
  }, [nav]);

  useEffect(() => {
    function checkPos() {
      setPos(window.pageYOffset);

      let scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      let currentScroll = window.pageYOffset;
      let visibleScroll = document.body.clientHeight;
      console.log("alt", scrollHeight);
      console.log("current", currentScroll);
      console.log("window", visibleScroll);

      // const nav = ["/", "/education", "/experience", "/computerskills", "portfolio", "/languageskills", "/contact"];
      // let currentPageIndex = nav.indexOf(pathname);

      // if (scrollHeight === currentScroll + visibleScroll){ //if scroll to end
      //     if (currentPageIndex === nav.length-1){
      //       props.history.push(nav[0]) }else{
      //       props.history.push(nav[currentPageIndex + 1]);
      //     }
      // }else if (currentScroll === 0){ //if scroll to top
      //   if (currentPageIndex === 0){
      //     props.history.push(nav[nav.length-1])
      //   }else{
      //     props.history.push(nav[currentPageIndex - 1]);
      //   }

      // }
    }
    window.addEventListener("scroll", checkPos);
    return () => window.removeEventListener("scroll", checkPos); // Remove event listener on cleanup
  }, [pos, props.history, props.location, pathname]);

  return (
    <header className="header">
      <div className={"header__nav " + (nav === "open" ? "header__nav--active" : "")}>
        <NavLink to="/" className="header__item" activeClassName="is-active" exact={true} onClick={toggleHeader}>
          Contact
        </NavLink>
        <NavLink to="/education" className="header__item" activeClassName="is-active" onClick={toggleHeader}>
          Education
        </NavLink>
        <NavLink to="/experience" className="header__item" activeClassName="is-active" onClick={toggleHeader}>
          Experience
        </NavLink>
        <NavLink to="/computerskills" className="header__item" activeClassName="is-active" onClick={toggleHeader}>
          Computer Skills
        </NavLink>
        <NavLink to="/portfolio" className="header__item" activeClassName="is-active" onClick={toggleHeader}>
          Portfolio
        </NavLink>
        <NavLink to="/languageskills" className="header__item" activeClassName="is-active" onClick={toggleHeader}>
          Language Skills
        </NavLink>
      </div>
      <div className={"header__icon " + (nav === "open" ? "header__icon--hide" : "")} id="open-header" onClick={toggleHeader}>
      <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className={"header__icon " + (nav === "close" ? "header__icon--hide" : "")} id="close-header" onClick={toggleHeader}>
      <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </header>
  );
};

export default withRouter(Header);
