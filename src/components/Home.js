import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { AiFillGithub } from "react-icons/ai";
import '../App.css';

const Home = () => {
  return (
    <div className="p-5 mar" id="home">
      <Container className="borde1 align-items-center">
        <Row className="justify-content-center">
          <Col md={8}>
            <h4 className="display-4 nametext"> Hi there I'm</h4>
            <h1 className="display-4 nametext1">SIVARAMAN RAJA</h1>
            <p className="lead">
              I'm a
              <h2>
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
                />{" "}
              </h2>
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center marb">
          <Col md={3}>
            <a
              className="btn btn-primary"
              href="https://drive.google.com/file/d/1GA57t-uekHiO-78YdTFtF-uTW3zJdLsy/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://github.com/Sivaramanraja98"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="btn btn-primary gitbtn">
                <AiFillGithub size={25} /> Github
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
