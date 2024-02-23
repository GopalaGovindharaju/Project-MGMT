import React, { useState } from 'react';
import './StaffStudentAdd.css'
import axios from 'axios';
function StaffStudentAdd() {
    const[studentId,setStudentId]=useState('')
    const[studentName,setStudentName]=useState('')
    const[studentBatch,setStudentBatch]=useState('')
    const[studentYear,setStudentYear]=useState('')


const handleId=(e)=>{
    setStudentId(e.target.value)
}
const handleName=(e)=>{
    setStudentName(e.target.value)
}
const handleBatch=(e)=>{
    setStudentBatch(e.target.value)
}
const handleYear=(e)=>{
    setStudentYear(e.target.value)
}
const handleUpdate=(e)=>{
   e.preventDefault();
   const data = {
        id:studentId,
        name:studentName,
        batch:studentBatch,
        year:studentYear,
        department:'cse',
        guide_id:'002'
   }
   axios.post('http://localhost:8000/addStudent/',data)
   .then((response)=>{
        console.log("you are added")
        console.log(response)   }
   )
   .catch((error) => {
    console.log(error)
  })
}
  return (
    <div>
    <div class="container">
        <center><h3>Student Addition</h3></center>
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="id">ID:</label>
            <input type="text" class="form-control" value={studentId}  onChange={handleId} id="id" name="id" placeholder="Enter your ID"/>
          </div>

          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" value={studentName} onChange={handleName}id="name" name="name" placeholder="Enter your name"/>
          </div>

          <div class="form-group">
            <label for="batchYear">Batch Year:</label>
            <input type="text" class="form-control" value={studentBatch} onChange={handleBatch}id="batchYear" name="batchYear" placeholder="Enter your batch year"/>
          </div>

          <div class="form-group">
            <label for="Year">Academic Year:</label>
            <input type="text" class="form-control" value={studentYear} onChange={handleYear}id="Year" name="Year" placeholder="Enter your  year"/>
          </div>
        </div>


        <div class="col-md-6">
            
        </div>
      </div>

      <button type="button" class="btn btn-secondary btn-lg" onClick={handleUpdate} style={{width:'30%'}}>Update Student</button>
    </form>
  </div>
    </div>
  );
}

export default StaffStudentAdd;
