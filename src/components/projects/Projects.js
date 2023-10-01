import "./Projects.css";
import ProjectsItems from "./ProjectsItems";
function Projects() {
  return (
    <section className="ProjectsContainer">
      <header>THIS IS THE TITLE OF PROJECTS SECTION</header>
      <div className="Projects">
        <ProjectsItems year="2023" />
        <ProjectsItems />
        <ProjectsItems />
      </div>
    </section>
  );
}

export default Projects;
