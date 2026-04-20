import "./HomeHeader.css";
import Button from "../Button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ImageClipPath from "../ImageClipPath";
import me from "../../assets/me.webp";
import EducationTimeline from "./EducationTimeline";
import FloatingSection from "./FloatingSection";

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
            <p>Software developer</p>
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
            <ImageClipPath src={me} alt="image" w="130px" h="130px" />
            <p className="subSectionDescription">
              Estudiante de último año de Ingeniería Informática enfocado en el
              desarrollo Full-stack con tecnologías como Next.js, TypeScript y
              Laravel. Me apasiona la creación de aplicaciones impulsadas por IA
              y con bases de datos escalables, priorizando siempre el equilibrio
              entre un código ordenado y una buena experiencia de usuario.
            </p>
            <p className="homeHeaderSubSections_title">Estudios</p>
            <EducationTimeline />
          </div>
        </section>
      </div>
      <FloatingSection />
    </div>
  );
}

export default HomeHeader;
