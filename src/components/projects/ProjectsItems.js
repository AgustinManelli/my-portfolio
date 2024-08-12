import "./ProjectsItems.css";
import Button from "../Button";
import { AiFillGithub } from "react-icons/ai";
import { ImArrowUpRight2 } from "react-icons/im";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectsItems(props) {
  AOS.init();
  const tags = props.tags;
  const [showCircle, setShowCircle] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const container = document.getElementById(`id-${props.title}`);
    const rect = container.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const handleMouseEnter = () => {
    setShowCircle(true);
  };
  const handleMouseLeave = () => {
    setShowCircle(false);
  };

  return (
    <div className="ProjectItemsContainer">
      {/* <p className="ProjectItemsDate">{props.year}</p> */}
      {/* <div
        className="ProjectItemsDot"
        style={
          showCircle
            ? {
                backgroundColor: `${props.color}`,
                boxShadow: `0px 0px 20px 3px ${props.color}`,
              }
            : {
                backgroundColor: `${props.color}`,
                boxShadow: `0px 0px 20px 1px ${props.color}`,
                filter: "grayscale(80%)",
              }
        }
      ></div> */}
      <section
        className="ProjectItemsContentContainer"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-aos="zoom-in-right"
        data-aos-once="true"
      >
        <div
          className="circle"
          style={
            showCircle
              ? {
                  left: position.x,
                  top: position.y,
                  backgroundColor: `${props.color}`,
                }
              : {
                  left: position.x,
                  top: position.y,
                  backgroundColor: `${props.color}`,
                  opacity: "0",
                }
          }
        ></div>
        <div
          className="ProjectItemsBlurred"
          style={{ backgroundColor: `${props.color}` }}
        ></div>
        <div className="ProjectItemsContent" id={`id-${props.title}`}>
          <p className="ProjectItemsContent_date">{props.date}</p>
          {props.logo == undefined ? (
            props.icon
          ) : (
            <img
              src={props.logo}
              className="ProjectItemsContent_logo"
              alt="project logo"
            />
          )}
          <h2 className="ProjectItemsContent_title">{props.title}</h2>
          <p className="ProjectItemsContent_desc">{props.desc}</p>
          <footer>
            <section className="ProjectItemsContent_tags">
              {tags.map((tag) => (
                <p key={`${tag}-${props.title}`}>{tag}</p>
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
          {props.logo == undefined ? (
            props.iconbg
          ) : (
            <img
              src={props.logobg}
              className="ProjectItemsContentLogoBG"
              alt="project logo"
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default ProjectsItems;
