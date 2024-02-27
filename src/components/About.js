import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css"; 

const About = () => {
  return (
    <div className="about-section" id="about">
      <Container>
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <p className="about-description">
                I am a fresh and enthusiastic MERN Stack Developer, bringing a combination of self-driven learning, a positive mindset, and a quick learner's attitude to every project I tackle. My journey in web development has been marked by a strong determination to continuously expand my knowledge and skills. I thrive on the challenges that coding presents, and I approach each task with an insatiable curiosity to learn and grow. This self-motivated approach to learning ensures that I stay up-to-date with the latest technologies and best practices, making me a versatile and adaptable developer ready to take on new and exciting opportunities in the world of web development.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <ul className="about-details">
                <li><strong>DOB:</strong> 02nd February 1998</li>
                <li><strong>Education:</strong> B.Tech - Mechanical Engineering</li>
                <li><strong>College:</strong> Karunya Institute of Technology And Sciences, CBE</li>
                <li><strong>Batch:</strong> 2015 - 2019</li>
                <li><strong>Location:</strong> Tenkasi, Tamil Nadu</li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
