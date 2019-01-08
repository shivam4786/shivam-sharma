import React from 'react';
import '../Style/Style.css';
import Ideate from '../Images/ic_ideate.svg';
import Implement from '../Images/ic_implement.svg';
import Iterate from '../Images/ic_iterate.svg';
import Quote from '../Images/ic_quote.svg';

const process = () => {
  return (
    <div className="container">
      <div className="row process">
        <div className="row heading-process">
          <h2>process</h2>
        </div>
      </div>
      <div className='row'>
        <div className="col-md-4 ">
          <img src={Ideate} alt="ideate" />
          <h5>ideate</h5>
          <p className='para'>
            Dig to the root of problem and solve it according to business requirements.
          </p>
        </div>
        <div className="col-md-4">
          <img src={Implement} alt="implement" />
          <h5>implement</h5>
          <p className='para'>
            Take decisions and solve problems keeping user in mind.
          </p>
        </div>
        <div className="col-md-4">
          <img src={Iterate} alt="iterate" />
          <h5>iterate</h5>
          <p className='para'>
            Create and change repititively adapting to varying requirements and new set of goals.
          </p>
        </div>
      </div>
      <div className="row quote">
        <div className="col">
          <img src={Quote} alt="quote"/>
          <p className='quote-para'>
            “Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
          </p>
        </div>
      </div>
    </div>
  );
}

export default process;