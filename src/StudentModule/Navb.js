import React from 'react'
import './Navb.css'
function Navb({handleLogout}) {
 
  return (
    <div>
    <nav>
    <div class="navbar-options">
      <a href="#" class="navbar-option" onclick="showForm('review0')">Review 0</a>
      <a href="#" class="navbar-option" onclick="showForm('review1')">Review 1</a>
      <a href="#" class="navbar-option" onclick="showForm('review2')">Review 2</a>
      <a href="#" class="navbar-option" onclick="showForm('review3')">Review 3</a>
      <button class="custom-btn btn-3" value="Log Out" onClick={handleLogout}><span>Log Out</span></button>

    </div>
  </nav>

    </div>
  )
}

export default Navb
