import Banner from '../StudentModule/Banner'
import AdminVerificationBody from './AdminVerificationBody'
import { useNavigate, useParams } from 'react-router-dom';

function AdminVerification() {
  const {Id} = useParams();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <div>
      <Banner batchNo={'gi'} moduleName={"Verification Page"} handleLogout={handleLogout}/>
      <AdminVerificationBody ID = {Id}/>
    </div>
  )
}

export default AdminVerification
