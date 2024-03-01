import React, { useEffect, useState } from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Chatmsg from '../StudentModule/Chatmsg';
import Chatmsg1 from '../StudentModule/Chatmsg1';
import AdminGuideAdd from './AdminGuideAdd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [currentDate, setCurrentDate] = useState('');
  const [projects, setProjects] = useState([]);
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentYear, setCurrentYear] = useState('');
  const [projectForFilter, setProjectForFilter] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState('');
  const [review0Data, setReview0Data] = useState([]);
  const [review1Data, setReview1Data] = useState([]);
  const [review2Data, setReview2Data] = useState([]);
  const [review3Data, setReview3Data] = useState([]);
  const [varForGetRequstedTeams, setVarForGetRequestedTeam] = useState(false);
  const isauthorized = localStorage.getItem("isauthorized");
  const navigate = useNavigate();




  useEffect(() => {
    if (isauthorized === "Admin") {
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
    
    return { ...project, ...colorPair };
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

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  }

  useEffect(() => {
    axios.get('http://localhost:8000/addGuide/getAllTeams/')
    .then((response) => {
      console.log(response.data);
      setProjects(response.data);
      setProjectForFilter(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  const searchFilter = (e) => {
    const search = e.target.value.toLowerCase()
    const filteredProjects = projectForFilter.filter((project) => project.Title.toLowerCase().includes(search))
    setProjects(filteredProjects);
  };
  
  const handleGuideChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedGuide(selectedValue);
    const filteredProjects = projectForFilter.filter(
      (project) => selectedValue === '' || project.Guide_ID === selectedValue
    );
    setProjects(filteredProjects);
  };
  
  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleYearFilter = (e) => {
    const selectedYear = e.target.value;
    setCurrentYear(selectedYear);
    const filteredProjects = projectForFilter.filter((project) => selectedYear === '' || project.Year === selectedYear);
    setProjects(filteredProjects);
  }

  useEffect(() => {
    axios.get('http://localhost:8000/addGuide/getRequestedTeams/')
    .then((response) => {
      console.log(response.data);
      setReview0Data(response.data.review_0_data)
      setReview1Data(response.data.review_1_data)
      setReview2Data(response.data.review_2_data)
      setReview3Data(response.data.review_3_data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[varForGetRequstedTeams])

  const handleBatchClick = (batch) =>{
    const filteredProjects = projectForFilter.filter(
      (project) => project.Batch === batch);
    setProjects(filteredProjects);
  }

  const handleAcceptAll = (review) => {
    const data = {
      'review':review,
    }
    axios.post('http://localhost:8000/addGuide/acceptAll/', data)
    .then((response) => {
      console.log(response.data)
      setVarForGetRequestedTeam(true);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <div className="app-container">
        <div className="app-header">
          <div className="app-header-left">
            <span className="app-icon"></span>
            <p className="app-name">MGMT</p>
            <div className="auto-search-bar">
              <input
                className="search-bar"
                type="text"
                onChange={(e) => searchFilter(e)}
                placeholder="Search By Projects"
              />
              <FontAwesomeIcon
                className="search-icon"
                icon={faMagnifyingGlass}
              />
            </div>
            <select
              className="form-select"
              value={selectedGuide}
              onChange={handleGuideChange}
              aria-label="Default select example"
            >
              <option value="" defaultValue>
                Filter By Guide
              </option>
              {Array.from(new Set(projectForFilter.map((guide) => guide.Guide_ID))).map((uniqueGuideID) => (
    <option key={uniqueGuideID} value={uniqueGuideID}>
      {projectForFilter.find((guide) => guide.Guide_ID === uniqueGuideID).Guide_Name} - {uniqueGuideID}
    </option>
  ))}
            </select>
          </div>
          <div className="app-header-right">
            <button
              className="add-btn"
              title="New Guide"
              value="New Guide"
              onClick={handleOpen}
            >
              <img
                src={process.env.PUBLIC_URL + "/add.png"}
                alt="External Icon"
                width="22"
                height="22"
              />
            </button>
            {isOpen &&  (
              <div className="admin-guide-add-overlay">
              <div className="admin-guide-add-modal">
                <AdminGuideAdd setIsOpen = {setIsOpen}  />
              </div>
            </div>
            )}
           
            <button
              title="Switch Theme"
              className={`mode-switch ${isDarkMode ? "active" : ""}`}
              onClick={handleTheme}
            >
              <svg
                className="moon"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs></defs>
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </button>
            <button
              className="add-btn"
              title="Log Out"
              value="Log Out"
              onClick={handleLogout}
            >
              <img
                src={process.env.PUBLIC_URL + "/power.png"}
                alt="External Icon"
                width="22"
                height="22"
              />
            </button>
            <button className="profile-btn">
              <img src={process.env.PUBLIC_URL + "/profile.png"} alt=''/>
              <span>Name</span>
            </button>
          </div>
  
        </div>
        <div className="app-content">
          <div className="app-sidebar"></div>
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
            <div className="overflow-auto" id="project-boxes">
              {colorLoop.map((project) => (
                <div
                  className="project-box-wrapper"
                  key={project.ID}
                  onClick={() => navigate(`/adminVerification/${project.ID}`)}
                >
                  <div
                    className="project-box"
                    style={{ backgroundColor: project.backgroundColor }}
                  >
                    <div className="project-box-header">
                      <span>{currentDate}</span>
                      <div className="more-wrapper">
                        <button className="project-btn-more">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-vertical"
                          >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="project-box-content-header">
                      <p className="box-content-header">{project.Title}</p>
                    </div>
                    <h5  style={{marginBottom:'-2px'}}>Reviews</h5>

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                    <div className="box-progress-wrapper" >
                      <p className="box-progress-header"style={{width:'100%'}}></p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: `${Math.round(project.Review)}%`, backgroundColor: project.textColor }}
                        ></span>
                      </div>
                      <div className="box-progress-footer"style={{marginTop:'10px'}}> <p>0</p>  </div>
                    </div>

                    <div className="box-progress-wrapper">
                    <p className="box-progress-header"style={{width:'100%'}}></p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: `${Math.round(project.Review)}%`, backgroundColor: project.textColor }}
                        ></span>
                      </div>
                      <div className="box-progress-footer"style={{marginTop:'10px'}}> <p>1</p>  </div>

                    </div>

                    <div className="box-progress-wrapper">
                    <p className="box-progress-header" style={{width:'100%'}}></p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: `${Math.round(project.Review)}%`, backgroundColor: project.textColor }}
                        ></span>
                      </div>
                      <div className="box-progress-footer"style={{marginTop:'10px'}}> <p>2</p>  </div>

                    </div>

                    <div className="box-progress-wrapper">
                    <p className="box-progress-header"style={{width:'100%'}}></p>
                      <div className="box-progress-bar">
                        <span
                          className="box-progress"
                          style={{ width: `${Math.round(project.Review)}%`, backgroundColor: project.textColor }}
                        ></span>
                      </div>
                      <div className="box-progress-footer"style={{marginTop:'10px'}}> <p>3</p>  </div>
                    </div>     
                    </div>

                    
                    <div className="project-box-footer"> 
                      <div className="participants">
                        <p className="box-content-subheader">
                          {project.Guide_Name}
                        </p>
                      </div>
                      <div
                        className="days-left"
                        style={{ color: project.textColor }}
                      >
                        {project.Batch}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="admin-filters">
            {review0Data.length > 0 && <div style={{ marginBottom: "30px" }}>
              <div className="admin-notification">
                <p className="admin-notification-p">
                  5 batches need a approval for their <b>review 0</b>
                </p>
                {review0Data.map((batch) => (
                  <p
                    id="a-n-b"
                    className="admin-notification-batches"
                    key={batch.ID}
                    onClick={() => handleBatchClick(batch.Batch)}
                  >
                    BNo:{batch.Batch}
                  </p>
                ))}
                <div style={{display:'flex', flexDirection:'row', justifyContent:'right', paddingTop:'10px'}}>
                <button className='admin-notification-buttons1' onClick={() => handleAcceptAll('0')}>Accept all</button>
                </div>
              </div>
            </div>}
            {review1Data.length > 0 && <div style={{ marginBottom: "30px" }}>
              <div className="admin-notification">
                <p className="admin-notification-p">
                  5 batches need a approval for their <b>review 1</b>
                </p>
                {review1Data.map((batch) => (
                  <p
                    id="a-n-b"
                    className="admin-notification-batches"
                    key={batch.ID}
                    
                  >
                    BNo:{batch.Batch}
                  </p>
                ))}
                <div style={{display:'flex', flexDirection:'row', justifyContent:'right', paddingTop:'10px'}}>
                <button className='admin-notification-buttons1' onClick={() => handleAcceptAll('1')}>Accept all</button>
                </div>
              </div>
            </div>}
            {review2Data.length > 0 && <div style={{ marginBottom: "30px" }}>
              <div className="admin-notification">
                <p className="admin-notification-p">
                  5 batches need a approval for their <b>review 2</b>
                </p>
                {review2Data.map((batch) => (
                  <p
                    id="a-n-b"
                    className="admin-notification-batches"
                    key={batch.ID}
                  >
                    BNo:{batch.Batch}
                  </p>
                ))}
                <div style={{display:'flex', flexDirection:'row', justifyContent:'right', paddingTop:'10px'}}>
                <button className='admin-notification-buttons1' onClick={() => handleAcceptAll('2')}>Accept all</button>
                </div>
              </div>
            </div>}
            {review3Data.length > 0 && <div style={{ marginBottom: "30px" }}>
              <div className="admin-notification">
                <p className="admin-notification-p">
                  5 batches need a approval for their <b>review 3</b>
                </p>
                {review3Data.map((batch) => (
                  <p
                    id="a-n-b"
                    className="admin-notification-batches"
                    key={batch.ID}
                  >
                    BNo:{batch.Batch}
                  </p>
                ))}
                <div style={{display:'flex', flexDirection:'row', justifyContent:'right', paddingTop:'10px'}}>
                <button className='admin-notification-buttons1' onClick={() => handleAcceptAll('3')}>Accept all</button>
                </div>
              </div>
            </div>}
            <div style={{ marginBottom: "30px" }}>
              <p className="filter-admin-p">Choose Year to filter</p>
                <select
                  value={currentYear}
                  onChange={handleYearFilter}
                  className="form-select"
                >
                  <option value='' defaultValue>Choose Year</option>
                  {Array.from(new Set(projectForFilter.map((year) => year.Year))).map((uniqueYear) => (
    <option key={uniqueYear} value={uniqueYear}>
      {uniqueYear}
    </option>
  ))}
                </select>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <p className="filter-admin-p">Review Shedule</p>
              <div className="p-2">
                <input className="form-control" type="file" id="formFile" />
              </div>
            </div>
          </div>
        </div>
        <Chatmsg setIsTabOpen={setIsTabOpen}/>
      {isTabOpen && <Chatmsg1 setIsTabOpen={setIsTabOpen}/> }
      </div>
     
    </div>
  );
}

export default Admin
