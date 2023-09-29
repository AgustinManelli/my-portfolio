import "./HomeHeader.css";
import Button from "../Button";
import { AiFillGithub, AiFillLinkedin, AiOutlineFile } from "react-icons/ai";
import ImageClipPath from "../ImageClipPath";
import myphoto from "../../assets/271193082_426444742538952_146421189548635760_n.jpeg";
import ButtonDownload from "../ButtonDownload";

function HomeHeader() {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "100vw",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          <h1>Agustin Manelli</h1>
          <p>frontend developer.</p>
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
          <ButtonDownload
            icon={<AiOutlineFile style={{ width: "20px", height: "20px" }} />}
            title="Download CV"
            file={myphoto}
            filename="AgustinManelli_CV_2023"
          />
        </section>
        <section className="homeHeaderSections">
          <div className="homeHeaderSubSections">
            <ImageClipPath src={myphoto} alr="image" w="250px" h="250px" />
            <div>
              <p>
                Ea cillum cupidatat fugiat duis do qui ad cillum sunt commodo.
                Eu magna aliquip proident pariatur. Incididunt esse Lorem quis
                eiusmod ad qui tempor veniam sunt ullamco.
              </p>
            </div>
          </div>
        </section>
      </div>
      <footer className="homeHeaderfooterSection">
        <section></section>
        <section></section>
      </footer>
    </div>
  );
}

export default HomeHeader;
