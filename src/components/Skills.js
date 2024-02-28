import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { skills } from "./Constants/SkillList";
import "./style.css";

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <Container>
        <div className="skill-container">
          <h2 className="sksection-title">Skills</h2>
          <Row className="justify-content-center">
            {skills.slice(0, 3).map((skill, index) => (
              <Col
                md={4}
                key={index}
                className={`skill-card card-${index + 1}`}
              >
                <h2 className="skill-title">{skill.title}</h2>
                <ul className="skill-list">
                  {skill.skills.map((item, i) => (
                    <li key={i} className="skill-item">
                      <span className="skill-icon">{item.icons}</span>
                      <span className="skill-name">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
