import { useEffect } from 'react';
import Banner from '../StudentModule/Banner'
import AdminVerificationBody from './AdminVerificationBody'
import { useNavigate, useParams } from 'react-router-dom';

function AdminVerification() {
  const {Id} = useParams();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const isauthorized = localStorage.getItem("isauthorized");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }

  useEffect(() => {
    if (isauthorized === "Admin") {
      console.log(userInfo);
      console.log("user Info Details")
    }
    else{
      navigate("/");
    }
}, []);

  return (
    <div>
      <Banner batchNo={userInfo.Name} moduleName={"Verification Page"} handleLogout={handleLogout}/>
      <AdminVerificationBody ID = {Id}/>
    </div>
  )
}

export default AdminVerification
