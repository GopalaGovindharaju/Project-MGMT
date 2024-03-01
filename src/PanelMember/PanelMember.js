import React, { useEffect } from 'react';
import Banner from '../StudentModule/Banner'
import {Outlet, useNavigate, useParams } from 'react-router-dom';
import PanelNav from './PanelNav';

function PanelMember() {
    
  const {Id} = useParams();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const navigate = useNavigate();
  const isauthorized = localStorage.getItem("isauthorized");

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }

  useEffect(() => {
    if (isauthorized === "Guide") {
      console.log(userInfo);
      console.log("user Info Details")
    }
    else{
      navigate("/");
    }
}, []);

  return (
    <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
      <div>
        <Banner batchNo={userInfo.Name} moduleName={"Panel Member"} handleLogout={handleLogout}/>    
        <PanelNav/>
        <Outlet context={Id}/>
      </div>
    </div>
  )
}

export default PanelMember;
