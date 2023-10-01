import "./Projects.css";
import ProjectsItems from "./ProjectsItems";
import logo from "../../assets/ISOTIPO.svg";
function Projects() {
  return (
    <section className="ProjectsContainer">
      <header>THIS IS THE TITLE OF PROJECTS SECTION</header>
      <div className="Projects">
        <ProjectsItems
          logo={logo}
          year="2023"
          date="jun 20, 2023"
          title="bepixel"
          desc="Deserunt incididunt officia irure amet aliquip dolore amet ad
            laboris laborum aliqua do est nulla. Qui voluptate ea consequat
            nostrud ex laboris laboris consequat aliqua sunt nisi mollit."
          tags={["React", "Supabase", "FramerMotion", "i18next"]}
          link="https://bepixel.vercel.app/"
          repo="https://github.com/AgustinManelli/bepixel"
        />
      </div>
    </section>
  );
}

export default Projects;
