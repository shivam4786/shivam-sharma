import React from 'react';
import Profile from './Profile';
import Process from './Process';
import '../Style/Style.css';
const Index = () => {
  return (
    <div className='container'>
      <Profile/>
      <Process/>
    </div>
  );
}

export default Index;