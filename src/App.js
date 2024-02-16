import './App.css';
import Signin from './Signup/Signin';
import {Routes, Route} from 'react-router-dom';
import Student from './StudentModule/Student';
import Staff from './StaffModule/Staff';
import Admin from './AdminModule/Admin';
import { useState } from 'react';
import UserInfoContext from './UsenInfoContext';
import Review from './StudentModule/Review';
import Review1 from './StudentModule/Review1';
import Review2 from './StudentModule/Review2';
import Review3 from './StudentModule/Review3';
import AdminVerification from './AdminModule/AdminVerification';

function App() {

  const [userInfo, setUserInfo] = useState(() => {
    // Try to get user info from localStorage on initial load
    const storedUserInfo = localStorage.getItem('userInfo');
    return storedUserInfo ? JSON.parse(storedUserInfo) : null;
  });
  return (
    <div className="App">
      <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      <Routes>
        <Route path='*' element={<AdminVerification/>}></Route>
        <Route path='/student' element={<Student/>}>
          <Route index element={<Review/>} />
          <Route path='Review0' element={<Review />} />
          <Route path='Review1' element={<Review1/>}/>
          <Route path='Review2' element={<Review2/>}/>
          <Route path='Review3' element={<Review3/>}/>
        </Route>
        <Route path='/staff' element={<Staff/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
