import React, { useState } from 'react'
import './AdminBody.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function AdminGuideAdd({setIsOpen}) {
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
  
  const handleCloseBtn = () => {
    setIsOpen(false);
  }

  const handleAddGuide = (e) => {
    e.preventDefault();   
    if (gId === '' || gName === '' || gDesignation === ''){
      let errormsg = '';
      if (gId === ''){
        errormsg += 'Please enter Guide ID!.\n';
      }
      if (gName === ''){
        errormsg += 'Please enter Guide Name!.\n';
      }
      if (gDesignation === ''){
        errormsg += 'Please enter Guide Designation!.\n';
      }
      alert(errormsg);
    }
    else{
      setIsOpen(false);
    const data = {
      id: gId,
      name: gName,
      designation: gDesignation,
      department: "CSE",
      panelmember: gPanelmember
    }
    axios.post('http://127.0.0.1:8000/addGuide/', data)
    .then((response) => {
      console.log(response.data);
      alert('Guide Added Successfully!');
    })
    .catch((error) => {
      console.log(error);
      alert('Error occurred!');
    })  
    }   
  }

  return (
    <div>
      <div className='guide-head'>
        <div className='guide-title'><h4>Add Guide</h4></div>
        <div className='close-btn'><FontAwesomeIcon onClick={handleCloseBtn} required icon={faClose}/></div>
      </div>
      <div className='guide-add-form'>
        <div className='g-field'>
          <div className='guide-inp'>
          <label className='label-field'>Guide-ID</label>
            <input type='text' className='inp-field' value={gId} onChange={handleGId} placeholder='Guide-ID'/>
          </div>
        </div>
        
        <div className='g-field'>
          <div className='guide-inp'>
            <label className='label-field'>Guide-Name</label>
            <input type='text' className='inp-field' value={gName} onChange={handleGName} placeholder='Guide-Name'/>
          </div>
        </div>

        <div className='g-field'>
          <div className='guide-inp'>
            <label className='label-field'>Guide-Designation</label>
            <input type='text' className='inp-field' value={gDesignation} onChange={handleGDesignation} placeholder='Guide-Designation'/>
          </div>
        </div>
        
        <div className='g-field'>
          <div className='guide-inp'>
          <label class="form-check-label label-field">
            Pannel Member
          </label>
          <input class="form-check-input inp-field" type="checkbox" value={gPanelmember} onChange={handlePannelMember} id="flexCheckDefault"/>
          </div>
        </div>
      
      </div>

      <div>
        <button className='addguide-btn' onClick={handleAddGuide} type='submit'>Add Guide</button>
      </div>
    </div>
  )
}

export default AdminGuideAdd
