import "./ProjectsItems.css";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import { ImArrowUpRight2 } from "react-icons/im";

function ProjectsItems(props) {
  const tags = props.tags;
  return (
    <div className="ProjectItemsContainer">
      <p className="ProjectItemsDate">{props.year}</p>
      <section className="ProjectItemsContentContainer">
        <div className="ProjectItemsContent">
          <div className="ProjectItemsBlurred"></div>
          <p className="ProjectItemsContent_date">{props.date}</p>
          <img src={props.logo} className="ProjectItemsContent_logo" />
          <h2 className="ProjectItemsContent_title">{props.title}</h2>
          <p className="ProjectItemsContent_desc">{props.desc}</p>
          <footer>
            <section className="ProjectItemsContent_tags">
              {tags.map((tag) => (
                <p>{tag}</p>
              ))}
            </section>
            <section className="ProjectItemsContent_buttons">
              <a
                className="ProjectItemsContent_goto"
                href={props.link}
                rel="noreferrer"
                target="_blank"
              >
                <p>Visit</p>
                <ImArrowUpRight2
                  style={{ width: "13px", fontWeight: "bold" }}
                />
              </a>
              <Button icon={<AiFillGithub />} link={props.repo} />
            </section>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default ProjectsItems;
