import React, { useState } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleHoverEnter = (project) => {
    setHoveredProject(project);
  };

  const handleHoverLeave = () => {
    setHoveredProject(null);
  };

  return (
    <Container fluid>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4}>
            <Card
              className="h-100"
              onMouseEnter={() => handleHoverEnter(project)}
              onMouseLeave={handleHoverLeave}
            >
              <Image src={project.img} alt={project.name} />
              <Card.Overlay
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  opacity: hoveredProject === project ? 1 : 0,
                  transition: 'opacity 0.2s ease-in-out',
                }}
              >
                <Card.Title className="text-white">
                  {project.name}
                </Card.Title>
                <Card.Text className="text-white">
                  {project.description}
                </Card.Text>
              </Card.Overlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
    
