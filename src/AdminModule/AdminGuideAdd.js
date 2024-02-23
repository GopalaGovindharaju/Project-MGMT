import React, { useState } from 'react'
import './AdminBody.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function AdminGuideAdd() {
  const [gId, setGId ] = useState('');
  const [gName, setGName] = useState('');
  const [gDesignation, setGDesignation] = useState('');
  const [gPanelmember, setgPanelmember] = useState(false);

  const handleGId = (event) => {
    setGId(event.target.value)
  }
  const handleGName = (event) => {
    setGName(event.target.value)
  }
  const handleGDesignation = (event) => {
    setGDesignation(event.target.value)
  }
  const handlePannelMember = () => {
    setgPanelmember(!gPanelmember)
  } 
  

  const handleAddGuide = (e) => {
    e.preventDefault();
    const data = {
      id: gId,
      name: gName,
      designation: gDesignation,
      department: "CSE",
      panelmember: gPanelmember
    }
    axios.post('', data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    
  }

  return (
    <div>
      <div className='guide-head'>
        <div className='guide-title'><h4>Add Guide</h4></div>
        <div className='close-btn'><FontAwesomeIcon icon={faClose}/></div>
      </div>
      <div className='guide-add-form'>
        <div className='g-field'>
          <label>Guide-ID</label>
          <div className='guide-inp'>
            <input type='text' value={gId} onChange={handleGId} placeholder='Guide-ID'/>
          </div>
        </div>
        
        <div className='guide-inp'>
          <input type='text' value={gName} onChange={handleGName} placeholder='Guide-Name'/>
        </div>
        <div className='guide-inp'>
          <input type='text' value={gDesignation} onChange={handleGDesignation} placeholder='Guide-Designation'/>
        </div>

        <div class="form-check">
          <label class="form-check-label" for="flexCheckDefault">
            Pannel Member
          </label>
          <input class="form-check-input" type="checkbox" value={gPanelmember} onChange={handlePannelMember} id="flexCheckDefault"/>
        </div>
      </div>

      <div>
        <button className='btn btn-success' onClick={handleAddGuide} type='submit'>Add Guide</button>
      </div>
    </div>
  )
}

export default AdminGuideAdd
