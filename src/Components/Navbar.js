import React from 'react';
import '../Style/Style.css';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light customNav'>
      <div className="container">
        <Link className="navbar-brand" to='/shivam-sharma'>Shivam Sharma.</Link>
        <ul className='navbar-nav ml-auto'>
          <li className="nav-item">
            <Link className="nav-link" to='/shivam-sharma/resume'>resume</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/shivam-sharma/contact'>contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;