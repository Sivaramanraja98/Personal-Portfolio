import React from "react";
import "./skill.css";
import { projects } from "../components/Assets/ProjectList";

const Project = () => {
  return (
    <div className="p-5" id="project">
      <div className="Container border">
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
                  <p className="Desc">{project.description}</p>
                  <a
                    style={{ width: "90%" }}
                    href={project.applink}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View App
                  </a>
                  <a
                    style={{ width: "90%" }}
                    href={project.frontendcode}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Front-end Source Code
                  </a>
                  <a
                    style={{ width: "90%" }}
                    href={project.backendcode}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Back-end Source Code
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
