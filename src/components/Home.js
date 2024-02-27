import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { AiFillGithub } from "react-icons/ai";
import "./style.css";

const Home = () => {
  return (
    <div className="home-section" id="home">
      <Container>
        <div className="home-container">
          <Row className="justify-content-center align-items-center">
            <Col md={8} className="text-center">
              <h4 className="display-4 mb-3 funky-text">Hi there, I'm</h4>
              <h1 className="display-1 mb-4 funky-text">SIVARAMAN RAJA</h1>
              <p className="lead mb-4">
                I'm a{" "}
                <span>
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer",
                        "Frontend Developer",
                        "Backend Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <a
                className="btn btn-primary btn-lg btn-block funky-btn"
                href="https://drive.google.com/file/d/1GA57t-uekHiO-78YdTFtF-uTW3zJdLsy/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                My Resume
              </a>
            </Col>
            <Col md={6} className="text-center">
              <a
                href="https://github.com/Sivaramanraja98"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg btn-block github-btn"
              >
                <AiFillGithub size={25} style={{ marginRight: "0.5rem" }} />{" "}
                Github
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
