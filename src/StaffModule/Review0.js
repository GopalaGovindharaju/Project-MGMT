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
              <td>Project Title Verification</td>
              <td>
                <input type="text" className="form-control reduced-size" readOnly={true} />
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
              <td>Abstract Document Verification</td>
              <td>
                <a href={"https://drive.google.com/file/d/1jFIBn5Z82vwFHINrc27nLlSOIJwkV2qp/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">Click here to view Abstract</a>
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
              <td>Base Paper Document Verification</td>
              <td>
                <a href={"https://drive.google.com/file/d/1jFIBn5Z82vwFHINrc27nLlSOIJwkV2qp/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">Click here to view Base Paper Document</a>
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
              <td>PPT Document Verification</td>
              <td>
                <a href={"https://drive.google.com/file/d/1jFIBn5Z82vwFHINrc27nLlSOIJwkV2qp/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">Click here to view PPT</a>
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
