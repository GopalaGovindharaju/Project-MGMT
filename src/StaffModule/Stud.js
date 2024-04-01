import React, { useEffect, useState } from 'react';
import './Stud.css'; // Import a separate CSS file for styling
import axios from 'axios';

function Stud({ID}) {

 const [students ,setstudent]=useState([])


  useEffect(() => {
    const data = {
      id: ID,
    }
    axios.post('http://localhost:8000/addStudent/fetchingstudname/',data)
    .then((response) => {
      console.log(response.data)
      setstudent(response.data)
    
    })
    .catch((error) => {
      console.log(error)
    })
}, []);
  return (
    <div className="full-width">
      <h2>Student Details</h2>
      <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Register Number</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.ID}</td>
              <td>{student.Name}</td>
              <td>{student.Department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Stud;
