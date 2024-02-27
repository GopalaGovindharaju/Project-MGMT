import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SReview3() {
  const [fileData, setFileData] = useState([]);
  const [approveScreenshot, setApproveScreenshot] = useState('reject');
  const [approveDemo, setApproveDemo] = useState('reject');
  const [approveDocumentation, setApproveDocumentation] = useState('reject');
  const [approvePpt, setApprovePpt] = useState('reject');
  const [allrowsApproved, setAllrowsApproved] = useState(false);

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

  const handleApprove = (status) => {
    if (status === 'demo_status'){
      setApproveDemo('accept');
    }
    else if (status === 'screenshot_status'){
      setApproveScreenshot('accept');
    }
    else if (status === 'documentation_status'){
      setApproveDocumentation('accept')
    }
    else if (status === 'ppt_status'){
      setApprovePpt('accept')
    }
    const data = {
      'id':3,
      'demo_status' : approveDemo,
      'screenshot_status' : approveScreenshot,
      'documentation_status' : approveDocumentation,
      'ppt_status' : approvePpt,
    }
    axios.post( '',data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const handleReject = (status) => {
    if (status === 'demo_status'){
      setApproveDemo('reject');
    }
    else if (status === 'screenshot_status'){
      setApproveScreenshot('reject');
    }
    else if (status === 'documentation_status'){
      setApproveDocumentation('reject')
    }
    else if (status === 'ppt_status'){
      setApprovePpt('reject')
    }
  }

  useEffect (() => {
    if (approveDemo === 'accept' && approveScreenshot === 'accept' && approveDocumentation === 'accept' && approvePpt === 'accept'){
      setAllrowsApproved(true);
    }
    else{
      setAllrowsApproved(false);
    }
  },[approveDemo, approveScreenshot, approveDocumentation, approvePpt]);
  
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('demo_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('demo_status')}>
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('screenshot_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('screenshot_status')}>
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('documentation_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('documentation_status')}> 
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
            
            {allrowsApproved && (
              <tr>
              <td colspan="2"></td>
              <td>
                <button type="submit" class="btn btn-success" style={{ width: "100%" }}>
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
  )
}

export default SReview3