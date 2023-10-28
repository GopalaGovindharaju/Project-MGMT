import React, { useEffect, useState } from 'react'
import './main.css'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Main() {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [reviewOrder, setReviewOrder] = useState(0);
    const [projectData, setProjectData] = useState([]);
    const location = useLocation();
    const leadRegNo = new URLSearchParams(location.search).get('leadRegNo');
    const [memberName, setMemberName] = useState('');
  const [memberRegNo, setMemberRegNo] = useState('');
    const [teamList, setTeamList] = useState([])
    const [reviewValues, setReviewValues] = useState({
      Review_0: false,
      Review_1: false,
      Review_2: false,
      Review_3: false,
    });
    const [leadName, setLeadName] = useState('')
    const [isAddingMember, setIsAddingMember] = useState(false);
    const [perLedRegno, setPerLeadRegNo] = useState('');

    const handleReviewChange = (reviewName) => {
      setReviewValues((prevValues) => {
        // Create a new object to avoid directly modifying the previous state
        const newValues = { ...prevValues };
    
        // Update the clicked radio button and all previous ones
        for (const key in newValues) {
          if (key === reviewName || newValues[key]) {
            newValues[key] = true;
          } else {
            // If a radio button is not the clicked one and it was false, keep it false
            newValues[key] = false;
          }
        }
    
        return newValues;
      });
    };

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
    setReviewValues({
      Review_0: response.data.Review_0,
      Review_1: response.data.Review_1,
      Review_2: response.data.Review_2,
      Review_3: response.data.Review_3,
    });
    console.log(response.data);
    const trueReviewsCount = Object.values(response.data)
        .filter((value) => typeof value === 'boolean' && value)
        .length;
        const newProgress = trueReviewsCount * 25;
      setProgress(newProgress);
      switch (trueReviewsCount) {
        case 0:
          setReviewOrder(0);
          break;
        case 1:
          setReviewOrder(1);
          break;
        case 2:
          setReviewOrder(2);
          break;
        case 3:
          setReviewOrder(3);
          break;
        default:
          setReviewOrder(4); // This assumes you have at most 4 reviews
          break;
      }
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



      
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-dark" id="navi">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-link">
                <label id='h4'>Student Profile</label>
              </li>
              <li>
                <a class="nav-link" href="#" id='h3'>Project Details</a>
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
          <div class="progress-bar progress-bar-striped progress-bar-animated" aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%` }}>{progress}%</div>
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
  <tr>
    <td>1</td>
    <td>12/7/2023</td>
    <td>abstract and proposed system</td>
    <td>architecture</td>
    <td>
      <input type="radio" name="r1" checked={reviewValues.Review_0}
      onChange={() => handleReviewChange('Review_0')}
      readOnly ></input>
    </td>
  </tr>
  <tr>
  <td>2</td>
  <td>25/7/2023</td>
  <td>architecture</td>
  <td>module implementation</td>
    <td>
      <input type="radio" name="r2"   checked={reviewValues.Review_1}
      onChange={() => handleReviewChange('Review_1')}
      readOnly={!reviewValues.Review_0} ></input>
    </td>
  </tr>
  <tr>
  <td>3</td>
  <td>6/8/2023</td>
  <td>module implementation</td>
  <td>final review</td>
    <td>
      <input type="radio" name="r3"   checked={reviewValues.Review_2}
      onChange={() => handleReviewChange('Review_2')}
      readOnly={!reviewValues.Review_1}></input>
    </td>
    
  </tr>
  <tr>
  <td>4</td>
  <td>20/8/2023</td>
  <td>final review</td>
  <td>null</td>
  <td>
      <input type="radio" name="r4"  checked={reviewValues.Review_3}
      onChange={() => handleReviewChange('Review_3')}
      readOnly={!reviewValues.Review_2}></input>
    </td>
  </tr>
  </tbody>
</table>

    </div>
  );
}

export default Main
