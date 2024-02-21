import React from 'react'
import { Link } from 'react-router-dom'

function PanelNav() {
  return (
    <div>
          <nav>
            <div className="navbar-options">
              <Link to='PReview0' id='navbar-option'>Review 0</Link>
              <Link to='PReview1' id='navbar-option'>Review 1</Link>
              <Link to='PReview2' id='navbar-option'>Review 2</Link>
              <Link to='PReview3' id='navbar-option'>Review 3</Link>
            </div>
          </nav>
        </div>
  )
}

export default PanelNav
