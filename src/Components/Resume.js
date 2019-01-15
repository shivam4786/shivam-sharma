import React from 'react';
import ResumeDiv from './ResumeDiv';

const resume = () => {
  return (
    <div className='container'>
      <div className="resume resume-para">
        <ResumeDiv h1='Shivam Sharma' summary='Software Developer' h5='summary' p='Seeking a position in an organisation focused on making human centric products with data driven decisions. With mentality to learn at each step, technical education along with diverse experience of working full-stack developer in an agile culture, I aim to deliver my best with productive outcomes.' />
        <ResumeDiv h5='experience' pre='Jan 2018 - July 2018 (Full-Time)' p='Worked as Front-End Developer with a team of developers, managers in an agile environment to solve problems for web .' />
        <ResumeDiv h5='education' h3='B.E in Information Technology' College='U.I.E.T, Panjab University, Chandigarh' pre='July 2014 - June 2018 (Full-Time)' p='Working knowledge of various languages helps me taking major decision in feasibilty and shaping the architecture. The education helps me in perceiving a developer’s point of view while approaching a problem.' />
        <h5>competencies</h5>
        <li>C++</li>
        <li>Data Structures</li>
        <li>Algorithms</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>BootStrap 4</li>
        <li>ReactJS</li>
      </div>
    </div>
  );
}

export default resume;