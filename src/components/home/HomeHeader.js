import "./HomeHeader.css";
import Button from "../Button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ImageClipPath from "../ImageClipPath";
import myphoto from "../../assets/271193082_426444742538952_146421189548635760_n.jpeg";
import me from "../../assets/me.webp";
import EducationTimeline from "./EducationTimeline";
import FloatingSection from "./FloatingSection.js";

function HomeHeader() {
  return (
    <div className="headerContainer">
      <div className="wrapper">
        <div className="gradient gradient-1"></div>
        <div className="gradient gradient-2"></div>
        <div className="gradient gradient-3"></div>
      </div>
      <div className="homeHeaderPattern"></div>
      <div className="homeHeaderContainer">
        <section className="homeHeaderSections">
          <div style={{ textAlign: "center" }}>
            <h1 className="homeHeaderName">Agustín Manelli</h1>
            <p>frontend developer</p>
          </div>
          <div className="homeHeader_buttonsContainer">
            <Button
              icon={<AiFillGithub />}
              name=""
              link="https://github.com/AgustinManelli"
            />
            <Button
              icon={<AiFillLinkedin />}
              name=""
              link="https://www.linkedin.com/in/agustinmanelli/"
            />
          </div>
        </section>
        <section className="homeHeaderSections">
          <div className="homeHeaderSubSections">
            <ImageClipPath src={me} alt="image" w="150px" h="150px" />
            <p className="subSectionDescription">
              I have a strong foundation in React, JS, HTML, and CSS, and
              proficient in graphic design tools like Photoshop and Illustrator.
            </p>
            <p style={{ marginTop: "10px" }}>Education</p>
            <EducationTimeline />
          </div>
        </section>
      </div>
      <FloatingSection />
    </div>
  );
}

export default HomeHeader;
