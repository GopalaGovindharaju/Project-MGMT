import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NewStudent/Stud.css';
import ReviewSchedule from './ReviewSchedule'; // Import the component for review schedule

function Pop({ setReview1Active }) {
  const [isReviewScheduleVisible, setReviewScheduleVisible] = useState(false);

  const toggleReviewSchedule = () => {
    setReviewScheduleVisible(!isReviewScheduleVisible);
  };

  return (
    <div id="review0Form" className="form-container">
      <form>
        <table>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Submission</th>
              <th>
                Conformation
                <button type="button" className="small" onClick={toggleReviewSchedule}>
                  <b>i</b>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* ... your existing form code ... */}
          </tbody>
        </table>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>

      {/* Conditional rendering of the ReviewSchedule component */}
      {isReviewScheduleVisible && <ReviewSchedule />}
    </div>
  );
}

export default Pop;
