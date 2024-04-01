import React, { useEffect, useState } from 'react'
import '../StudentModule/Navb.css'
import './AdminBody.css'
import axios from 'axios';

function AdminBodyLeft({ID})
 {
  const [staff ,setStaff]=useState([])
  const [students ,setstudent]=useState([])




  useEffect(() => {
    const data = {
      id: ID,
    }
    axios.post('http://127.0.0.1:8000/addGuide/fetchingguidename/',data)
    .then((response) => {
      console.log(response.data)
      setStaff(response.data.guide_info)
      setstudent(response.data.student_info)
    })
    .catch((error) => {
      console.log(error)
    })
}, []);
  return (
    <div className="admin-body-left">
      <div className="guide-detail">
        <nav>
          <div className="navbar-options">
            <div id="navbar-option">Guide Details</div>
          </div>
        </nav>
        <div className="guide-info">
        <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((staff, index) => (
            <tr key={index}>
              <td>{staff.ID}</td>
              <td>{staff.Name}</td>
              <td>{staff.Designation}</td>
              <td>{staff.Department}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
      <div className="student-detail">
        <nav>
          <div className="navbar-options">
            <div id="navbar-option">Students Detail</div>
          </div>
        </nav>
        <div className="student-info">
            		  
        <table className="table">
  <tbody>
    {staff.map((staff, index) => (
      <tr key={index} >
        <tr>
          <th scope="row" className="col-2">Department</th>
          <td style={{ marginLeft: '0%' }}>{staff.Department}</td>
        </tr>
     
      </tr>
    ))}
  </tbody>
</table>
          <table class="table">
          <table className="custom-table">
        <thead>
          <tr>
            <th>Register Number</th>
            <th>Name</th>
            
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.ID}</td>
              <td>{student.Name}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
            
 
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminBodyLeft
