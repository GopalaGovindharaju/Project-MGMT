import React from 'react';
import './Review0.css';

function Review0() {
  return (
    <div>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>TASKS</th>
              <th className="table-column" >ACTION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Project Title</td>
              <td>
                <input type="text" className="form-control reduced-size" disabled />
              </td>
              <td>
                <button type="button" className="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" >Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Abstract Document Submission</td>
              <td>
                <input type="file" className="formss" accept=".pdf, .doc, .docx" disabled />
              </td>
              <td>
                <button type="button" className="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" >Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Base Paper Document Submission</td>
              <td>
                <input type="file" className="formss" accept=".pdf, .doc, .docx" disabled />
              </td>
              <td>
                <button type="button" className="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" >
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>PPT Document Submission</td>
              <td>
                <input type="file" className="formss" accept=".ppt, .pptx" disabled />
              </td>
              <td>
                <button type="button" className="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" >Reject
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2"></td>
              <td>
                <button type="submit" className="btn btn-success" style={{ width: "100%" }}>
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
  );
}

export default Review0;
