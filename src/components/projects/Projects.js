import "./Projects.css";
import ProjectsItems from "./ProjectsItems";
import logo from "../../assets/ISOTIPO.svg";
import laespumitalogo from "../../assets/laespumita.svg";
import impuestarlogo from "../../assets/impuestarlogo.jpg";
import { FaHeart } from "react-icons/fa";
import backdeco from "../../assets/blue-purple-1.svg";
import { useState } from "react";
function Projects() {
  const [showCircle, setShowCircle] = useState(false);
  return (
    <section className="ProjectsContainer">
      <header className="ProjectsHeader">
        <h1>My projects</h1>
      </header>
      {/* <img src={backdeco} style={{ position: "absolute", zIndex: "2" }} /> */}
      <div className="Projects">
        <div className="ProjectsSections">
          <div className="ProjectDotContainer">
            <p className="ProjectDate">2024</p>
            <div className="ProjectDot"></div>
          </div>
          <div>
            <ProjectsItems
              logo={laespumitalogo}
              year="2023"
              date="jan 4, 2024"
              title="la espumita webapp"
              desc="Calculator web application for business"
              tags={["React", "FramerMotion"]}
              visit={true}
              link="https://laespumita.vercel.app/"
              repo="https://github.com/AgustinManelli/laespumita"
              color="#008fd2"
            />
          </div>
        </div>
        <div className="ProjectsSections">
          <div className="ProjectDotContainer">
            <p className="ProjectDate">2023</p>
            <div className="ProjectDot"></div>
          </div>
          <div>
            <ProjectsItems
              logo={logo}
              year="2023"
              date="mar 3, 2023"
              title="bepixel"
              desc="Website for graphic design agency with tools search engine"
              tags={["React", "Supabase", "FramerMotion", "i18next"]}
              visit={true}
              link="https://bepixel.vercel.app/"
              repo="https://github.com/AgustinManelli/bepixel"
              color="#e10098"
            />
            <ProjectsItems
              logo={undefined}
              icon={
                <FaHeart
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "10px",
                  }}
                />
              }
              year="2023"
              date="sep 20, 2023"
              title="My protfolio"
              desc="My own portfolio created with some technologies from my TechStack"
              tags={["React", "FramerMotion", "i18next"]}
              visit={false}
              link={undefined}
              repo="https://github.com/AgustinManelli/my-portfolio"
              color="#bc03ff"
            />
          </div>
        </div>
        <div className="ProjectsSections">
          <div className="ProjectDotContainer">
            <p className="ProjectDate">2022</p>
            <div className="ProjectDot"></div>
          </div>
          <div>
            <ProjectsItems
              logo={impuestarlogo}
              year="2022"
              date="may 1, 2022"
              title="Impuestar keylogger"
              desc="Keylogger encapsulated in tax calculation application for Argentina"
              tags={["Python", "Tkinter"]}
              visit={false}
              link={undefined}
              repo="https://github.com/AgustinManelli/Impuestarkeylogger"
              color="#0055ff"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
