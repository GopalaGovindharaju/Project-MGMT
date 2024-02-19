import React, { useState } from 'react';
import Banner from '../StudentModule/Banner'
import { Link } from 'react-router-dom';

function PanelMember({handleLogout}) 
  {
    // State to hold the selected marks and remarks for each person
    const [marks, setMarks] = useState({
      'Abishake D': '',
      'Chitra Lakshmi SR': '',
      'Gopala G': ''
    });
    const [remarks, setRemarks] = useState({
      'Abishake D': '',
      'Chitra Lakshmi SR': '',
      'Gopala G': ''
    });
    const [error, setError] = useState('');
  
    // Function to handle changes in the dropdown for each person
    const handleMarksChange = (person, event) => {
      const newMarks = parseInt(event.target.value); // Convert value to integer
      if (newMarks >= 0 && newMarks <= 100) { // Validate the selected value
        setMarks(prevMarks => ({
          ...prevMarks,
          [person]: newMarks
        }));
      } else {
        alert('Please select a mark between 0 and 100');
      }
    };
  
    // Function to handle changes in the remarks input for each person
    const handleRemarksChange = (person, event) => {
      const newRemarks = event.target.value;
      setRemarks(prevRemarks => ({
        ...prevRemarks,
        [person]: newRemarks
      }));
    };
  
    // Function to handle the submit button click
    const handleSubmit = () => {
      // Check if remarks are entered for each student
      const remarksEntered = Object.values(remarks).every(remark => remark.trim() !== '');
      const marksEntered = Object.values(marks).every(mark => !isNaN(mark) && mark !== '');
  
      if (!remarksEntered || !marksEntered) {
        setError('Please enter remarks and marks for all students.');
        return;
      }
  
      // Here you can perform any submission logic, for now, let's just display an alert
      alert('Successfully saved!');
      setError('');
    };
  
  return (
    <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
    <div>
      <Banner batchNo={"Meena"} moduleName={"Panel Member"}/>
      <div>
            <nav>
              <div className="navbar-options">
                <Link to='Review0' id='navbar-option'>Review 0</Link>
                <Link to='Review1' id='navbar-option'>Review 1</Link>
                <Link to='Review2' id='navbar-option'>Review 2</Link>
                <Link to='Review3' id='navbar-option'>Review 3</Link>
              </div>
            </nav>
          </div>
          <div className="table-container" style={{padding:'10px 10px 10px 30px'}}>
            <h2 className="table-name" style={{ marginBottom: '1em' , marginTop: '1em'}}>Glamazon</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Student Name</th>
                  <th scope="col">Student Register Number</th>
                  <th scope="col">Remarks For The Student</th>
                  <th scope="col">Marks For The Student</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(marks).map(person => (
                  <tr key={person}>
                    <td>{person}</td>
                    <td>AC20UCS003</td>
                    <td className='col-5'>
                      <textarea
                        value={remarks[person]}
                        onChange={(e) => handleRemarksChange(person, e)}
                        style={{ resize: 'vertical', width: '100%', minHeight: '50px', border: 'none' }}
                      />
                    </td>
                    <td>
                      <select value={marks[person]} onChange={(e) => handleMarksChange(person, e)}>
                        <option value="">Select Marks</option>
                        {[...Array(101).keys()].map(mark => (
                          <option key={mark} value={mark}>{mark}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {error && <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</div>}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            </div>
    </div>
    </div>
    </div>
  )
}

export default PanelMember