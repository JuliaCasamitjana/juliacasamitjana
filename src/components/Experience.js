import HeaderPage from "./HeaderPage";

function Experience() {
  return (
    <div className="experience">
      <div className="container">
        <HeaderPage num={"03"} name={"Experience"} />
        <h1>Employment history</h1>
        <div className="experience__timeline">
          <div className="experience__items">
            <div className="experience__item">
              <p className="experience__details">Oct. 2020 - present</p>
              <h2>Software developer</h2>
              <p className="experience__details">
                Hasso Plattner Institut für Digital Engineering gGmbH
                <br />
                Prof.-Dr.-Helmert-Str. 2-3, 14480 Potsdam, Germany
              </p>
              <h3>Main duties</h3>
              <p className="experience__text">
                Building and maintaining the{" "}
                <a href="https://de.wikipedia.org/wiki/OpenHPI" target="blank">
                  openHPI
                </a>{" "}
                platform, with special focus on the frontend development. Creating a design system and enlarging the library of UI components.{" "}
                <b>Tools and technologies:</b> Javascript, HTML5, Sass, rails, Stencil.js, Typescript, git, and Youtrack. Working with Scrum methodology.
              </p>
            </div>
            <div className="experience__item">
              <p className="experience__details">Sept. 2016 - Sept. 2019</p>
              <h2>Territory Technical Manager</h2>
              <p className="experience__details">
                Dassault Systemes Deutschland GmbH
                <br />
                Joseph-Wild-Straße 20, 81829 München, Germany
              </p>
              <h3>Main Duties</h3>
              <p className="experience__text">
                Provide technical sales support for SOLIDWORKS products as part of the technical team responsible in Germany, Austria, Switzerland, Czech
                Republic, Slovakia, Hungary and Poland. Preparation, support and implementation of product presentations, webinar series, as well as training
                and education of regional sales partners.
              </p>
            </div>
            <div className="experience__item">
              <p className="experience__details">Aug. 2015 - Mar 2016</p>
              <h2>Product Engineer</h2>
              <p className="experience__details">
                KONUX GmbH
                <br />
                Flößergasse 2, 81369 München, Germany
              </p>
              <h3>Main duties</h3>
              <p className="experience__text">
                Execution of hazard analysis, FMEA and documentation of development processes. Planning, organization and execution of development projects from
                concept to prototype. Establishing 3D Data and drawings using SOLIDWORS. Testing design concepts concerning the implementation of a torque
                sensor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
