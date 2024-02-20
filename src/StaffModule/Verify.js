import React from 'react'
import { Link } from 'react-router-dom'


function Verify() {
  return (
    <div >
      <nav >
        <div className="navbar-options">
        <Link to='Summary' id='navbar-option'>Summary</Link>
        <Link to='SReview0' id='navbar-option'>Review 0</Link>
        <Link to='SReview1' id='navbar-option'>Review 1</Link>
        <Link to='SReview2' id='navbar-option'>Review 2</Link>
        <Link to='SReview3' id='navbar-option'>Review 3</Link>
        </div>
      </nav>
    </div>
  )
}

export default Verify
