import "./FloatingSection.css";
import { FaReact, FaJsSquare, FaGit, FaNodeJs } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";
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
          <p className="homeHeaderFooterSectionTitle">tech stack</p>
          <FaJsSquare className="homeHeaderFooterIcon" />
          <FaReact className="homeHeaderFooterIcon" />
          <RiSupabaseLine className="homeHeaderFooterIcon" />
          <FaNodeJs className="homeHeaderFooterIcon" />
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
