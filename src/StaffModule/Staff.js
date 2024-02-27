import React, {useEffect, useState } from 'react'
import './staff.css'
import ReviewDateForTeams from './ReviewDateForTeams';
import Chatmsg from '../StudentModule/Chatmsg';
import Chatmsg1 from '../StudentModule/Chatmsg1';
import StaffStudentAdd from './StaffStudentAdd';

function Staff() {
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  
  
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
    const formatDate = (date) => {
      const options = { month: 'long', day: 'numeric' };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    };
    const today = new Date();
    const formattedDate = formatDate(today);
    setCurrentDate(formattedDate);
    const data = [{
      Lead_RegNo:'23',
      Title: "hello",
      Project_Guide:"indu"
    },
    {
      Lead_RegNo:'23',
      Title: "hello",
      Project_Guide:"indu"
    },
    {
      Lead_RegNo:'23',
      Title: "hello",
      Project_Guide:"indu"
    },
    {
      Lead_RegNo:'23',
      Title: "hello",
      Project_Guide:"indu"
    },
    {
      Lead_RegNo:'23',
      Title: "hello",
      Project_Guide:"indu"
    },
    {
      Lead_RegNo:'23',
      Title: "hello",
      Project_Guide:"indu"
    },
    {
      Lead_RegNo:'23',
      Title: "hello",
      Project_Guide:"indu"
    },
    {
      Lead_RegNo:'23',
      Title: "hello",
      Project_Guide:"indu"
    }
      
    ]
    setProjects(data);
  }, []);
  const handleOpen = () => {
    setIsOpen(true);
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
>
  <option value="" defaultValue>
    Filter By Batch Number
  </option>
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
        <span>Name</span>
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
            <div className="project-box-wrapper" key={project.lead_RegNo}>
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
