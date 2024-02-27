import React, { useEffect, useState } from 'react'
import './Review0.css';
import axios from 'axios';


function SReview2() {
  const [fileData, setFileData] = useState([]);
  const [approveScreenshot, setApproveScreenshot] = useState('reject');
  const [approveRoughReport, setApproveRoughReport] = useState('reject');
  const [approvePPT, setApprovePPT] = useState('reject');
  const [allrowsApproved,setAllrowsApproved] = useState(false);

  useEffect(() => {
    const data = {
      id: 3,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_2_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  const handleApprove = (status) => {
    if(status === 'screenshot_status'){
      setApproveScreenshot('approve')
    }
    else if (status === 'roughreport_status'){
      setApproveRoughReport('approve')
    }
    else if (status === 'ppt_status'){
      setApprovePPT('approve')
    }

    const data = {
      'id' : 3,
      'screenshot_status' : approveScreenshot,
      'roughreport_status' : approveRoughReport,
      'ppt_status' : approvePPT, 
    }
    axios.post('http://127.0.0.1:8000/reviewupload/status2/' ,data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const handleReject = (status) => {
    if(status === 'screenshot_status'){
      setApproveScreenshot('reject')
    }
    else if (status === 'roughreport_status'){
      setApproveRoughReport('reject')
    }
    else if (status === 'ppt_status'){
      setApprovePPT('reject')
    }
    const data = {
      'id' : 3,
      'screenshot_status' : approveScreenshot,
      'roughreport_status' : approveRoughReport,
      'ppt_status' : approvePPT, 
    }
    axios.post('http://127.0.0.1:8000/reviewupload/status2/' ,data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    if (approveScreenshot === 'approve' && approveRoughReport === 'approve' && approvePPT === 'approve') {
      setAllrowsApproved(true);
    } else {
      setAllrowsApproved(false);
    }
  }, [approveScreenshot, approveRoughReport, approvePPT]);
  
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('screenshot_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('screenshot_status')}>
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Rough Report Verification</td>
              <td>
                {fileData.rough_report_url ? (
                  <a
                    href={fileData.rough_report_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Rough Report
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success" onClick={() => handleApprove('roughreport_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('roughreport_status')}>
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>PPT Verification</td>
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('ppt_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('ppt_status')}>
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Publishing Paper?</td>
              <td>
                {fileData.project_publish_state ? <td>Yes</td> : <td>No</td>}
              </td>
            </tr>

            {allrowsApproved && (
              <tr>
              <td colspan="2"></td>
                <td>
                <button
                  type="submit"
                  class="btn btn-success"
                  style={{ width: "100%" }}
                >
                  Forward To HOD
                </button>
              </td>              
            </tr>
            )}
            
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

export default SReview2