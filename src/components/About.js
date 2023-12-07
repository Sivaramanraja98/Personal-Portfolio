import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div className="p-5" id="about">
      <Container className="borde1 align-items-center">
        <div className="Title">About Me</div>
        <Row className="justify-content-center">
          <Col md={10}>
            <p className="cont">
              I am a fresh and enthusiastic MERN Stack Developer, I bring a
              combination of self-driven learning, a positive mindset, and a
              quick learner's attitude to every project I tackle. My journey in
              web development has been marked by a strong determination to
              continuously expand my knowledge and skills. I thrive on the
              challenges that coding presents, and I approach each task with an
              insatiable curiosity to learn and grow. This self-motivated
              approach to learning ensures that I stay up-to-date with the
              latest technologies and best practices, making me a versatile and
              adaptable developer ready to take on new and exciting
              opportunities in the world of web development.
            </p>
          </Col>
        </Row>
        <Row
          className="justify-content-centerg-20"
          style={{ margin: "15px", fontSize: "20px" }}
        >
          <Col style={{ textAlign: "center", color: "cornsilk" }}>
            <ul style={{listStyle:'none'}}>
              <li>DOB : 02nd Febraury 1998</li>
              <li>Education : B.Tech - Mechanical Engineering</li>
              <li>College : Karunya Institute of Technology And Sciences, CBE </li>
              <li>Batch : 2015 - 2019</li>
              <li>Location : Tenkasi, Tamilnadu</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
