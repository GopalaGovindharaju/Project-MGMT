import React, { useEffect, useState } from 'react';
import './AdminBody.css';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';


function AReview3() {
  const ID = useOutletContext();
  const [fileData, setFileData] = useState([]);
  const [approveScreenshot, setApproveScreenshot] = useState('');
  const [approveDemo, setApproveDemo] = useState('');
  const [approveDocumentation, setApproveDocumentation] = useState('');
  const [approvePpt, setApprovePpt] = useState('');
  const [guideStatus, setGuideStatus] = useState('');
  const [allrowsApproved, setAllrowsApproved] = useState(false);
  const [approveAll, setApproveAll] = useState('');
  const [initialAxiosPreventer, setInitialAxiosPreventer] = useState(true);
  const [reRenderGetFiles, setReRenderGetFiles] = useState(true);

  useEffect(() => {
    const data = {
      id: ID,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_3_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
      setApproveScreenshot(response.data.project_screenshot_status ? 'approve' : 'reject')
      setApproveDemo(response.data.project_demo_status ? 'approve' : 'reject')
      setApproveDocumentation(response.data.report_status ? 'approve' : 'reject')
      setApprovePpt(response.data.ppt_status ? 'approve' : 'reject')
      setGuideStatus(response.data.guideStatus ? 'approve' : 'reject')
    })
    .catch((error) => {
      console.log(error)
    })
  },[reRenderGetFiles])

  useEffect(() =>{
    const data = {
      'id': ID,
      'demo_status' : approveDemo,
      'screenshot_status' : approveScreenshot,
      'documentation_status' : approveDocumentation,
      'ppt_status' : approvePpt,
      'all_status' : approveAll === 'approve' ? 'approve' : 'reject',
      'hod_status': approveAll,
      'isAdmin': true,
    }
    if(initialAxiosPreventer){

    }
    else{
      axios.post( 'http://127.0.0.1:8000/reviewupload/status3/',data)
    .then((response) => {
      console.log(response);
      setReRenderGetFiles(reRenderGetFiles ? false : true);
    })
    .catch((error) => {
      console.log(error);
    })
    }
  },[approveDemo, approveScreenshot, approveDocumentation, approvePpt,approveAll,initialAxiosPreventer,guideStatus])

  const handleApprove = (status) => {
    if (status === 'demo_status'){
      setApproveDemo('approve');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'screenshot_status'){
      setApproveScreenshot('approve');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'documentation_status'){
      setApproveDocumentation('approve')
      setInitialAxiosPreventer(false);
    }
    else if (status === 'ppt_status'){
      setApprovePpt('approve')
      setInitialAxiosPreventer(false);
    }
    
  }

  const handleReject = (status) => {
    if (status === 'demo_status'){
      setApproveDemo('reject');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'screenshot_status'){
      setApproveScreenshot('reject');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'documentation_status'){
      setApproveDocumentation('reject')
      setInitialAxiosPreventer(false);
    }
    else if (status === 'ppt_status'){
      setApprovePpt('reject')
      setInitialAxiosPreventer(false);
    }
    
  }

  useEffect (() => {
    if (approveDemo === 'approve' && approveScreenshot === 'approve' && approveDocumentation === 'approve' && approvePpt === 'approve' && fileData.hod_status === false){
      setAllrowsApproved(true);
    }
    else{
      setAllrowsApproved(false);
    }
  },[approveDemo, approveScreenshot, approveDocumentation, approvePpt]);

  const handleForward = (e) => {
    e.preventDefault();
    setApproveAll('approve');
    setGuideStatus('approve');
    setInitialAxiosPreventer(false);
    setAllrowsApproved(false);
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
              <button type="button" class="btn btn-success" onClick={() => handleApprove('demo_status')} disabled={approveDemo==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('demo_status')} disabled={approveDemo==='reject' ? true : false}>
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
              <button type="button" class="btn btn-success" onClick={() => handleApprove('screenshot_status')} disabled={approveScreenshot==='approve' ? true : false}> 
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('screenshot_status')} disabled={approveScreenshot==='reject' ? true : false}>
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
               <button type="button" class="btn btn-success" onClick={() => handleApprove('documentation_status')} disabled={approveDocumentation==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('documentation_status')} disabled={approveDocumentation==='reject' ? true : false}> 
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('ppt_status')} disabled={approvePpt==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('ppt_status')} disabled={approvePpt==='reject' ? true : false}>  
                  Reject
                </button>
              </td>
            </tr>

            {allrowsApproved && (<tr>
              <td colspan="2"></td>
              <td>
                <button
                  type="submit"
                  class="btn btn-success"
                  style={{ width: "100%" }}
                  onClick={handleForward}
                >
                  Permission Granted
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

export default AReview3