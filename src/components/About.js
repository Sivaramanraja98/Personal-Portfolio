import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import {AiFillGithub} from 'react-icons/ai';

const About = () => {
  return (
    <div className='p-5 mar bg-light' id="about">
      <Container className='border'>
        <Row className="justify-content-center">
          <Col md={8}>
            <h4 className="display-4 nametext"> Hi there I'm</h4>
            <h1 className="display-4 nametext">SIVARAMAN RAJA</h1>
            <p className="lead"> I'm a
                <h3><Typewriter
                options={{
                strings: ['Full Stack Developer', 'Frontend Developer','Backend Developer','Web Developer','Software Developer'],
                autoStart: true,
                loop: true,
            }}
            /> </h3>
            </p>
            <p>
            As a fresh and enthusiastic MERN Stack Developer, I bring a combination of self-driven learning, a positive mindset, and a quick learner's attitude to every project I tackle. My journey in web development has been marked by a strong determination to continuously expand my knowledge and skills. I thrive on the challenges that coding presents, and I approach each task with an insatiable curiosity to learn and grow. This self-motivated approach to learning ensures that I stay up-to-date with the latest technologies and best practices, making me a versatile and adaptable developer ready to take on new and exciting opportunities in the world of web development.
          </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={3}>
            <a 
              className='btn btn-primary'
              href='https://drive.google.com/file/d/1GA57t-uekHiO-78YdTFtF-uTW3zJdLsy/view?usp=drive_link'
              target='_blank'
              rel="noreferrer">              
                My Resume
            </a>
          </Col>
          <Col md={3}>
            <a href='https://github.com/Sivaramanraja98' target='_blank'rel="noreferrer" >
            <Button className='btn btn-primary gitbtn'><AiFillGithub size={25}/> Github</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
