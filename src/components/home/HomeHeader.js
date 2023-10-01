import "./HomeHeader.css";
import Button from "../Button";
import { AiFillGithub, AiFillLinkedin, AiOutlineFile } from "react-icons/ai";
import ImageClipPath from "../ImageClipPath";
import myphoto from "../../assets/271193082_426444742538952_146421189548635760_n.jpeg";
import ButtonDownload from "../ButtonDownload";
import EducationTimeline from "./EducationTimeline";
import FloatingSection from "./FloatingSection.js";

function HomeHeader() {
  return (
    <div
      style={{
        width: "100vw",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div className="wrapper">
        <div className="gradient gradient-1"></div>
        <div className="gradient gradient-2"></div>
        <div className="gradient gradient-3"></div>
      </div>
      <div className="homeHeaderPattern"></div>
      <div className="homeHeaderContainer">
        <section className="homeHeaderSections">
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                background:
                  "-webkit-linear-gradient(70deg, #5a0bd9, rgb(var(--color-1)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "50px",
                paddingBottom: "10px",
              }}
            >
              Agustín Manelli
            </h1>
            <p style={{ marginTop: "10px" }}>frontend developer.</p>
          </div>
          <div className="homeHeader_buttonsContainer">
            <ButtonDownload
              icon={<AiOutlineFile style={{ width: "20px", height: "20px" }} />}
              title="Download CV"
              file={myphoto}
              filename="AgustinManelli_CV_2023"
            />
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
            <ImageClipPath src={myphoto} alt="image" w="200px" h="200px" />
            <p style={{ marginTop: "20px" }}>
              Aliquip ea eiusmod nulla sint sint elit tempor.
            </p>
            <p style={{ marginTop: "20px" }}>Education</p>
            <EducationTimeline />
          </div>
        </section>
      </div>
      <FloatingSection />
    </div>
  );
}

export default HomeHeader;
