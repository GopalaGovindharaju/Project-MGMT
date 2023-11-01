import React, { useEffect, useState } from 'react'
import './main.css'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Main() {
    const navigate = useNavigate();
    const isauthorized = localStorage.getItem("isauthorized");
    const [progress, setProgress] = useState(0);
    const [projectData, setProjectData] = useState([]);
    const location = useLocation();
    const leadRegNo = new URLSearchParams(location.search).get('leadRegNo');
    const [memberName, setMemberName] = useState('');
  const [memberRegNo, setMemberRegNo] = useState('');
    const [teamList, setTeamList] = useState([])
    const [leadName, setLeadName] = useState('')
    const [isAddingMember, setIsAddingMember] = useState(false);
    const [checkedRowCount, setCheckedRowCount] = useState(0);
    const [perLedRegno, setPerLeadRegNo] = useState('');
    const [lastRowNumber, setLastRowNumber] = useState(0);
    const [permanentLeadRegNo, setpermenentLeadRegNo] = useState('')

    const [tableData, setTableData] = useState([
      // Add more rows as needed
    ]);
    const [newRow, setNewRow] = useState({ date: '', workCompleted: '', workToBeCompleted: '' });
    const [addingNewRow, setAddingNewRow] = useState(false);

    useEffect(() => {
      let selectedLeadRegNo = leadRegNo;
        console.log(selectedLeadRegNo)

        if (selectedLeadRegNo === null || selectedLeadRegNo === undefined) {
          const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
          const userIdFromLocalStorage = storedUserInfo.User_Id
          console.log(userIdFromLocalStorage);
          if (userIdFromLocalStorage) {
            // Use User_Id from local storage if it exists
            selectedLeadRegNo = userIdFromLocalStorage;
          }
        }
        console.log('value',selectedLeadRegNo);
        setpermenentLeadRegNo(selectedLeadRegNo)
    },[]);
  
    const handleAddRow = () => {
      setAddingNewRow(true);
    };
  
    const handleSaveNewRow = () => {
      // Check if all fields in the new row are filled
      if (newRow.date === '' || newRow.workCompleted === '' || newRow.workToBeCompleted === '') {
        alert("Please fill in all fields before saving.");
        return;
      }
      let selectedLeadRegNo = leadRegNo;
        console.log(selectedLeadRegNo)

        if (selectedLeadRegNo === null || selectedLeadRegNo === undefined) {
          const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
          const userIdFromLocalStorage = storedUserInfo.User_Id
          console.log(userIdFromLocalStorage);
          if (userIdFromLocalStorage) {
            // Use User_Id from local storage if it exists
            selectedLeadRegNo = userIdFromLocalStorage;
          }
        }
        console.log('value',selectedLeadRegNo);
        setPerLeadRegNo(selectedLeadRegNo)
    
      // Create an object with the new row data
      const nextSerialNumber = tableData.length + 1;
      const newRowData = {
        Row_No: nextSerialNumber, 
        LeadReg_No: selectedLeadRegNo,
        Staff_Incharge: projectData.Project_Guide,
        Date_Of_Meeting: newRow.date,
        Work_Completed: newRow.workCompleted,
        Work_To_Be_Completed: newRow.workToBeCompleted,
      };
    console.log(newRowData)
    console.log("above is for checking")
      // Perform the Axios POST request to send data to the backend
      axios
        .post('http://localhost:8000/projectstatus/addnewrow/', newRowData)
        .then((response) => {
          console.log('New row added successfully:', response.data);
          setLastRowNumber(lastRowNumber+1)
          console.log("updatedRow")
          console.log(lastRowNumber+1)
    
          // Assuming the backend returns the updated data, update the tableData state
          setTableData((prevData) => [...prevData, { ...newRowData, id: prevData.length + 1 }]);
    
          // Reset the newRow state
          setNewRow({ date: '', workCompleted: '', workToBeCompleted: '' });
    
          // Close the new row input section
          setAddingNewRow(false);
        })
        .catch((error) => {
          console.error('Error adding new row:', error);
        });
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewRow({ ...newRow, [name]: value });
    };
  
    useEffect(() => {
      // Call the function to fetch table data when the component mounts or when leadRegNo changes
      let selectedLeadRegNo = leadRegNo;
        console.log(selectedLeadRegNo)

        if (selectedLeadRegNo === null || selectedLeadRegNo === undefined) {
          const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
          const userIdFromLocalStorage = storedUserInfo.User_Id
          console.log(userIdFromLocalStorage);
          if (userIdFromLocalStorage) {
            // Use User_Id from local storage if it exists
            selectedLeadRegNo = userIdFromLocalStorage;
          }
        }
        console.log('value',selectedLeadRegNo);
        setPerLeadRegNo(selectedLeadRegNo)
      
        // Now, you have the selected value for leadRegNo
        const data = {
          Lead_Regno : selectedLeadRegNo,
        };
  
      axios.post('http://localhost:8000/projectstatus/get/', data)
        .then((response) => {
          setTableData(response.data);
          console.log(response.data)
          setLastRowNumber(response.data.length);
          setCheckedRowCount(response.data.filter(row => row.Review).length);
          console.log(response.data.filter(row => row.Review).length)
          console.log(response.data.length)
          console.log("project status") // Assuming the response contains an array of table data
        })
        .catch((error) => {
          console.error('Error fetching table data:', error);
        });
    }, [leadRegNo]);

    const handleLogout = (event) => {
        localStorage.setItem("isSigned", "false");
        localStorage.setItem("isauthorized", "");
        navigate("/");
      };

      useEffect(() => {
        let selectedLeadRegNo = leadRegNo;
        console.log(selectedLeadRegNo)

        if (selectedLeadRegNo === null || selectedLeadRegNo === undefined) {
          const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
          const userIdFromLocalStorage = storedUserInfo.User_Id
          console.log(userIdFromLocalStorage);
          if (userIdFromLocalStorage) {
            // Use User_Id from local storage if it exists
            selectedLeadRegNo = userIdFromLocalStorage;
          }
        }
        console.log('value',selectedLeadRegNo);
        setPerLeadRegNo(selectedLeadRegNo)
      
        // Now, you have the selected value for leadRegNo
        const data = {
          Lead_Regno : selectedLeadRegNo,
        };
        axios.post('http://localhost:8000/team/getlead/',data)
        .then(response => {
            setLeadName(response.data.Lead)
            console.log(response.data)
            console.log('above is new')
            const members = [
              response.data.Member1,
              response.data.Member2,
              response.data.Member3,
            ].filter(member => member !== '');
      
            // Set the filtered members to the teamList variable
            setTeamList(members);
        })
        .catch(error => {
          console.log('Error:',error)
        })
      },[leadRegNo])

      useEffect(() => {
        let selectedLeadRegNo = leadRegNo;
        console.log(selectedLeadRegNo)

        if (selectedLeadRegNo === null || selectedLeadRegNo === undefined) {
          const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
          const userIdFromLocalStorage = storedUserInfo.User_Id
          console.log(userIdFromLocalStorage);
          if (userIdFromLocalStorage) {
            // Use User_Id from local storage if it exists
            selectedLeadRegNo = userIdFromLocalStorage;
          }
        }
        console.log(selectedLeadRegNo);
        setPerLeadRegNo(selectedLeadRegNo)
      
        // Now, you have the selected value for leadRegNo
        const data = {
          lead_RegNo: selectedLeadRegNo,
        };
       axios.post('http://localhost:8000/allteams/student/', data)
  .then(response => {
    setProjectData(response.data);
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
      }, [leadRegNo]); 

      const handleMemberName = (e) => {
        setMemberName(e.target.value)
      }
      const handleMemberRegNo = (e) => {
        setMemberRegNo(e.target.value)
      }

      const closeMemberPopup = () => {
        setIsAddingMember(false);
      };

      const handleMemberSubmission = () => {
        let selectedLeadRegNo = leadRegNo;

        if (selectedLeadRegNo === null || selectedLeadRegNo === undefined) {
          const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
          const userIdFromLocalStorage = storedUserInfo.User_Id
          if (userIdFromLocalStorage) {
            // Use User_Id from local storage if it exists
            selectedLeadRegNo = userIdFromLocalStorage;
          }
        }
        setPerLeadRegNo(selectedLeadRegNo)
        // Perform axios request to add the new guide
        const data = {
          MemberName: memberName,
          MemberReg_No: memberRegNo,
          LeadRegNo : selectedLeadRegNo,
        }
        axios
          .post('http://localhost:8000/team/adds/', data)
          .then(response => {
            console.log(response.data)
            closeMemberPopup();
            const members = [
              response.data.Member1,
              response.data.Member2,
              response.data.Member3,
            ].filter(member => member !== '');
      
            // Set the filtered members to the teamList variable
            setTeamList(members);
            // You might want to fetch data again to update the projects list
          })
          .catch(error => {
            alert('Error adding member:', error);
            closeMemberPopup();
          });
      };


  const addTeamMember = (event) => {
    setIsAddingMember(true);
  };

  const handleReviewChange = (rowNo) => {
    // Update the review status for the corresponding row in the tableData state
    const updatedTableData = [...tableData];
    const updatedRow = updatedTableData.find((row) => row.Row_No === rowNo);
    let selectedLeadRegNo = leadRegNo;
        console.log(selectedLeadRegNo)

        if (selectedLeadRegNo === null || selectedLeadRegNo === undefined) {
          const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
          const userIdFromLocalStorage = storedUserInfo.User_Id
          console.log(userIdFromLocalStorage);
          if (userIdFromLocalStorage) {
            // Use User_Id from local storage if it exists
            selectedLeadRegNo = userIdFromLocalStorage;
          }
        }
        console.log('value',selectedLeadRegNo);
        setPerLeadRegNo(selectedLeadRegNo)
  
    if (updatedRow) {
      updatedRow.Review = !updatedRow.Review;
      setTableData(updatedTableData);
      const newCheckedRowCount = updatedRow.Review
          ? checkedRowCount + 1
          : checkedRowCount - 1;
  
        setCheckedRowCount(newCheckedRowCount);
  
      // Perform the Axios POST request to send the updated review status to the backend
      const reviewData = {
        lead_RegNo: selectedLeadRegNo,
        Row_No: rowNo,
        Review: updatedRow.Review,
      };
      console.log(reviewData)
  
      axios
        .post('http://localhost:8000/projectstatus/updatereview/', reviewData)
        .then((response) => {
          console.log('Review status updated successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error updating review status:', error);
        });
    }
  };


  useEffect(() => {
    // Calculate progress based on checkedRowCount and lastRowNumber
    const newProgress = lastRowNumber !== 0 ? (checkedRowCount / lastRowNumber) * 100 : 0;

    // Update the progress state
    setProgress(newProgress);

    const selectedLeadRegNo = permanentLeadRegNo;
    const data = {
      lead_RegNo: selectedLeadRegNo,
      Progress: newProgress,

    } // Assuming perLedRegno is the lead registration number

    // Perform the Axios POST request to send the updated progress value to the backend
    axios.post('http://localhost:8000/allteams/progress', data)
      .then((response) => {
        console.log('Progress value updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating progress value:', error);
      });
  }, [checkedRowCount, lastRowNumber, permanentLeadRegNo, setProgress]);

      
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-dark" id="navi">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-link">
                <label id='h4'>Student Profile</label>
              </li>
            </ul>
              <form class="d-flex">
                <button class="custom-btn btn-3" value="Log Out" onClick={handleLogout}><span>Log Out</span></button>
              </form>
          </div>
        </div>
      </nav>
      
      <div id='cen'>
        <h1><i><b>{projectData.Title}</b></i></h1>
      </div>
      <div className='row' id='cen2'>
        <div className='col'>
          <div className='row'>
            <div className='col d-flex flex-row-reverse'>
              <h5>Project Guide:</h5>
            </div>
            <div className='col d-flex flex-row'>
              <li id='i1'>{projectData.Project_Guide}</li>
            </div>
          </div>
        </div>
        <div class="container" className='col'>
        <input type="radio" class="radio" name="progress" value="twentyfive" id="twentyfive"/>
        <input type="radio" class="radio" name="progress" value="fifty" id="fifty"/>
        <input type="radio" class="radio" name="progress" value="seventyfive" id="seventyfive"/>
        <input type="radio" class="radio" name="progress" value="onehundred" id="onehundred"/>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" aria-valuemin="0" aria-valuemax="100" style={{ width: `${Math.round(progress)}%` }}>{Math.round(progress)}%</div>
          </div>
        </div>
        <div className='col'>
          <div className='row'>
        <div className='col d-flex flex-row-reverse'>
          <h5>Team Member:</h5>
        </div>
        <div className='col d-flex flex-row'>
          <ol>
            <li><label>{leadName}-{perLedRegno}</label>
            <button className="add-btn" title="New Member" value="New Menber" onClick={addTeamMember}>
      <img
          src={process.env.PUBLIC_URL + '/add.png'}
          alt="External Icon"
          width="22"
          height="22"
        />
      </button>
      {isAddingMember && (
        <div className="guide-popup">
          <div className="guide-popup-content">
            <h2>Add a New Team Member</h2>
            <form>
            <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" value={memberName} className="form-control" onChange={handleMemberName} id="inputPassword" placeholder="Name"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">RegNo</label>
    <div className="col-sm-10">
      <input type="text" value={memberRegNo} className="form-control" id="inputPassword" onChange={handleMemberRegNo} placeholder="RegNo"/>
    </div>
  </div>
  <button type="button" className="btn btn-primary" onClick={handleMemberSubmission}>Add</button>
<button type="button" className="btn btn-primary" onClick={closeMemberPopup}>Cancel</button>
</form>

          </div>
        </div>
      )}</li>
            {teamList.map((member, index) => (
      <li key={index}>
        {member}
      </li>
    ))}
          </ol>
        </div>
        </div></div>
      </div>
      
<div className='row'>
<div className='col d-flex flex-row '>
  <h5 id='ac' style={{paddingLeft:'103px'}}>Academic Year: 2020-2024</h5>
</div>
<div className='col' style={{paddingLeft:'193px'}}>
  <h5>Batch No: {projectData.Batch_No}</h5>
</div>

</div>
<div className='status-table'>
<table class="table" id="t1">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Date of Meeting</th>
      <th scope="col">Work Completed</th>
      <th scope="col">Work to be completed</th>
      <th scope="col">REVIEW</th>
    </tr>
  </thead>
  <tbody>
  {tableData.map((row, index) => (
  <tr key={row.Row_No}>
    <td>{index + 1}</td>
    <td>{row.Date_Of_Meeting}</td>
    <td>{row.Work_Completed}</td>
    <td>{row.Work_To_Be_Completed}</td>
    <td>
      <input
        type="checkbox"
        name={`review-${row.Row_No}`}
        checked={row.Review}
        onChange={() => handleReviewChange(row.Row_No)}
        disabled={isauthorized === 'student'} // Pass the Row_No here
      />
    </td>
  </tr>
))}

  {addingNewRow && (
    <tr>
      <td></td>
      <td>
        <input type="text" name="date" value={newRow.date} onChange={handleInputChange} />
      </td>
      <td>
        <input type="text" name="workCompleted" value={newRow.workCompleted} onChange={handleInputChange} />
      </td>
      <td>
        <input type="text" name="workToBeCompleted" value={newRow.workToBeCompleted} onChange={handleInputChange} />
      </td>
      <td>
        <button className="add-row-btn"  onClick={handleSaveNewRow} >
          Save
        </button>
      </td>
    </tr>
  )}
</tbody>
</table></div>
<button className='add-row-btn' disabled={isauthorized === 'staff'} onClick={handleAddRow}>Add</button>

    </div>
  );
}

export default Main
