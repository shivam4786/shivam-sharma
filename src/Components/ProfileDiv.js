import React from 'react';
import '../Style/Style.css';

const ProfileDiv = (props) => {
  return (
    <div className="col-md-4">
          <img src={props.src} alt='pic'/>
          <h5>{props.heading}</h5>
          <p className='para'>
            {props.para}
          </p>
        </div>
  );
}

export default ProfileDiv;