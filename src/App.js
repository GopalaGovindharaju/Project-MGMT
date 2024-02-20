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
import Guide from './StaffModule/Guide';
import AdminVerification from './AdminModule/AdminVerification';
import Review0 from './StaffModule/Review0';
import StaffReview1 from './StaffModule/StaffReview1';
import SReview2 from './StaffModule/SReview2';
import SReview3 from './StaffModule/SReview3';
import AReview0 from './AdminModule/AReview0';
import AReview1 from './AdminModule/AReview1';
import AReview2 from './AdminModule/AReview2';
import AReview3 from './AdminModule/AReview3';
import Summary from './AdminModule/Summary';
import PanelMember from './PanelMember/PanelMember';


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
        <Route path='/student' element={<Student/>}>
          <Route index element={<Review/>} />
          <Route path='Review0' element={<Review />} />
          <Route path='Review1' element={<Review1/>}/>
          <Route path='Review2' element={<Review2/>}/>
          <Route path='Review3' element={<Review3/>}/>
        </Route>
        <Route path='/guide' element={<Guide/>}>
        <Route index element={<Review0/>} />
        <Route path='SReview0' element={<Review0/>} />
          <Route path='SReview1' element={<StaffReview1/>}/>
          <Route path='SReview2' element={<SReview2/>}/>
          <Route path='SReview3' element={<SReview3/>}/>
        </Route>
        <Route path='/staff' element={<Staff/>}></Route>
        <Route path='/adminVerification' element={<AdminVerification/>}>
        <Route index element={<Summary/>} />
        <Route path='Summary' element={<Summary/>}/>
        <Route path='AReview0' element={<AReview0/>} />
          <Route path='AReview1' element={<AReview1/>}/>
          <Route path='AReview2' element={<AReview2/>}/>
          <Route path='AReview3' element={<AReview3/>}/>
        </Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/panel' element={<PanelMember/>}></Route>
      </Routes>
      </UserInfoContext.Provider>
    </div>
  );
}

export default App;
