import HeaderPage from "./HeaderPage";

const LanguageSkills = () => (
  <div className="language">
    <div className="container">
      <HeaderPage num={"06"} name={"Language"} />
      <div className="language__main">
        <h1>Language Skills</h1>
        <hr className="base__hr" />
        <div className="language__content">
          <div>
            <h2>ENGLISH</h2>
            <p>
              Advanced Level Certificate from the Official Language School of
              the Spanish government (2008).
            </p>
          </div>
          <div>
            <h2>GERMAN</h2>
            <p>Intermediate Level. Goethe-Zertificat B2.</p>
          </div>
          <div>
            <h2>SPANISH AND CATALAN</h2>
            <p>Mother tongues</p>
          </div>
          <div>
            <h2>FRENCH</h2>
            <p>Intermediate Level. One year stay in France (2013-2014).</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LanguageSkills;
