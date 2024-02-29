import React, { useEffect, useState } from 'react';
import './AdminBody.css';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

function AReview1() {
  const ID = useOutletContext();
  const [approveSysArchitecture, setApproveSysArchitecture] = useState('');
  const [approveModTypes, setApproveModTypes] = useState('');;
  const [approveModTech, setApproveModTech] = useState('');;
  const [approveLiteratureSurvey, setApproveLiteratureSurvey] = useState('');;
  const [approveOutcome, setApproveOutcome] = useState('');;
  const [approvePpt, setApprovePpt] = useState('');
  const [allrowsApproved,setAllrowsApproved] = useState(false);
  const [fileData, setFileData] = useState([]);
  const [approveAll, setApproveAll] = useState('');
  const[initialAxiosPreventer,setInitialAxiosPreventer]=useState(true)

  useEffect(() => {
    const data = {
      id: ID,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_1_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
      setApproveSysArchitecture(response.data.system_architecture_status ? 'approve' : 'reject')
      setApproveModTypes(response.data.modules_status ? 'approve':'reject')
      setApproveModTech(response.data.modules_description_status ? 'approve' : 'reject')
      setApproveLiteratureSurvey(response.data.literature_survey_status ? 'approve' : 'reject')
      setApproveOutcome(response.data.expected_outcome_status ? 'approve' : 'reject')
      setApprovePpt(response.data.ppt_status ? 'approve' : 'reject')
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  const handleApprove = (status) => {
    if (status === 'sysarchitecture_status'){
      setApproveSysArchitecture('approve');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'moduletypes_status'){
      setApproveModTypes('approve');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'moduletech_status'){
      setApproveModTech('approve');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'literature_status'){
      setApproveLiteratureSurvey('approve');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'outcome_status'){
      setApproveOutcome('approve');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'ppt_status'){
      setApprovePpt('approve');
      setInitialAxiosPreventer(false);
    }
  }

  useEffect (() => {
    const data = {
      'id': ID,
      'sysarchitecture_status' : approveSysArchitecture,
      'moduletypes_status' : approveModTypes,
      'moduletech_status' : approveModTech,
      'literature_status' : approveLiteratureSurvey,
      'outcome_status' : approveOutcome,
      'ppt_status' : approvePpt,
      'all_status': approveAll,
      'hod_status': fileData.guide_status ? 'approve' : 'reject',

    }
    if(initialAxiosPreventer){



    }
    else{
      axios.post('http://127.0.0.1:8000/reviewupload/status1/' ,data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })


    }
    
  },[approveSysArchitecture, approveModTypes, approveModTech, approveLiteratureSurvey, approveOutcome, approvePpt,approveAll,initialAxiosPreventer])

  const handleReject = (status) => {
    if (status === 'sysarchitecture_status'){
      setApproveSysArchitecture('reject');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'moduletypes_status'){
      setApproveModTypes('reject');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'moduletech_status'){
      setApproveModTech('reject');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'literature_status'){
      setApproveLiteratureSurvey('reject');
      setInitialAxiosPreventer(false);
    }
    else if (status === 'outcome_status'){
      setApproveOutcome('reject')
      setInitialAxiosPreventer(false);
    }
    else if (status === 'ppt_status'){
      setApprovePpt('reject')
      setInitialAxiosPreventer(false);
    }
  }

  useEffect( () => {
    if (approveSysArchitecture === 'approve' && approveModTypes === 'approve' && approveModTech === 'approve' && approveLiteratureSurvey === 'approve' && approveOutcome === 'approve' && approvePpt === 'approve'){
      setAllrowsApproved(true);
    }else{
      setAllrowsApproved(false);
    }
  },[approveSysArchitecture, approveModTypes, approveModTech, approveLiteratureSurvey, approveOutcome, approvePpt]);
  
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
              <td>System Architecture Verification</td>
              <td>
                {fileData.system_architecture_url ? (
                  <a
                    href={fileData.system_architecture_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view System Architecture
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success" onClick={() => handleApprove('sysarchitecture_status')} disabled={approveSysArchitecture==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('sysarchitecture_status')} disabled={approveSysArchitecture==='reject' ? true : false}>
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Module Types Verification</td>
              <td>
                {fileData.module_types_url ? (
                  <a
                    href={fileData.module_types_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Module Types
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success" onClick={() => handleApprove('moduletypes_status')} disabled={approveModTypes ==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('moduletypes_status')} disabled={approveModTypes ==='reject' ? true : false}>
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Module Techniques Verification</td>
              <td>
                {fileData.module_techniques_url ? (
                  <a
                    href={fileData.module_techniques_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Module Techniques
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success" onClick={() => handleApprove('moduletech_status')} disabled={approveModTech ==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('moduletech_status')} disabled={approveModTech ==='reject' ? true : false}>
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Literature Survey Verification</td>
              <td>
                {fileData.literature_survey_url ? (
                  <a
                    href={fileData.literature_survey_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Literature Survey
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success" onClick={() => handleApprove('literature_status')} disabled={approveLiteratureSurvey ==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('literature_status')} disabled={approveLiteratureSurvey ==='reject' ? true : false}>
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Expected Outcomes Verification</td>
              <td>
                {fileData.expected_outcome_url ? (
                  <a
                    href={fileData.expected_outcome_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Expected Outcomes (40%)
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success" onClick={() => handleApprove('outcome_status')} disabled={approveOutcome ==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('outcome_status')} disabled={approveOutcome ==='reject' ? true : false}>
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>PPt Document Verification</td>
              <td>
                {fileData.ppt_url ? (
                  <a
                    href={fileData.ppt_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view PPT Document
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" class="btn btn-success" onClick={() => handleApprove('ppt_status')} disabled={approvePpt ==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('ppt_status')} disabled={approvePpt ==='reject' ? true : false}>
                  Reject
                </button>
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

export default AReview1