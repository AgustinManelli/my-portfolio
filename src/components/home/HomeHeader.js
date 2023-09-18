import "../../stylesheets/HomeHeader.css";
import pattern from "../../assets/looper-pattern.svg";

function HomeHeader() {
  return (
    <>
      <div class="wrapper">
        <div className="gradient gradient-1"></div>
        <div className="gradient gradient-2"></div>
        <div className="gradient gradient-3"></div>
      </div>
      <div className="homeHeaderPattern"></div>
      <div className="homeHeaderContainer">
        <section className="homeHeaderSections">
          <h1>Agustin Manelli</h1>
          <p>front-end developer</p>
        </section>
        <section className="homeHeaderSections">
          <div className="homeHeaderSubSections">
            <div>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomeHeader;
