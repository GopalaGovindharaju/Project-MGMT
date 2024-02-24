import React from 'react'

function SReview3() {
  
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
          <tbody >
            <tr>
              <td>Project Demo Verification</td>
              <td>
              <input type="file" class=""accept="video/*" readOnly={true} />
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
              <td>Project Screenshots Verification</td>
              <td>
                <input type="file" class="" accept=".pdf, .doc, .docx" readOnly={true} />
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
              <td>Documentation Verification</td>
              <td>
                <input type="file" class="" accept=".pdf, .doc, .docx" readOnly={true} />
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
              <td>PPT Verification</td>
              <td>
                <input type="file" class="" accept=".pdf, .doc, .docx" readOnly={true} />
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

export default SReview3