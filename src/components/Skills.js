import React from 'react';
import './skill.css';
import { skills } from '../components/Assets/SkillList';

const Skills = () => {
  return (
    <div className='p-5' id="skills">
    <div className='Container border'>
      <div className='Wrapper'>
        <div className='Title'>Skills</div>
        <div className='SkillsContainer'>
          {skills.map((skill) => (
            <div className='Skill' key={skill.id}>
              <h2 className='SkillTitle'>{skill.title}</h2>
              <div className='SkillList'>
                {skill.skills.map((item) => (
                  <li className='SkillItem'>
                    <h4 className='Skillicons'>{item.icons}</h4> 
                    {item.name}
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills;