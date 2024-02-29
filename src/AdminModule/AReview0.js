import React, { useEffect, useState } from 'react';
import '../StaffModule/Review0.css';
import './AdminBody.css';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

function AReview0() {
  const ID = useOutletContext();
  const [approveTitle, setApproveTitle] = useState('')
  const [approveAbstract, setApproveAbstract] = useState('');
  const [approveBasepaper, setApproveBasepaper] = useState('');
  const [approvePPT, setApprovePPT] = useState('');
  const [approveAll, setApproveAll] = useState('');
  const [allrowsApproved, setAllrowsApproved] = useState(false);
  const [fileData, setFileData] = useState([]);
  const [initialAxiosPreventer, setInitialAxiosPreventer] = useState(true);

  useEffect(() => {
    const data = {
      id: ID,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_0_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
      setApproveTitle(response.data.title_status ? 'approve' : 'reject')
      setApproveAbstract(response.data.abstract_status ? 'approve' : 'reject')
      setApproveBasepaper(response.data.base_paper_status ? 'approve' : 'reject')
      setApprovePPT(response.data.ppt_status ? 'approve' : 'reject')
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  useEffect(() => {
    const data = {
      'id': ID,
      'title_status' : approveTitle,
      'abstract_status' : approveAbstract,
      'basepaper_status' : approveBasepaper,
      'ppt_status' : approvePPT,
      'all_status' : fileData.guide_status ? 'approve' : 'reject',
      'hod_status': approveAll,
    }
    console.log(data)
    if(initialAxiosPreventer){

    }
    else{
      axios.post( 'http://127.0.0.1:8000/reviewupload/status/',data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    }
    
  }, [approveTitle, approveAbstract, approveBasepaper, approvePPT, approveAll,initialAxiosPreventer])

  const handleApprove = (status) => {
    if (status === 'title_status'){
      setApproveTitle('approve')
      setInitialAxiosPreventer(false);
    }
    else if (status === 'abstract_status'){
      setApproveAbstract('approve')
      setInitialAxiosPreventer(false);
    }
    else if (status === 'basepaper_status'){
      setApproveBasepaper('approve')
      setInitialAxiosPreventer(false);
    }
    else if(status === 'ppt_status'){
      setApprovePPT('approve')
      setInitialAxiosPreventer(false);
    }
  } 
  
  const handleReject = (status) => {
    if (status === 'title_status'){
      setApproveTitle('reject')
      setInitialAxiosPreventer(false);
    }
    else if (status === 'abstract_status'){
      setApproveAbstract('reject')
      setInitialAxiosPreventer(false);
    }
    else if (status === 'basepaper_status'){
      setApproveBasepaper('reject')
      setInitialAxiosPreventer(false);
    }
    else if(status === 'ppt_status'){
      setApprovePPT('reject')
      setInitialAxiosPreventer(false);
    }
  }

  useEffect(() => {
    if (approveTitle === 'approve' && approveAbstract === 'approve' && approveBasepaper === 'approve' && approvePPT === 'approve') {
      setAllrowsApproved(true);
    } else {
      setAllrowsApproved(false);
    }
  }, [approveTitle, approveAbstract, approveBasepaper, approvePPT]);

  const handleForward = (e) => {
    e.preventDefault();
    setApproveAll('approve');
    setInitialAxiosPreventer(false);
  }


  return (
    <div>
      {fileData.guide_status ? <div class="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th className="col-3">TASKS</th>
              <th className="table-column">ACTION</th>
              <th className="col-3">STATUS</th>
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
              <button type="button" className="btn btn-success" onClick={() => handleApprove('title_status')} disabled={approveTitle==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('title_status')} disabled={approveTitle==='reject' ? true : false}>
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
              <button type="button" className="btn btn-success" onClick={() => handleApprove('abstract_status')} disabled={approveAbstract==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('abstract_status')} disabled={approveAbstract==='reject' ? true : false}>
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
              <button type="button" className="btn btn-success" onClick={() => handleApprove('basepaper_status')} disabled={approveBasepaper==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('basepaper_status')} disabled={approveBasepaper==='reject' ? true : false}>
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
              <button type="button" className="btn btn-success" onClick={() => handleApprove('ppt_status')} disabled={approvePPT==='approve' ? true : false}>
                  Approve
                </button>
                <button type="button" className="negative btn btn-danger ml-2" onClick={() => handleReject('ppt_status')} disabled={approvePPT==='reject' ? true : false}>
                  Reject
                </button>
              </td>
            </tr>
            {allrowsApproved && (
              <tr>
              <td colSpan="2"></td>
              <td>
                <button type="submit" className="btn btn-success" style={{ width: "100%" }} onClick={handleForward}> 
                  Permitted
                </button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
        <div id="reviewSchedule" style={{ display: "none" }}></div>
      </div> : <h1>Not Yet Approved By Guide</h1>}
      

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}

export default AReview0