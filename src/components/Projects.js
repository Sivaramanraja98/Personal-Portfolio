import React from "react";
import "./skill.css";
import { projects } from "../components/Assets/ProjectList";

const Project = () => {
  return (
    <div className="p-5" id="project">
      <div className="Container borde1">
        <div className="Wrapper">
          <div className="Title">Projects</div>
          <div className="SkillsContainer">
            {projects.map((project) => (
              <div className="Skill">
                <h2 className="SkillTitle">{project.name}</h2>
                <img
                  src={project.img}
                  alt="screenshot"
                  style={{ width: "100%", height: "200px" }}
                />
                <div className="SkillList justify-content-center">
                  <p className="desc">{project.description}</p>
                  <div>
                    <h6>Demo credentials</h6>
                    <p>username:</p>
                    <p>password:</p>
                  </div>
                  <a
                    style={{ width: "90%" }}
                    href={project.applink}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    style={{ width: "90%" }}
                    href={project.frontendcode}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Front-end Code
                  </a>
                  <a
                    style={{ width: "90%" }}
                    href={project.backendcode}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Back-end Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
