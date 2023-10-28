import './App.css';
import Signin from './Signup/Signin';
import {Routes, Route} from 'react-router-dom';
import Student from './StudentModule/Student';
import Staff from './StaffModule/Staff';
import Admin from './AdminModule/Admin';
import { useState } from 'react';
import UserInfoContext from './UsenInfoContext';

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
        <Route path='*' element={<Signin/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/staff' element={<Staff/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
