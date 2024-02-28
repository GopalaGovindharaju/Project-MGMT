import React, { useState } from 'react';
import './StaffStudentAdd.css'
import axios from 'axios';


function StaffStudentAdd({setIsOpen}) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentBatch, setStudentBatch] = useState('');
  const [studentYear, setStudentYear] = useState('');
  

  const handleId = (e) => {
    setStudentId(e.target.value);
  }
  const handleName = (e) => {
    setStudentName(e.target.value);
  }
  const handleBatch = (e) => {
    setStudentBatch(e.target.value);
  }
  const handleYear = (e) => {
    setStudentYear(e.target.value);
  }
  const handleCancel=()=>{
    setIsOpen(false)
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      id: studentId,
      name: studentName,
      batch: studentBatch,
      year: studentYear,
      department: userInfo.department,
      guide_id: userInfo.ID,
    };
    axios.post('http://localhost:8000/addStudent/', data)
      .then((response) => {
        console.log("you are added");
        console.log(response);
        alert('you are added successfully')
        setIsOpen(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    
      <div className=" covering" style={{position: 'relative '}}>
      <div className="cancel-buttonn" onClick={handleCancel}>X</div>

        <center><h3 className="headings">Student Addition</h3></center>
        <form className="contain">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="labelss" htmlFor="id">ID:</label>
                <input type="text" className="form-control input-tex" value={studentId} onChange={handleId} id="id" name="id" placeholder="Enter your ID" required />
              </div>

              <div className="form-group">
                <label className="labelss" htmlFor="name">Name:</label>
                <input type="text" className="form-control input-tex" value={studentName} onChange={handleName} id="name" name="name" placeholder="Enter your name" required/>
              </div>

              <div className="form-group">
                <label className="labelss" htmlFor="batchYear">Batch Year:</label>
                <input type="text" className="form-control input-tex" value={studentBatch} onChange={handleBatch} id="batchYear" name="batchYear" placeholder="Enter your batch year" required />
              </div>

              <div className="form-group">
                <label className="labelss" htmlFor="Year">Academic Year:</label>
                <input type="text" className="form-control input-tex" value={studentYear} onChange={handleYear} id="Year" name="Year" placeholder="Enter your year" required/>
              </div>
            </div>

            <div className="col-md-6">
              {/* Additional fields can be added here */}
            </div>
          </div>

          <button type="button" className="btn btn-secondary btn-lg submit-button " id='buttonn' onClick={handleUpdate} style={{ width: '30%' }}>Update Student</button>
        </form>
      </div>
   
  );
}

export default StaffStudentAdd;
