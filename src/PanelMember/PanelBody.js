import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';

function PanelBody() {

  const id = useOutletContext();
  const [batchNo, setBatchNo] = useState('');
  const [listOfBatches, setListOfBatches] = useState([]);

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
    const newMarks = parseInt(event.target.value, 10); // Convert value to integer
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

  useEffect(() => {
    const data = {
      'id' : id,
    }
    axios.post('http://127.0.0.1:8000/panel/get_batches/', data)
    .then((response) => {
      console.log(response.data);
      setListOfBatches(response.data);

    })
    .catch((error) => {
      console.log(error.data);
    })
  },[])

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

  const handleBatchSelect = (e) => {
    setBatchNo(e.target.value)
  }
  return (
    <div className="table-container" style={{ padding: '10px 10px 10px 30px' }}>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div className='text-select-batchno'>
        <h6 style={{marginTop:'10px', marginRight:'10px'}}>SELECT BATCH-NO</h6>
      </div>
      <div className='select-batchno'>
        <select
        value={batchNo}
        onChange={handleBatchSelect}
        className="form-select"
        >
          {listOfBatches.map((batch) => (
            <option key={batch.ID} value={batch.Batch}>{batch.Batch}</option>
          ))}            
        </select>
      </div>
      
    </div>
    <h2 className="table-name" style={{ marginBottom: '1em', marginTop: '1em' }}>Review 0</h2>
    <table className="table">
      <thead style={{textAlign:'center'}}>
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Student Register Number</th>
          <th scope="col">Remarks For The Student</th>
          <th scope="col">Marks For The Student</th>
        </tr>
      </thead>
      <tbody>
        {listOfBatches.map(person => (
          <tr key={person.ID}>
            <td>{person.Name}</td>
            <td>{person.ID}</td>
            <td className='col-5'>
              <textarea
               // value={remarks[person]}
                //onChange={(e) => handleRemarksChange(person, e)}
                style={{ resize: 'vertical', width: '100%', minHeight: '50px'}}
              />
            </td>
            <td>
              
              <input
                type="number"
                min="0"
                max="100"
                //value={marks[person]}
                //onChange={(e) => handleMarksChange(person, e)}
                className="form-control mt-1"
                style={{ width: '80px', display: 'inline-block' }}
              />
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
  )
}

export default PanelBody
