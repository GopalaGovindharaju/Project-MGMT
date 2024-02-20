import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserInfoContext from '../UsenInfoContext';
import './staff.css'

function Staff() {
  const [isAddingGuide, setIsAddingGuide] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentRegNo, setStudentRegNo] = useState('');
  const [guideList, setGuideList] = useState([]);
  const [selectedBatchNo, setSelectedBatchNo] = useState('');

  const openGuidePopup = () => {
    setIsAddingGuide(true);
  };

  const closeGuidePopup = () => {
    setIsAddingGuide(false);
  };

  useEffect(() => {
    console.log(userInfo.Name)
    axios.post('http://localhost:8000/allteams/batch/',{'guide_name': userInfo.Name})
      .then(response => {
        setGuideList(response.data.Batch_No);
        console.log(response.data.Batch_No)
      })
      .catch(error => {
        console.error('Error fetching guide list:', error);
      });
  }, []);
  

  const handleStudentSubmission = () => {
    // Perform axios request to add the new guide
    const data = {
      Name: studentName,
      Reg_No: studentRegNo,
      Project_Guide: userInfo.Name,
    }
    console.log(data)
    axios.post('http://localhost:8000/student/add/', data)
      .then(response => {
        // Handle success, e.g., close the modal and refresh data
        closeGuidePopup();
        // You might want to fetch data again to update the projects list
      })
      .catch(error => {
        alert('Error adding guide:', error);
        closeGuidePopup();
      });
  };

  const [projects, setProjects] = useState([]);

  const { userInfo } = useContext(UserInfoContext);

  const [isDarkMode, setIsDarkMode] = useState(false);
  

  const handleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode((prevMode) => !prevMode);

  }
  const colorPairs = [
    { backgroundColor: '#e9e7fd', textColor: '#4f3ff0' },
    { backgroundColor: '#ffd3e2', textColor: '#df3670' },
    { backgroundColor: '#c8f7dc', textColor: '#34c471' },
    { backgroundColor: '#fee4cb', textColor: '#ff942e' },
    { backgroundColor: '', textColor: '#096c86' },
  
  ];

  const handleStudentName = (e) => {
    setStudentName(e.target.value)
  }
  const handleStudentRegNo = (e) => {
    setStudentRegNo(e.target.value)
  }

  const colorLoop = projects.map((project, index) => {
    const colorPair = colorPairs[index % colorPairs.length];
    return { ...project, ...colorPair};
  });

  
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const apiUrl = selectedBatchNo
    ? `http://localhost:8000/allteams/bat/?batch=${selectedBatchNo}&name=${userInfo.Name}`
    : `http://localhost:8000/allteams/bat/?name=${userInfo.Name}`;

    const postData = {
      User_Id: userInfo.User_Id, // Replace with the actual user id
      // Other data you want to send...
    };

  axios.get(apiUrl, postData)
    .then(response => {
      setProjects(response.data);
      console.log(response.data)
    })
    .catch(error => {
      console.error('Error fetching project data:', error);
    });

    const formatDate = (date) => {
      const options = { month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    };
    const today = new Date();
    const formattedDate = formatDate(today);
    setCurrentDate(formattedDate);
  }, [selectedBatchNo]);



  const isauthorized = localStorage.getItem("isauthorized");
  const navigate = useNavigate();
  useEffect(() => {
    if (isauthorized !== "staff") {
      navigate("/");
    }
  }, []);
  const handleLogout = (event) => {
    localStorage.setItem("isSigned", "false");
    localStorage.setItem("isauthorized", "");
    navigate("/");
  };
  return (
    <div>
      <div className="app-container">
  <div className="app-header">
    <div className="app-header-left">
      <span className="app-icon"></span>
      <p className="app-name">MGMT</p>
      <select
  className="form-select"
  value={selectedBatchNo}
  onChange={(e) => setSelectedBatchNo(e.target.value)}
  aria-label="Default select example"
>
  <option value="" defaultValue>
    Filter By Batch Number
  </option>
  {guideList.map((guide, index) => (
    <option key={index} value={guide}>
      {guide}
    </option>
  ))}
</select>
    </div>
    <div className="app-header-right">
    <button className="add-btn" title="New Student" value="New Guide" onClick={openGuidePopup}>
      <img
          src={process.env.PUBLIC_URL + '/add.png'}
          alt="External Icon"
          width="22"
          height="22"
        />
      </button>
      {isAddingGuide && (
        <div className="guide-popup">
          <div className="guide-popup-content">
            <h2>Add a New Student</h2>
            <form>
            <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Project title</label>
    <div className="col-sm-8">
      <input type="text" value={studentName} className="form-control" onChange={handleStudentName} id="inputPassword" placeholder="Title"/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Team Lead RegNo</label>
    <div className="col-sm-8">
      <input type="text" value={studentRegNo} className="form-control" id="inputPassword" onChange={handleStudentRegNo} placeholder="RegNo"/>
    </div>
  </div>
  <button type="button" style={{marginTop:"10px"}} className="btn btn-primary" onClick={handleStudentSubmission}>Add</button>
<button type="button" style={{marginTop:"10px"}} className="btn btn-primary" onClick={closeGuidePopup}>Cancel</button>
</form>

          </div>
        </div>
      )}
      <button title="Switch Theme" className={`mode-switch ${isDarkMode ? 'active' : ''}`} onClick={handleTheme}>
        <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
      <button className="add-btn" title="Log Out" value="Log Out" onClick={handleLogout}>
      <img
          src={process.env.PUBLIC_URL + '/power.png'}
          alt="External Icon"
          width="22"
          height="22"
        />
      </button>
      <button className="profile-btn">
        <img src={process.env.PUBLIC_URL + '/profile.png'} />
        <span>{userInfo.Name}</span>
      </button>
    </div>
    <button className="messages-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
    </button>
  </div>
  <div className="app-content">
    <div className="app-sidebar">
    </div>
    <div className="projects-section container-fluid">
      <div className="projects-section-header">
        <p>Projects</p>
        <p className="time">{currentDate}</p>
      </div>
      <div className="projects-section-line">
        <div className="projects-status">
          <div className="item-status">
            <span className="status-number">45</span>
            <span className="status-type">In Progress</span>
          </div>
          <div className="item-status">
            <span className="status-number">24</span>
            <span className="status-type">Upcoming</span>
          </div>
          <div className="item-status">
            <span className="status-number">62</span>
            <span className="status-type">Total Projects</span>
          </div>
        </div>
      </div>
      <div className="overflow-auto" id='project-boxes'>
      {colorLoop.map((project) => (
            <div className="project-box-wrapper" key={project.lead_RegNo} onClick={() => navigate(`/student?leadRegNo=${project.lead_RegNo}`)}>
              <div className="project-box" style={{ backgroundColor: project.backgroundColor }}>
                    <div className="project-box-header">
                      <span>{currentDate}</span>
                      <div className="more-wrapper">
                      <button className="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" /></svg>
            </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">{project.Title}</p>
                    </div>
                    <div className="box-progress-wrapper">
                      <p className="box-progress-header">Progress</p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: `${Math.round(project.Review)}%`, backgroundColor: project.textColor }}
                        ></span>
                      </div>
                      <p className="box-progress-percentage">{Math.round(project.Review)}%</p>
                    </div>
                    <div className="project-box-footer">
                      <div className="participants">
                      <p className="box-content-subheader">{project.Project_Guide}</p>
                      </div>
                      <div className="days-left" style={{color: project.textColor }}>
                        {project.Batch_No}
                      </div>
                    </div>
                  </div>
                </div>
              ))}



  </div>
</div>{/*
<Message/>
*/}
</div>
</div>
    </div>
  )
}

export default Staff
