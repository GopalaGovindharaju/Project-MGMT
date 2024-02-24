import React from 'react';
import './Stud.css'; // Import a separate CSS file for styling

function Stud() {
  const students = [
    { registerNumber: '001', name: 'Gopi', grade: 'A' },
    { registerNumber: '002', name: 'Chinta Thomas', grade: 'B' },
    { registerNumber: '003', name: 'Gopala', grade: 'C' },
    { registerNumber: '004', name: 'Chitra', grade: 'D' }
    // Add more student details as needed
  ];

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
              <td>{student.registerNumber}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Stud;
