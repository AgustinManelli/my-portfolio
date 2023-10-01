import "./Projects.css";
import ProjectsItems from "./ProjectsItems";
import logo from "../../assets/ISOTIPO.svg";
import project1 from "../../assets/project1.jpg";
import impuestarlogo from "../../assets/impuestarlogo.jpg";
import backdeco from "../../assets/blue-purple-1.svg";
function Projects() {
  return (
    <section className="ProjectsContainer">
      <header className="ProjectsHeader">
        <h1>My projects</h1>
      </header>
      <img src={backdeco} style={{ position: "absolute", zIndex: "0" }} />
      <div className="Projects">
        <ProjectsItems
          logo={logo}
          preview={project1}
          year="2023"
          date="mar 3, 2023"
          title="bepixel"
          desc="Página web para agencia de diseño gráfico con buscado de herramientas"
          tags={["React", "Supabase", "FramerMotion", "i18next"]}
          visit={true}
          link="https://bepixel.vercel.app/"
          repo="https://github.com/AgustinManelli/bepixel"
          color="#bc03ff"
        />
        <ProjectsItems
          logo={impuestarlogo}
          year="2022"
          date="may 1, 2022"
          title="Impuestar keylogger"
          desc="Keylogger encapsulado en aplicación de cálculo de impuestos."
          tags={["Python", "Tkinter"]}
          visit={false}
          link={undefined}
          repo="https://github.com/AgustinManelli/Impuestarkeylogger"
          color="#0055ff"
        />
      </div>
    </section>
  );
}

export default Projects;
