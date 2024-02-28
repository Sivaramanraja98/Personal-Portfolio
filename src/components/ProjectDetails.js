import React from "react";
import { Card, Button, Modal } from "react-bootstrap";

const ProjectDetails = ({
  showModal,
  setShowModal,
  selectedProject,
  setSelectedProject,
}) => {
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };
  return (
    <>
    <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
    <Modal.Header closeButton>
      <Modal.Title>{selectedProject.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Card.Img variant="top" src={selectedProject.img} alt="screenshot" />
      <Card.Text>{selectedProject.description}</Card.Text>
      <Card.Text><strong>Technologies Used: </strong>{selectedProject.techFrontend.join(", ")}</Card.Text>
    </Modal.Body>
    <Modal.Footer>
    <Button href={selectedProject.applink} variant="primary" target="_blank" rel="noreferrer">
    Live
  </Button>
  <Button href={selectedProject.frontendcode} variant="secondary" target="_blank" rel="noreferrer">
    FE Code
  </Button>
  {selectedProject.backendcode && (
    <Button href={selectedProject.backendcode} variant="secondary" target="_blank" rel="noreferrer">
      BE Code
    </Button>
  )}
    </Modal.Footer>
  </Modal>
    </>
  );
};

export default ProjectDetails;
