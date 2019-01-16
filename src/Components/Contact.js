import React from 'react';
import Image from '../Images/transparent.png';

const contact = () => {
  return (
    <div className='container'>
      <div className="resume-para">
        <p>Reach Me</p>
        <h5>shivamsharma4786@gmail.com</h5>
        <div className='image-profile'><img src={Image} alt="Profile Pic"/></div>
      </div>
    </div>
  );
}

export default contact;