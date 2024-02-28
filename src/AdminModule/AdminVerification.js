import Banner from '../StudentModule/Banner'
import AdminVerificationBody from './AdminVerificationBody'
import { useNavigate } from 'react-router-dom';

function AdminVerification() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <div>
      <Banner batchNo={userInfo.Department} moduleName={"Verification Page"} handleLogout={handleLogout}/>
      <AdminVerificationBody/>
    </div>
  )
}

export default AdminVerification
