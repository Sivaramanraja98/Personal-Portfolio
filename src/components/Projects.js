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
<<<<<<< HEAD
    <div className='p-5' id="project">
    <div className='Container border'>
      <div className='Wrapper'>
        <div className='Title'>Projects</div>
        <div className='SkillsContainer'>
          {
            projects.map((project)=>(
              
              <div className='Skill' key={project.id}>
              <h2 className='SkillTitle'>{project.name}</h2>
              <img src={project.img} 
                alt='screenshot' 
                style={{width:"100%",height:"200px"}}
              />
              <div className='SkillList justify-content-center'>
                <p className='Desc'>{project.description}</p>
                <div>
                  <a style={{width:"90%"}}
                  href={project.applink} 
                  className='link' 
                  target='_blank' 
                  rel="noreferrer" >
                    Live Demo
                </a>
                <a style={{width:"90%"}}
                  href={project.frontendcode} 
                  className='link'
                  target='_blank'
                  rel="noreferrer" >
                    Front-end Code
                </a>
                <a style={{width:"90%"}}
                  href={project.backendcode}  
                  className='link' 
                  target='_blank' 
                  rel="noreferrer" >
                    Back-end Code
                </a></div>
              </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
    </div>
  )
}
=======
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
>>>>>>> 05049903c3d8ad6e30efe053cb416e7bdfa838bd

export default Projects;
    
