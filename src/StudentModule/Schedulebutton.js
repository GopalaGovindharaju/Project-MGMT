// Review.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NewStudent/Stud.css';
import ReviewSchedule from './ReviewSchedule';
import './Schedule.css'

function Schedulebutton({ setReview1Active }) {
  const [isReviewScheduleVisible, setReviewScheduleVisible] = useState(false);

  const toggleReviewSchedule = () => {
    setReviewScheduleVisible(!isReviewScheduleVisible);
  };

  return (
    <div id="review0Form" className="form-container">
      <form>
        {/* Your form content goes here */}
        
        <button type="button" className="small" onClick={toggleReviewSchedule}>
          <b>i</b>
        </button>

      </form>

      {isReviewScheduleVisible && <ReviewSchedule />}
    </div>
  );
}

export default Schedulebutton;
