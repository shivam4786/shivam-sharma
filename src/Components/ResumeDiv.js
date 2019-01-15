import React from 'react';

const ResumeDiv = (props) => {
  return (
    <div className='resumeDiv'>
      <h1>{props.h1}</h1>
        <h3>{props.summary}</h3>
        <h5>{props.h5}</h5>
        <h3>{props.h3} </h3>
        <h5>{props.College}</h5>
        <p>{props.pre}</p>
        <p>{props.p}</p>
    </div>
  );
}

export default ResumeDiv;