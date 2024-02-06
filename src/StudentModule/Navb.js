import React, { useState } from 'react';
import './Navb.css';

function Navb() {
  const [showStudentDetails, setShowStudentDetails] = useState(false);

  const handleStudentDetailsClick = () => {
    setShowStudentDetails(true);
  };

  const handleReviewClick = (reviewNumber) => {
    // Handle logic for other review clicks if needed
    setShowStudentDetails(false);
    // Add logic to handle other review clicks if needed
  };

  return (
    <div>
      <nav>
        <div className="navbar-options">
          <a href="#" className="navbar-option" onClick={() => handleReviewClick('review0')}>
            Review 0
          </a>
          <a href="#" className="navbar-option" onClick={() => handleReviewClick('review1')}>
            Review 1
          </a>
          <a href="#" className="navbar-option" onClick={() => handleReviewClick('review2')}>
            Review 2
          </a>
          <a href="#" className="navbar-option" onClick={() => handleReviewClick('review3')}>
            Review 3
          </a>
          <a href="#" className="navbar-option" onClick={handleStudentDetailsClick}>
            Student Details
          </a>
        </div>
      </nav>

      {showStudentDetails && (
        <div className="student-details-column">
          {/* Render the column of student details here */}
          {/* You can fetch and display the student details dynamically */}
          Student 1 Details
          <br />
          Student 2 Details
          <br />
          {/* Add more student details as needed */}
        </div>
      )}
    </div>
  );
}

export default Navb;
