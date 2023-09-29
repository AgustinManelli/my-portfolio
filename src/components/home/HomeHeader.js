import "../../stylesheets/HomeHeader.css";
import Button from "../Button";
import { AiFillGithub, AiFillLinkedin, AiOutlineFile } from "react-icons/ai";
import ImageClipPath from "../ImageClipPath";

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
            <Button
              icon={<AiOutlineFile />}
              name="Curriculum Vitae"
              link="https://www.linkedin.com/in/agustinmanelli/"
            />
          </div>
        </section>
        <section className="homeHeaderSections">
          <div className="homeHeaderSubSections">
            <ImageClipPath
              src="https://media.tycsports.com/files/2023/06/24/584696/messi_862x485.webp?v=1"
              alr="image"
              w="250px"
              h="250px"
            />
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
