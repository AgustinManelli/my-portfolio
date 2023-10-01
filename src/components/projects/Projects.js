import "./Projects.css";
import ProjectsItems from "./ProjectsItems";
function Projects() {
  return (
    <section className="ProjectsContainer">
      <header>THIS IS THE TITLE OF PROJECTS SECTION</header>
      <div className="Projects">
        <ProjectsItems
          year="2023"
          date="jun 20, 2023"
          title="bepixel"
          desc="Deserunt incididunt officia irure amet aliquip dolore amet ad
            laboris laborum aliqua do est nulla. Qui voluptate ea consequat
            nostrud ex laboris laboris consequat aliqua sunt nisi mollit."
          tags={["hola", "si", "react"]}
        />
      </div>
    </section>
  );
}

export default Projects;
