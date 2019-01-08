import React from 'react';
import '../Style/Style.css';
// import { Route } from 'react-router';
import { Link } from 'react-router-dom';
// import Resume from '../Components/Resume';
// import Work from '../Components/Work';
// import Contact from '../Components/Contact';


const navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light customNav'>
      <div className="container">
        <Link className="navbar-brand" to='/'>Shivam Sharma.</Link>
        <ul className='navbar-nav ml-auto'>
          <li className="nav-item">
            <Link className="nav-link" to='/resume'>resume</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/contact'>contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;