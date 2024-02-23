import React, { useContext, useEffect, useState } from 'react';
import './signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserInfoContext from '../UsenInfoContext';


function Signin() {
  const [userFormsClass, setUserFormsClass] = useState('');
  const [newUserId, setNewUserId] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const [exPassword, setExPassword] = useState('');
  const [exUserId, setExUserId] = useState('');


  const handleSignupClick = () => {
    setUserFormsClass('bounceLeft');
  };
  const handleLoginClick = () => {
    setUserFormsClass('bounceRight');
  }; 
  const handleExPassword = (event) => {
    setExPassword(event.target.value);
  };

  const handleExUserId = (event) => {
    setExUserId(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setNewUserName(event.target.value);
  }
  const handleUserIdChange = (event) => {
    setNewUserId(event.target.value);
  }
  const handlePassword = (event) => {
    setNewPassword(event.target.value);
  }
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  }
  return (
    <div>
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Don't have an account?</h2>
              <p className="user_unregistered-text">
			  Supercharge your productivity and collaboration with our cutting-edge project management app! Sign up today to streamline your projects, boost team efficiency, and achieve success faster.
              </p>
              <button className="user_unregistered-signup" onClick={handleSignupClick}>
                Sign up
              </button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <p className="user_registered-text">
                Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.
              </p>
              <button className="user_registered-login" onClick={handleLoginClick}>
                Login
              </button>
            </div>
          </div>

          <div className={`user_options-forms ${userFormsClass}`} id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form onSubmit={handleLogin} className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" placeholder="User Id" value={exUserId} onChange={handleExUserId} className="forms_field-input" required autoFocus />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" value={exPassword} onChange={handleExPassword} className="forms_field-input" required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot">
                    Forgot password?
                  </button>
                  <input type="submit" value="Log In" className="forms_buttons-action" />
                </div><br></br><br></br>
                <div className="forms_field">
                    Login Now
                  </div>
              </form>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form onSubmit={handleSignup} className="forms_form">
				
          
                <fieldset className="forms_fieldset">
                <div className='row'>
                <div className='col'>
                  <div className="forms_field">
                    <input type="text" placeholder="Full Name" value={newUserName} onChange={handleUsernameChange} className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="text" placeholder="Register No" value={newUserId} onChange={handleUserIdChange} className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" value={newPassword} onChange={handlePassword} className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="email" placeholder="Email" value={newEmail} onChange={handleEmail} className="forms_field-input" required />
                  </div></div>
                  <div className='col'>
                  <div className="forms_field">
                     <select className="forms_field-select" value={selectedRole} style={{width:'230px', marginTop:'13px'}} onChange={handleRoleChange} required>
                        <option value="" disabled>Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                        <option value="staff">Staff</option>
                     </select>
                    </div>
                    {selectedRole === 'student' && (<>
                      <div className="forms_field">
                      <select className="forms_field-select" value={selectedStaffIncharge} style={{width:'230px', marginTop:'13px'}} onChange={handleStaffInchargeChange} required>
                         <option value="" disabled>Select Staff Incharge</option>
                         {guideList.map((guide, index) => (
    <option key={index} value={guide}>
      {guide}
    </option>
  ))}
                      </select>
                     </div>
                     <div className="forms_field">
                      <select className="forms_field-select" value={selectedBatchNo} style={{width:'230px', marginTop:'13px'}} onChange={handleBatchNoChange} required>
                         <option value="" disabled>Select Batch No</option>
                         <option value="A01">A01</option>
                         <option value="A02">A02</option>
                         <option value="A03">A03</option>
                      </select>
                     </div>
                     <div className="forms_field">
                      <select className="forms_field-select" value={selectedYear} style={{width:'230px', marginTop:'13px'}} onChange={handleYearChange} required>
                         <option value="" disabled>Select Year</option>
                         <option value="2020-2024">2020-2024</option>
                         <option value="2021-2025">2021-2025</option>
                         <option value="2022-2026">2022-2026</option>
                      </select>
                     </div>
                     </>)}
                     </div>
                     </div>
                </fieldset>
                <div className="forms_buttons">
                  <input type="submit" value="Sign up" className="forms_buttons-action" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signin;
