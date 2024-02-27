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
              <div className="Skill justify-content-center" key = {project.id}>
                <h2 className="SkillTitle">{project.name}</h2>
                <img
                  src={project.img}
                  alt="screenshot"
                  style={{ width: "100%", height: "200px" }}
                />
                <details className="SkillList justify-content-center">
                  <summary className="Click">
                    Click here for Description
                  </summary>
                  <p className="desc">{project.description}</p>
                </details>
                <div className ="butn-cont">
                  <a
                    href={project.applink}
                    className="butn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.frontendcode}
                    className="butn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FE Code
                  </a>
                  <a
                    href={project.backendcode}
                    className="butn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BE Code
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
