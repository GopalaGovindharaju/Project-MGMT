import React from 'react'
import { Link } from 'react-router-dom'

function AdminNavB() {
  return (
    <div >
      <nav >
        <div className="navbar-options">
        <Link to='AReview0' id='navbar-option'>Review 0</Link>
        <Link to='AReview1' id='navbar-option'>Review 1</Link>
        <Link to='AReview2' id='navbar-option'>Review 2</Link>
        <Link to='AReview3' id='navbar-option'>Review 3</Link>
        </div>
      </nav>
    </div>
  )
}

export default AdminNavB
