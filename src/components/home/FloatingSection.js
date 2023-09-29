import "./FloatingSection.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGit } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobeillustrator,
} from "react-icons/si";

function FloatingSection() {
  return (
    <section
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "fit-content",
        position: "absolute",
        bottom: "-30px",
        zIndex: "1000",
      }}
    >
      <footer className="homeHeaderfooterSection">
        <section>
          <p className="homeHeaderFooterSectionTitle">web-dev</p>
          <FaReact className="homeHeaderFooterIcon" />
          <FaHtml5 className="homeHeaderFooterIcon" />
          <FaCss3Alt className="homeHeaderFooterIcon" />
          <FaJsSquare className="homeHeaderFooterIcon" />
          <FaGit className="homeHeaderFooterIcon" />
        </section>
        <section style={{ marginLeft: "20px" }}>
          <p className="homeHeaderFooterSectionTitle">design</p>
          <SiAdobephotoshop className="homeHeaderFooterIcon" />
          <SiAdobeillustrator className="homeHeaderFooterIcon" />
          <SiAdobeaftereffects className="homeHeaderFooterIcon" />
        </section>
      </footer>
    </section>
  );
}

export default FloatingSection;
