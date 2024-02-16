// Banner.jsx

import React from 'react';
import './Banner.css';

function Banner({ handleLogout, batchNo, moduleName }) {
  return (
    <div>
    <header>
    <h4 className='batchno'>{batchNo}</h4>
    <h1 style={{color:'#FFFFFF'}}>{moduleName} </h1>
    <button  id='logoutbtn' onClick={handleLogout}>Log Out</button>
    </header>
    </div>
  );
}

export default Banner;
