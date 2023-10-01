import "./ProjectsItems.css";
import Button from "../Button";
import {
  AiFillGithub,
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
} from "react-icons/ai";
import { ImArrowUpRight2 } from "react-icons/im";
import { useState } from "react";

function ProjectsItems(props) {
  const [openPreview, setOpenPreview] = useState(true);
  const tags = props.tags;

  const togglePreview = () => {
    setOpenPreview(!openPreview);
  };

  return (
    <div className="ProjectItemsContainer">
      <p className="ProjectItemsDate">{props.year}</p>
      <section className="ProjectItemsContentContainer">
        <button
          className="ProjectItemsContent_button_fs"
          onClick={togglePreview}
        >
          {openPreview ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
        </button>
        <div
          className="ProjectItemsBlurred"
          style={{ backgroundColor: `${props.color}` }}
        ></div>
        <img
          src={props.preview}
          style={
            openPreview
              ? {
                  position: "absolute",
                  width: "90%",
                  opacity: "1",
                  transition: "opacity .3s ease-in-out",
                  borderRadius: "10px",
                }
              : {
                  position: "absolute",
                  width: "90%",
                  opacity: "0",
                  transition: "opacity .3s ease-in-out",
                  borderRadius: "10px",
                }
          }
          alt="preview project"
        />
        <div
          className="ProjectItemsContent"
          style={openPreview ? { opacity: "0" } : { opacity: "1" }}
        >
          <p className="ProjectItemsContent_date">{props.date}</p>
          <img
            src={props.logo}
            className="ProjectItemsContent_logo"
            alt="project logo"
          />
          <h2 className="ProjectItemsContent_title">{props.title}</h2>
          <p className="ProjectItemsContent_desc">{props.desc}</p>
          <footer>
            <section className="ProjectItemsContent_tags">
              {tags.map((tag) => (
                <p>{tag}</p>
              ))}
            </section>
            <section className="ProjectItemsContent_buttons">
              {props.visit ? (
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
              ) : (
                ""
              )}
              <Button icon={<AiFillGithub />} link={props.repo} />
            </section>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default ProjectsItems;
