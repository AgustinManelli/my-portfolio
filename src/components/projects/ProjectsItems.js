import "./ProjectsItems.css";
import logo from "../../assets/ISOTIPO.svg";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import { useEffect } from "react";

function ProjectsItems(props) {
  const tags = props.tags;
  console.log(tags);
  return (
    <div className="ProjectItemsContainer">
      <p className="ProjectItemsDate">{props.year}</p>
      <section className="ProjectItemsContentContainer">
        <div className="ProjectItemsContent">
          <div className="ProjectItemsBlurred"></div>
          <p className="ProjectItemsContent_date">{props.date}</p>
          <img src={logo} className="ProjectItemsContent_logo" />
          <h2 className="ProjectItemsContent_title">{props.title}</h2>
          <p className="ProjectItemsContent_desc">{props.desc}</p>
          <footer>
            <section className="ProjectItemsContent_tags">
              {tags.map((tag) => (
                <p>{tag}</p>
              ))}
            </section>
            <section className="ProjectItemsContent_buttons">
              <a>live</a>
              <Button icon={<AiFillGithub />} />
            </section>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default ProjectsItems;
