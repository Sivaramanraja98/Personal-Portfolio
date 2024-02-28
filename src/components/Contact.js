import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact-section bg-gradient" id="contact">
      <Container>
        <div className="contact-container">
          <h2 className="section-title funky-text text-center mb-5">
            Get in Touch
          </h2>
          <Row className="justify-content-center text-center">
            <Col md={6}>
              <p>
                <span className="contact-icon">📞</span>{" "}
                <span className="cfunky-text">+91 - 9791928453</span>
              </p>
              <p>
                <span className="contact-icon">✉️</span>{" "}
                <span className="cfunky-text">sivaram1194@gmail.com</span>
              </p>
              <p>
                <span className="contact-icon">📍</span>{" "}
                <span className="cfunky-text">TamilNadu, India</span>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col md={6} className="text-center">
              <div className="social-links">
                <a
                  href="https://github.com/Sivaramanraja98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon"
                >
                  <AiFillGithub size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sivaraman2298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon"
                >
                  <AiFillLinkedin size={40} />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
