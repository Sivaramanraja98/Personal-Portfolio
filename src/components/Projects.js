import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { projects } from "./Constants/ProjectList";
import "./style.css";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectTypes = ["All", "Mern", "React", "JavaScript"];

  const handleTabClick = (type) => {
    setActiveTab(type);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.Type === activeTab);

  return (
    <div className="projects-section" id="projects">
      <Container>
        <div className="project-container">
          <h2 className="prsection-title">Projects</h2>
          <div className="tab-container">
            {projectTypes.map((type) => (
              <div
                key={type}
                className={`tab tab-${type}`}
                onClick={() => handleTabClick(type)}
              >
                {type.toUpperCase()}
              </div>
            ))}
          </div>
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredProjects.map((project) => (
              <Col key={project.id}>
                <Card className={`project-card card-${project.id}`}>
                  <Card.Img variant="top" src={project.img} alt="screenshot" />
                  <Card.Body className="justify-content-center">
                    <Card.Title>{project.name}</Card.Title>
                    <Button onClick={() => handleProjectClick(project)}>
                      View Project Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      {selectedProject && (
        <ProjectDetails
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Projects;
