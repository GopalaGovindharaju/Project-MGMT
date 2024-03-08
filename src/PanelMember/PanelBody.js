import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';

function PanelBody() {

  const id = useOutletContext();
  const [batchNo, setBatchNo] = useState('');
  const [listOfBatches, setListOfBatches] = useState([]);
  const [marks, setMarks] = useState({});
  const [remarks, setRemarks] = useState({});
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));


  useEffect(() => {
    const data = {
      'id' : id,
      'reviewNo': '0'
    }
    axios.post('http://127.0.0.1:8000/panel/get_batches/', data)
    .then((response) => {
      console.log(response.data);
      setListOfBatches(response.data.data);

    })
    .catch((error) => {
      console.log(error.data);
    })
  },[])

  const handleSubmit = () => {
    const dataToSubmit = filteredStudents.map(person => ({
      'id': person.ID,
      'marks': marks[person.ID],
      'remarks': remarks[person.ID],
      'name': person.Name,
      'batch': person.Batch,
      'year': person.Year,
      'panelmember_id': userInfo.ID,
      'reviewNo': '0',
    }));
    console.log(dataToSubmit);
    axios.post('http://127.0.0.1:8000/panel/updateMarks/', dataToSubmit)
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  };
  const handleRemarksChange = (person, e) => {
    setRemarks({
      ...remarks,
      [person.ID]: e.target.value,
    });
  };
  const handleMarksChange = (person, e) => {
    setMarks({
      ...marks,
      [person.ID]: e.target.value,
    });
  };

  const handleBatchSelect = (e) => {
    setBatchNo(e.target.value)
  }

  const filteredStudents = listOfBatches.filter(person => person.Batch === batchNo);
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
          <option value='' defaultValue>Choose Batch</option>
          {[...new Set(listOfBatches.map(batch => batch.Batch))].map((uniqueBatch, index) => (
  <option key={index} value={uniqueBatch}>{uniqueBatch}</option>
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
      <tbody style={{textAlign:'center'}}>
        {filteredStudents.map(person => (
          <tr key={person.ID}>
            <td>{person.Name}</td>
            <td>{person.ID}</td>
            <td className='col-5'>
              <textarea
               value={remarks[person]}
              onChange={(e) => handleRemarksChange(person, e)}
                style={{ resize: 'vertical', width: '100%', minHeight: '50px'}}
              />
            </td>
            <td>
              
              <input
                type="number"
                min="0"
                max="100"
                value={marks[person]}
                onChange={(e) => handleMarksChange(person, e)}
                className="form-control mt-1"
                style={{ width: '80px', display: 'inline-block' }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
    </div>
  </div>
  )
}

export default PanelBody
