import React, { useEffect, useState } from 'react';
import './Review0.css';
import axios from 'axios';

function Review0() {

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
                <input type="text" value={fileData.title} className="form-control reduced-size" readOnly={true} />
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
                <a href={fileData.abstract_url} target="_blank" rel="noopener noreferrer">Click here to view Abstract</a>
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
                <a href={fileData.base_paper_url} target="_blank" rel="noopener noreferrer">Click here to view Base Paper Document</a>
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
                <a href={fileData.ppt_url} target="_blank" rel="noopener noreferrer">Click here to view PPT</a>
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
