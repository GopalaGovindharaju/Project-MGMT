// ReviewSchedule.js
import React from 'react';
import './Schedule.css';

function ReviewSchedule() {
  return (
    <div className="review-schedule-container">
      <h2>Review Schedule</h2>
      {/* Add your review schedule content here */}
      <p>Your upcoming project review is scheduled for:</p>
      <div className="datetime-info">
        <p>Date: <strong>February 15, 2024</strong></p>
        <p>Time: <strong>10:00 AM</strong></p>
      </div>
      <div className="footer">
        <p>If you have any questions, please contact your guide or HOD.</p>
      </div>
    </div>
  );
}

export default ReviewSchedule;
