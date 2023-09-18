import "../../stylesheets/HomeHeader.css";
import Button from "../Button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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
          <div className="homeHeader_buttonsContainer">
            <Button
              icon={<AiFillGithub />}
              name="GitHub"
              link="https://github.com/AgustinManelli"
            />
            <Button
              icon={<AiFillLinkedin />}
              name="linkedin"
              link="https://www.linkedin.com/in/agustinmanelli/"
            />
          </div>
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
        <footer className="homeHeaderfooterSection">
          <section></section>
          <section></section>
        </footer>
      </div>
    </>
  );
}

export default HomeHeader;
