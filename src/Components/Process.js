import React from 'react';
import '../Style/Style.css';
import Ideate from '../Images/ic_ideate.svg';
import Implement from '../Images/ic_implement.svg';
import Iterate from '../Images/ic_iterate.svg';
import Quote from '../Images/ic_quote.svg';
import ProfileDiv from './ProfileDiv';

const process = () => {
  return (
    <div className="container">
      <div className="row process">
        <div className="row heading-process">
          <h2>process</h2>
        </div>
      </div>
      <div className='row process-icons'>
        <ProfileDiv src={Ideate} heading='ideate' para='Dig to the root of problem and solve it according to business requirements.'/>
        <ProfileDiv src={Implement} heading='implement' para='Take decisions and solve problems keeping user in mind.'/>
        <ProfileDiv src={Iterate} heading='iterate' para='Create and change repititively adapting to varying requirements and new set of goals.'/>
      </div>
      <div className="row quote">
        <div className="col">
          <img src={Quote} alt="quote"/>
          <p className='quote-para'>
            “Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
          </p>
          <p className='author'>-Abraham Lincoln</p>
        </div>
      </div>
    </div>
  );
}

export default process;