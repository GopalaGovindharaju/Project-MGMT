import React, { useEffect } from 'react'
import Banner from '../StudentModule/Banner'
import Body from './Body'
import { useNavigate, useParams } from 'react-router-dom';

function Guide() {
  const { Id } = useParams();
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
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
    <div>
      <Banner batchNo={userInfo.Name} moduleName={'Staff Page'} handleLogout={handleLogout} />
      <Body ID={Id}/>
    </div>
  )
}

export default Guide
