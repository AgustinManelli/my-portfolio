import "./ProjectsItems.css";

function ProjectsItems(props) {
  return (
    <div className="ProjectItemsContainer">
      <p>{props.year}</p>
      <section className="ProjectItemsContentContainer">
        <div className="ProjectItemsBlurred"></div>
        <div className="ProjectItemsContent"></div>
      </section>
    </div>
  );
}

export default ProjectsItems;
