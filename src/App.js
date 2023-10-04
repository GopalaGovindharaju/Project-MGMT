import './App.css';
import Signin from './Signup/Signin';
import {Routes, Route} from 'react-router-dom';
import Student from './StudentModule/Student';
import Staff from './StaffModule/Staff';
import Admin from './AdminModule/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Signin/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/staff' element={<Staff/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
