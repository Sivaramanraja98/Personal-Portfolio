import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { projects } from "../components/Assets/ProjectList";
import "./style.css"; 

const Projects = () => {
  return (
    <div className="projects-section" id="project">
      <Container>
      <div className="project-container">
        <h2 className="section-title">Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project, index) => (
            <Col key={index}>
              <Card className={`project-card card-${index + 1}`}>
                <Card.Img variant="top" src={project.img} alt="screenshot" />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <details>
                    <summary>Description</summary>
                    <Card.Text>{project.description}</Card.Text>
                  </details>
                  <div className="buttons">
                    <Button href={project.applink} variant="primary" target="_blank" rel="noreferrer">Demo</Button>
                    <Button href={project.frontendcode} variant="secondary" target="_blank" rel="noreferrer">FE Code</Button>
                    <Button href={project.backendcode} variant="secondary" target="_blank" rel="noreferrer">BE Code</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
