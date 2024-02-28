import React, { useContext, useEffect, useState } from 'react'
import './main.css'
import { Outlet, useNavigate } from 'react-router-dom';
import Navb from './Navb';
import Banner from './Banner';
import Chatmsg from './Chatmsg';
import Chatmsg1 from './Chatmsg1';

function Main() {
    const [isTabOpen, setIsTabOpen] = useState(false);
    const isauthorized = localStorage.getItem("isauthorized");
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    useEffect(() => {
      if (isauthorized === "Student") {
        console.log(userInfo);
        console.log("user Info Details")
      }
      else{
        navigate("/");
      }
  }, []);
  const handleLogout = (event) => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={{ overflowY: 'hidden', height: '100vh', position:'relative' }}>
      <Banner batchNo={"A-01"} moduleName={"Student Page"} handleLogout={handleLogout}/>
      <Navb/>
      <Outlet/>
      <Chatmsg setIsTabOpen={setIsTabOpen}/>
      {isTabOpen && <Chatmsg1 setIsTabOpen={setIsTabOpen}/> }
    </div>
  );
}

export default Main
