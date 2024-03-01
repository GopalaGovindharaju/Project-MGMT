import React, { useEffect, useState } from 'react'
import './staff.css'
import ReviewDateForTeams from './ReviewDateForTeams';
import Chatmsg from '../StudentModule/Chatmsg';
import Chatmsg1 from '../StudentModule/Chatmsg1';
import StaffStudentAdd from './StaffStudentAdd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Staff() {
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState('');
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [years, setYears] = useState([]);
  const isauthorized = localStorage.getItem("isauthorized");

  useEffect(() => {
    if (isauthorized === "Guide") {
      console.log(userInfo);
      console.log("user Info Details")
    }
    else{
      navigate("/");
    }
}, []);
  
  
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
  const colorLoop = projects.map((project, index) => {
    const colorPair = colorPairs[index % colorPairs.length];
    return { ...project, ...colorPair};
  });

  useEffect(() => {
    console.log(userInfo)
    const formatDate = (date) => {
      const options = { month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    };
    const today = new Date();
    const formattedDate = formatDate(today);
    setCurrentDate(formattedDate);
  }, []);
  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  }

  useEffect(() => {
    const data = {
      'id': userInfo.ID,
    }
    axios.post('http://127.0.0.1:8000/addStudent/getTeams/',data)
    .then((response) => {
      console.log(response.data, response.data.message)
      setProjects(response.data.data);
    })
    .catch((error) => {
      console.log(error.data)
    })
  },[])

  const handleBatchChange = (event) => {
    const batchValue = event.target.value;
    setSelectedBatch(batchValue);
  }
  const filteredProjects = selectedBatch
    ? colorLoop.filter((project) => project.Batch === selectedBatch)
    : colorLoop;

    useEffect(() => {
      const startYear = 2022;
      const yearRange = Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index);
      setYears(yearRange);
    }, [currentYear]);

  const handleSwitchPanel = () => {
    navigate(`/panel/${userInfo.ID}`)
  }

  return (
    <div>
      <div className="app-container">
  <div className="app-header">
    <div className="app-header-left">
      <span className="app-icon"></span>
      <p className="app-name">MGMT</p>
      <select
  className="form-select"
  aria-label="Default select example"
  value={selectedBatch}
  onChange={handleBatchChange}
>
  <option value="" defaultValue>
    Filter By Batch Number
  </option>
  {colorLoop.map((batches) => (
    <option key={batches.Batch} value={batches.Batch}>{batches.Batch}</option>
  ))}
</select>
    </div>
    <div className="app-header-right">
    <button className="add-btn" title="New Student" value="New Guide"onClick={handleOpen}>
      <img
          src={process.env.PUBLIC_URL + '/add.png'}
          alt="External Icon"
          width="22"
          height="22"
        />
      </button>
      {isOpen && (
              <div className="staff-student-add-overlay">
              <div className="staff-student-add-modal">
                <StaffStudentAdd setIsOpen={setIsOpen} />
              </div>
            </div>
            )}
      <button title="Switch Theme" className={`mode-switch ${isDarkMode ? 'active' : ''}`} onClick={handleTheme}>
        <svg className="moon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
      <button className="add-btn" 
      title="Log Out" 
      value="Log Out"
      onClick={handleLogout}
       >
      <img
          src={process.env.PUBLIC_URL + '/power.png'}
          alt="External Icon"
          width="22"
          height="22"
        />
      </button>
      <button className="profile-btn">
        <img src={process.env.PUBLIC_URL + '/profile.png'} alt=''/>
        <span>{userInfo.Name}</span>
      </button>
    </div>
  
  </div>
  <div className="app-content">
    <div className="app-sidebar">
    </div>
    <div className='col-8'>
    <div className="projects-section container-fluid">
      <div className="projects-section-header">
        <p>Projects</p>
        <p className="time">{currentDate}</p>
      </div>

      <div className='bar-box'>
        <div className='search-by-year'>
              <p className="filter-guide-p">Choose Year to Filter</p>
                <select
                  value={currentYear}
                  onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                  className="year-select-filter"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
        </div>
        {userInfo.PanelMember && <div className='panel-mem-btn'>
            <button className='pannel-mem-btn' onClick={handleSwitchPanel}>Switch PanelMember</button>
        </div>}
      </div>

      <div className="overflow-auto" id='project-boxes'>
      {Array.isArray(filteredProjects) && filteredProjects.length > 0 ? (filteredProjects.map((project) => (
            <div className="project-box-wrapper" key={project.ID} onClick={() => navigate(`/guide/${project.ID}`)}>
              <div className="project-box" style={{ backgroundColor: project.backgroundColor }}>
                <div style={{height:'100%'}}>
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
                    
                    <h5>Reviews</h5>
                    <div style={{display:'flex', flexDirection:'row',justifyContent:'space-evenly'}}>

                    <div className="box-progress-wrapper">
                      <p className="box-progress-header"style={{width:'100%'}}></p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: `${Math.round(project.Review)}%`, backgroundColor: project.textColor }}
                        ></span>
                      </div>
                      <div className="box-progress-footer"> <p>0</p>  </div>
                    </div>
                    <div className="box-progress-wrapper">
                    <p className="box-progress-header"style={{width:'100%'}}></p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: `${Math.round(project.Review)}%`, backgroundColor: project.textColor }}
                        ></span>
                      </div>
                      <div className="box-progress-footer"> <p>1</p>  </div>
                    </div>
                    <div className="box-progress-wrapper">
                    <p className="box-progress-header" style={{width:'100%'}}></p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: `${Math.round(project.Review)}%`, backgroundColor: project.textColor }}
                        ></span>
                      </div>
                      <div className="box-progress-footer"> <p>2</p>  </div>
                    </div>
                    <div className="box-progress-wrapper">
                    <p className="box-progress-header"style={{width:'100%'}}></p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: `${Math.round(project.Review)}%`, backgroundColor: project.textColor }}
                        ></span>
                      </div>
                      <div className="box-progress-footer"> <p>3</p>  </div>
                    </div>     
                    </div>
                    
                    <div className="project-box-footer">
                      <div className="participants">
                      <p className="box-content-subheader">{project.Guide_Name}</p>
                      </div>
                      <div className="days-left" style={{color: project.textColor }}>
                        {project.Batch}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              ))) : (<p>No projects available</p>)}
  </div>
</div></div><div className='col-4' style={{backgroundColor:'white', padding:'4px', marginLeft:'10px', borderRadius:'25px'}}>
<div className='left-staff'><h3>Review Schedule</h3>
  <ReviewDateForTeams/>
  <ReviewDateForTeams/>
  <ReviewDateForTeams/>
  <ReviewDateForTeams/>
  </div>
  </div>
</div>
</div>
<Chatmsg setIsTabOpen={setIsTabOpen}/>
      {isTabOpen && <Chatmsg1 setIsTabOpen={setIsTabOpen}/> }
    </div>
  )
}

export default Staff
