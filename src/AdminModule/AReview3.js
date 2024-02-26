import React, { useEffect, useState } from 'react';
import './AdminBody.css';
import axios from 'axios';


function AReview3() {
  const [fileData, setFileData] = useState([]);

  useEffect(() => {
    const data = {
      id: 3,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_3_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])
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
              <td>Project Demo (Video) Verification</td>
              <td>
                {fileData.project_demo_video_url ? (
                  <a
                    href={fileData.project_demo_video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Project Demo
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Project Screenshots Verification</td>
              <td>
                {fileData.project_screenshot_url ? (
                  <a
                    href={fileData.project_screenshot_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Project Screenshots
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Documentation Verification</td>
              <td>
                {fileData.report_url ? (
                  <a
                    href={fileData.report_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Report Documentation
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>PPT Document Verification</td>
              <td>
                {fileData.ppt_url ? (
                  <a
                    href={fileData.ppt_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view PPT
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="2"></td>
              <td>
                <button
                  type="submit"
                  class="btn btn-success"
                  style={{ width: "100%" }}
                >
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
  );
}

export default AReview3