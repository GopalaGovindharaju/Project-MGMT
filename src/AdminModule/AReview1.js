import React from 'react';
import './AdminBody.css';

function AReview1() {
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
          <tbody>
            <tr>
              <td>Abstract Document Submission</td>
              <td>
              <input type="file" class="formss" accept=".pdf, .doc, .docx" disabled />
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
              <td>System Architecture Submission</td>
              <td>
                <input type="file" class="formss" accept=".pdf, .doc, .docx" disabled />
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
              <td>Module Types Submission</td>
              <td>
                <input type="file" class="formss" accept=".pdf, .doc, .docx" disabled />
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
              <td>Module Techniques Submission</td>
              <td>
                <input type="file" class="formss" accept=".ppt, .pptx" disabled />
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
              <td>Literature Survey Submission</td>
              <td>
                <input type="file" class="formss" accept=".pdf, .doc, .docx" disabled />
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
              <td>Expected Outcomes (Screenshot)</td>
              <td>
                <input type="file" class="formss" accept=".pdf, .doc, .docx" disabled />
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

export default AReview1