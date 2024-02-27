import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StaffReview1() {
  const [approveSysArchitecture, setApproveSysArchitecture] = useState('reject');
  const [approveModTypes, setApproveModTypes] = useState('reject');;
  const [approveModTech, setApproveModTech] = useState('reject');;
  const [approveLiteratureSurvey, setApproveLiteratureSurvey] = useState('reject');;
  const [approveOutcome, setApproveOutcome] = useState('reject');;
  const [approvePpt, setApprovePpt] = useState('reject');
  const [allrowsApproved,setAllrowsApproved] = useState(false);
  const [fileData, setFileData] = useState([]);

  useEffect(() => {
    const data = {
      id: 3,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_1_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  const handleApprove = (status) => {
    if (status === 'sysarchitecture_status'){
      setApproveSysArchitecture('approve');
    }
    else if (status === 'moduletypes_status'){
      setApproveModTypes('approve');
    }
    else if (status === 'moduletech_status'){
      setApproveModTech('approve');
    }
    else if (status === 'literature_status'){
      setApproveLiteratureSurvey('approve');
    }
    else if (status === 'outcome_status'){
      setApproveOutcome('approve')
    }
    else if (status === 'ppt_status'){
      setApprovePpt('approve')
    }

    const data = {
      'id':3,
      'sysarchitecture_status' : approveSysArchitecture,
      'moduletypes_status' : approveModTypes,
      'moduletech_status' : approveModTech,
      'literature_status' : approveLiteratureSurvey,
      'outcome_status' : approveOutcome,
      'ppt_status' : approvePpt,
    }
    axios.post('http://127.0.0.1:8000/reviewupload/status1/' ,data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const handleReject = (status) => {
    if (status === 'sysarchitecture_status'){
      setApproveSysArchitecture('Reject');
    }
    else if (status === 'moduletypes_status'){
      setApproveModTypes('Reject');
    }
    else if (status === 'moduletech_status'){
      setApproveModTech('Reject');
    }
    else if (status === 'literature_status'){
      setApproveLiteratureSurvey('Reject');
    }
    else if (status === 'outcome_status'){
      setApproveOutcome('Reject')
    }
    else if (status === 'ppt_status'){
      setApprovePpt('Reject')
    }
  }

  useEffect( () => {
    if (approveSysArchitecture === 'approve' && approveModTypes === 'approve' && approveModTech === 'approve' && approveLiteratureSurvey === 'approve' && approveOutcome === 'approve' && approvePpt === 'approve'){
      setAllrowsApproved(true);
    }else{
      setAllrowsApproved(false);
    }
  },[approveSysArchitecture, approveModTypes, approveModTech, approveLiteratureSurvey, approveOutcome, approvePpt]);
  
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('sysarchitecture_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('sysarchitecture_status')}>
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('moduletypes_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('moduletypes_status')}>
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('moduletech_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('moduletech_status')} >
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('literature_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('literature_status')}>
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
                <button type="button" class="btn btn-success" onClick={() => handleApprove('outcome_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('outcome_status')}>
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

export default StaffReview1