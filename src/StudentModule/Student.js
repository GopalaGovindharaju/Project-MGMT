import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard';
import ProjectDetail from './ProjectDetail';
import './studen.css';
import Main from './Main'; 
function Student() {
  const isauthorized = localStorage.getItem("isauthorized");
  const navigate = useNavigate();
  useEffect(() => {
    if (isauthorized !== "student" && isauthorized !== "staff" && isauthorized !== "admin") {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Main/>
    </div>
  )
}

export default Student
