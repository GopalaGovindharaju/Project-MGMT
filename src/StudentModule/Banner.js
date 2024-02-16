// Banner.jsx

import React from 'react';
import './Banner.css';

function Banner({ handleLogout }) {
  return (
    <div>
    <header>
    <h4 className='batchno'>A-01</h4>
    <h1>Student Page </h1>
    <button  id='logoutbtn' onClick={handleLogout}>Log Out</button>
    </header>
    </div>
  );
}

export default Banner;
