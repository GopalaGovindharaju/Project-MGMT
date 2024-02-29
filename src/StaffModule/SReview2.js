import React, { useEffect, useState } from 'react'
import './Review0.css';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';


function SReview2() {
  const ID = useOutletContext();
  const [fileData, setFileData] = useState([]);
  const [approveScreenshot, setApproveScreenshot] = useState('');
  const [approveRoughReport, setApproveRoughReport] = useState('');
  const [approvePPT, setApprovePPT] = useState('');
  const [allrowsApproved,setAllrowsApproved] = useState(false);
  const [approveAll, setApproveAll] = useState('');
  const [initialAxiosPreventer, setInitialAxiosPreventer] = useState(true);


  useEffect(() => {
    const data = {
      id: ID,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_2_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
      setApproveScreenshot(response.data.implement_status ? 'approve' : 'reject')
      setApproveRoughReport(response.data.report_status ? 'approve' : 'reject')
      setApprovePPT(response.data.ppt_status ? 'approve' : 'reject')
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

useEffect(()=>{
  const data = {
    'id' : ID,
    'screenshot_status' : approveScreenshot,
    'roughreport_status' : approveRoughReport,
    'ppt_status' : approvePPT, 
    'all_status':approveAll,
  }
  if(initialAxiosPreventer){

  }
  else{
    axios.post('http://127.0.0.1:8000/reviewupload/status2/' ,data)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  }
},[approveScreenshot, approveRoughReport, approvePPT, approveAll,initialAxiosPreventer]);

  const handleApprove = (status) => {
    if(status === 'screenshot_status'){
      setApproveScreenshot('approve');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'roughreport_status'){
      setApproveRoughReport('approve');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'ppt_status'){
      setApprovePPT('approve');
      setInitialAxiosPreventer(false);
    }

  }

  const handleReject = (status) => {
    if(status === 'screenshot_status'){
      setApproveScreenshot('reject');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'roughreport_status'){
      setApproveRoughReport('reject');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'ppt_status'){
      setApprovePPT('reject');
      setInitialAxiosPreventer(false);
    }
    
  }

  useEffect(() => {
    if (approveScreenshot === 'approve' && approveRoughReport === 'approve' && approvePPT === 'approve') {
      setAllrowsApproved(true);
    } else {
      setAllrowsApproved(false);
    }
  }, [approveScreenshot, approveRoughReport, approvePPT,approveAll]);
  
  const handleForward = (e) => {
    e.preventDefault();
    setApproveAll('approve');
    setInitialAxiosPreventer(false);
  }

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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('screenshot_status')} disabled={approveScreenshot === 'approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('screenshot_status')} disabled={approveScreenshot === 'reject' ? true : false}>
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('roughreport_status')} disabled={approveRoughReport === 'approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('roughreport_status')} disabled={approveRoughReport === 'reject' ? true : false}>
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('ppt_status')} disabled={approvePPT === 'approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('ppt_status')} disabled={approvePPT === 'reject' ? true : false}>
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
                  onClick={handleForward}
                  disabled={fileData.guide_status ? true : false}
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