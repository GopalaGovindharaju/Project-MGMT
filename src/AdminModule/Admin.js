import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {
  const isauthorized = localStorage.getItem("isauthorized");
  const navigate = useNavigate();
  useEffect(() => {
    if (isauthorized !== "admin") {
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
      <h1>Admin Module</h1>
      <input type='button' value="Log Out" onClick={handleLogout}/>
    </div>
  )
}

export default Admin
