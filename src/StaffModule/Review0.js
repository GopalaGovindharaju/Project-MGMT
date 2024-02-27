import React, { useEffect, useState } from 'react';
import './Review0.css';
import axios from 'axios';

function Review0() {
  const [approveTitle, setApproveTitle] = useState('reject')
  const [approveAbstract, setApproveAbstract] = useState('reject');
  const [approveBasepaper, setApproveBasepaper] = useState('reject');
  const [approvePPT, setApprovePPT] = useState('reject');
  const [allrowsApproved, setAllrowsApproved] = useState(false);
  const [fileData, setFileData] = useState([]);

  useEffect(() => {
    const data = {
      id: 3,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_0_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  const handleApprove = (status) => {
    if (status === 'title_status'){
      setApproveTitle('approve')
    }
    else if (status === 'abstract_status'){
      setApproveAbstract('approve')
    }
    else if (status === 'basepaper_status'){
      setApproveBasepaper('approve')
    }
    else if(status === 'ppt_status'){
      setApprovePPT('approve')
    }

    const data = {
      'id':3,
      'title_status' : approveTitle,
      'abstract_status' : approveAbstract,
      'basepaper_status' : approveBasepaper,
      'ppt_status' : approvePPT,
    }
    axios.post( 'http://127.0.0.1:8000/reviewupload/status/',data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  } 
  
  const handleReject = (status) => {
    if (status === 'title_status'){
      setApproveTitle('reject')
    }
    else if (status === 'abstract_status'){
      setApproveAbstract('reject')
    }
    else if (status === 'basepaper_status'){
      setApproveBasepaper('reject')
    }
    else if(status === 'ppt_status'){
      setApprovePPT('reject')
    }
  }

  useEffect(() => {
    if (approveTitle === 'approve' && approveAbstract === 'approve' && approveBasepaper === 'approve' && approvePPT === 'approve') {
      setAllrowsApproved(true);
    } else {
      setAllrowsApproved(false);
    }
  }, [approveTitle, approveAbstract, approveBasepaper, approvePPT]);

  
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
              {fileData.title ? (
                  <input
                    type="text"
                    value={fileData.title}
                    className="form-control reduced-size"
                    readOnly={true}
                  />
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" className="btn btn-success" onClick={() => handleApprove('title_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('title_status')}>
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Abstract Document Verification</td>
              <td>
              {fileData.abstract_url ? (
                  <a
                    href={fileData.abstract_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Abstract
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" className="btn btn-success" onClick={() => handleApprove('abstract_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('abstract_status')} >
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Base Paper Document Verification</td>
              <td>
              {fileData.base_paper_url ? (
                  <a
                    href={fileData.base_paper_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Base Paper Document
                  </a>
                ) : (
                  <td>Yet To Be Upload</td>
                )}
              </td>
              <td>
                <button type="button" className="btn btn-success" onClick={() => handleApprove('basepaper_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('basepaper_status')} >
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
                <button type="button" className="btn btn-success" onClick={() => handleApprove('ppt_status')}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('ppt_status')}>
                  Reject
                </button>
              </td>
            </tr>
            {allrowsApproved && (
              <tr>
              <td colSpan="2"></td>
              <td>
                <button type="submit" className="btn btn-success" style={{ width: "100%" }}> 
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

export default Review0;
