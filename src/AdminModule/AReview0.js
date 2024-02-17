import React from 'react';
import '../StaffModule/Review0.css';
import './AdminBody.css';

function AReview0() {
  return (
    <div>
      <div class="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th>TASKS</th>
              <th  className="table-column">ACTION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>Project Title</td>
              <td>
                <input type="text" class="form-control reduced-size" disabled />
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
              <td>Abstract Document Submission</td>
              <td>
                <input type="file" class="" accept=".pdf, .doc, .docx" disabled />
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
              <td>Base Paper Document Submission</td>
              <td>
                <input type="file" class="" accept=".pdf, .doc, .docx" disabled />
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
              <td>PPT Document Submission</td>
              <td>
                <input type="file" class="" accept=".ppt, .pptx" disabled />
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

export default AReview0