import React from 'react';
import '../Style/Style.css';
import profilepic from '../Images/transparent.png';

const profile = () => {
  return (
    <div className='container-fluid cont-cust'>
      <div className='row profile-row'>
        <div className='col-sm-6 col-md-5'>
          <img src={profilepic} alt="pic" />
        </div>
        <div className='col-sm-6 col-md-7'>
          <div className='profile-div'>
            <h2 className='profile-heading'>hello!</h2>
            <p className='profile-para'>Team player software developer with a can-do attitude, phenomenal time management skills, and a strong user focus.</p>
            <div className='row'>
              <div className="col-sm"><a href="https://www.linkedin.com/in/shivam-sharma-25a3b7115/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></div>
              {/* <div className="col-sm"><a href="https://github.com/shivam4786"><i className="fab fa-github"></i></a></div> */}
              <div className="col-sm"><a href="https://leetcode.com/shivamsharma4786/" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;