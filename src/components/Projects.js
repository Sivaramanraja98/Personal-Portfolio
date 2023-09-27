import React from 'react';
import './skill.css';
import { projects } from '../components/Assets/ProjectList';

const Project = () => {
  return (
    <div class="container-fluid">
    <div className='header text-center'>Projects</div>
  <div class="row">
    {
      projects.map((project) => (
        <div class="col-md-4">
          <div class="Skill">
            <h2 class="SkillTitle">{project.name}</h2>
            <img src={project.img} alt="screenshot" class="img-fluid" />
            <div class="SkillList d-flex justify-content-center flex-column mb-3">
              <p class="Desc">{project.description}</p>
              <a href={project.applink} class="btn btn-primary w-100" target="_blank" rel="noreferrer">View App</a>
              <a href={project.frontendcode} class="btn btn-primary w-100" target="_blank" rel="noreferrer">Front-end Source Code</a>
              <a href={project.backendcode} class="btn btn-primary w-100" target="_blank" rel="noreferrer">Back-end Source Code</a>
            </div>
          </div>
        </div>
      ))
    }
  </div>
</div>

  )
}

export default Project;
