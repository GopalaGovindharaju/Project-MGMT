// Banner.jsx

import React from 'react';
import './Banner.css';

function Banner({ handleLogout }) {
  return (
    <div>
      <header>
        <h1>Student Page</h1>
        <button className="custom-btn btn-3" value="Log Out" onClick={handleLogout}>
          <span>Log Out</span>
        </button>
      </header>
    </div>
  );
}

export default Banner;
