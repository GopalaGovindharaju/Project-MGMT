import React, { useState } from 'react';
import './AdminBody.css';


function AReview2() {
    const [answer, setAnswer] = useState('');
  
    const handleAnswerChange = (event) => {
      setAnswer(event.target.value);
    };
  return (
    <div>
      <div class="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th>TASKS</th>
              <th>ACTION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Project Screenshots Verification</td>
              <td>
              <a href={''} target="_blank" rel="noopener noreferrer"> Click Here to View Project Screenshots </a>

              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" > Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Rough Report Of The Project Verification</td>
              <td>
              <a href={''} target="_blank" rel="noopener noreferrer"> Click Here to View Rough Report </a>

              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" >Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>PPT Verification</td>
              <td>
              <a href={''} target="_blank" rel="noopener noreferrer"> Click Here to View PPT </a>

              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" >Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Project Publishing</td>
              <td>
              <select  className='chitra' id="yesNoQuestion" value={answer} onChange={handleAnswerChange} readOnly={true}>
            <option value="">Please select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
              </td>
              
              
            </tr>
            <tr>
              <td colspan="2"></td>
              <td>
                <button type="submit" class="btn btn-success" style={{ width: "100%" }}>
                Permission Granted
              </button>
              </td>
            </tr>
      
          </tbody>
        </table>

        <div id="reviewSchedule" style={{ display: "none" }}></div>
      </div>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  )
}

export default AReview2