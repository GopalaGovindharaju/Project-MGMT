import React from 'react'

function StaffReview1() {
  
  return (
    <div>
       <div class="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th>TASKS</th>
              <th >ACTION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>Abstract Document Verification</td>
              <td>
                <a href={"https://drive.google.com/file/d/1jFIBn5Z82vwFHINrc27nLlSOIJwkV2qp/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">Click here to view Abstract</a>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" >       
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>System Architecture Verification</td>
              <td>
                <a href={"https://drive.google.com/file/d/1jFIBn5Z82vwFHINrc27nLlSOIJwkV2qp/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">Click here to view System Architecture</a>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" >    
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Module Types Verification</td>
              <td>
                <a href={"https://drive.google.com/file/d/1jFIBn5Z82vwFHINrc27nLlSOIJwkV2qp/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">Click here to view Module Types</a>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" > 
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Module Techniques Verification</td>
              <td>
                <a href={"https://drive.google.com/file/d/1jFIBn5Z82vwFHINrc27nLlSOIJwkV2qp/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">Click here to view Module Techniques</a>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" > 
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Literature Survey Verification</td>
              <td>
                <a href={"https://drive.google.com/file/d/1jFIBn5Z82vwFHINrc27nLlSOIJwkV2qp/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">Click here to view Literature Survey</a>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" > 
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Expected Outcomes Verification</td>
              <td>
                <a href={"https://drive.google.com/file/d/1jFIBn5Z82vwFHINrc27nLlSOIJwkV2qp/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">Click here to view Expected Outcomes (40%)</a>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" >
                  Reject
                </button>
              </td>
            </tr>
     
            <tr>
              <td colspan="2"></td>
              <td>
                <button type="submit" class="btn btn-success" style={{ width: "100%" }}>
                Forward To HOD
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

export default StaffReview1