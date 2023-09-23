import React from 'react';
import './skill.css';
import { AiFillGithub,AiFillMail,AiFillLinkedin } from 'react-icons/ai';
import {BsTelephoneFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import{ ImLocation } from 'react-icons/im'
import { Col,Button,Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='p-5 bg-light' id="contact">
    <div className='Container border' >
        <div className='Title'>Contact Me</div>
        <Row className='justify-content-center g-20'>
          <Col>  
            <a href='https://github.com/Sivaramanraja98' target='_blank'rel="noreferrer" >
            <Button className='btn btn-primary gitbtn'><AiFillGithub size={30}/></Button>
            </a>
        </Col>
        <Col className='justify-content-center g-20'>
            <a href='https://www.linkedin.com/in/sivaraman2298' target='_blank'rel="noreferrer" >
            <Button className='btn btn-primary gitbtn'><AiFillLinkedin size={30}/></Button>
            </a>
        </Col>
        <Col className='justify-content-center g-20'>
            <a href='mailto:Sivaram1194@gmail.com' target='_blank'rel="noreferrer" >
            <Button className='btn btn-primary gitbtn'><AiFillMail size={30}/></Button>
            </a>
        </Col>
        </Row>
        <Row className='justify-content-center g-20' style={{margin:'15px',fontSize:'20px'}}>
          <Col md={12} style={{textAlign:'center'}}>
            <p><BsTelephoneFill/> : +91 - 9791928453</p>
          </Col>
          <Col md={12} style={{textAlign:'center'}}>
            <p><HiOutlineMail/> : sivaram1194@gmail.com</p>
          </Col>
          <Col md={12} style={{textAlign:'center'}}>
            <p><ImLocation/> : TamilNadu ,India</p>
          </Col>
        </Row>
        </div>
      </div>
  )
}

export default Contact;