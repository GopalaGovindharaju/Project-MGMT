import React, { useContext, useEffect, useState } from 'react';
import './signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserInfoContext from '../Helper/UsenInfoContext';

function Signin() {
  const [userFormsClass, setUserFormsClass] = useState('');
  const [newUserId, setNewUserId] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedDepartment,setSelectedDepartment] = useState('');
  const [isauthorized, setIsAuthorized] = useState(
    localStorage.getItem("isauthorized") || ""
  );
  const [isSigned, setIsSigned] = useState(
    localStorage.getItem("isSigned") === "true" ? true : false
  );
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserInfoContext);
  
  useEffect(() => {
    localStorage.setItem("isauthorized", isauthorized);
  }, [isauthorized]);

  useEffect(() => {
    localStorage.setItem("isSigned", isSigned.toString());
  }, [isSigned]);

  useEffect(() => {
    // Load user information from local storage on component mount
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    const storedIsAuthorized = localStorage.getItem('isauthorized');
    const storedIsSigned = localStorage.getItem('isSigned') === 'true';

    if (storedIsSigned && storedIsAuthorized && storedUserInfo) {
      setIsSigned(true);
      setIsAuthorized(storedIsAuthorized);
      setUserInfo(storedUserInfo);
      navigate('/'); // Redirect to the appropriate route after login
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigation = () => {
    switch (isauthorized) {
      case 'Admin':
        navigate('/admin');
        break;
      case 'Student':
        navigate('/student');
        break;
      case 'Guide':
        navigate('/staff');
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (isSigned && isauthorized) {
      handleNavigation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSigned, isauthorized]);

  const ressetForm = () => {
    setNewUserId('');
    setNewUserName('');
    setNewPassword('');
    setNewConfirmPassword('');
    setSelectedRole('');
    setSelectedDepartment('');
  }


  const handleSignupClick = () => {
    setUserFormsClass('bounceLeft');
  };
  const handleLoginClick = () => {
    setUserFormsClass('bounceRight');
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
  const handleConfirmPassword = (event) => {
    setNewConfirmPassword(event.target.value);
  }
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  }
  const handleSelectDepartment = (event) => {
    setSelectedDepartment(event.target.value);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      id: newUserId,
      password: newPassword
    }
    axios.post('http://127.0.0.1:8000/signup/login/', data)
    .then((response) => {
      console.log(response.data)
      if (!response.data) {
        alert("User Can't Found");
      } else {
        setIsSigned(true);
        setIsAuthorized(response.data.Role);
        setUserInfo(response.data);
        console.log(response.data)
        localStorage.setItem('userInfo', JSON.stringify(response.data));
      }
      ressetForm()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleSignup = (event) => {
    event.preventDefault();
    if (newPassword === newConfirmPassword){
      const data = {
        id: newUserId,
        name: newUserName,
        password: newPassword,
        role: selectedRole,
        department: selectedDepartment
      }

      axios.post('http://127.0.0.1:8000/signup/', data)
      .then((response) => {
        console.log("Sign uped")
        console.log(response)
        setUserFormsClass('bounceRight');
      if (!response.data) {
        alert("User Can't Found or not Registered");
      } else {
        console.log(response.data)
      }
        ressetForm();
      })
      .catch((error) => {
        console.log(error)
      })
    }
    else{
      alert("Password Mismatch!")
    }
    
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
                    <input type="text" placeholder="User Id" value={newUserId} onChange={handleUserIdChange} className="forms_field-input" required autoFocus />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" value={newPassword} onChange={handlePassword} className="forms_field-input" required />
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
                    <input type="text" placeholder="Id" value={newUserId} onChange={handleUserIdChange} className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="text" placeholder="Name" value={newUserName} onChange={handleUsernameChange} className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" value={newPassword} onChange={handlePassword} className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Confirm-Password" value={newConfirmPassword} onChange={handleConfirmPassword} className="forms_field-input" required />
                  </div>
                  </div>
                  <div className='col'>
                  <div className="forms_field">
                     <select className="forms_field-select" value={selectedRole} style={{width:'230px', marginTop:'13px'}} onChange={handleRoleChange} required>
                        <option value="" disabled>Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Guide">Staff</option>
                        <option value="Student">Student</option>
                     </select>
                    </div>
                    {selectedRole === 'Admin' && (<>
                      <div className="forms_field">
                      <select className="forms_field-select" value={selectedDepartment} style={{width:'230px', marginTop:'13px'}} onChange={handleSelectDepartment} required>
                         <option value="" disabled>Select Department</option>
                         <option value="CSE">CSE</option>
                         <option value="IT">IT</option>
                         <option value="MECH">MECH</option>
                         <option value="CIVIL">CIVIL</option>
                         <option value="AERO">AERO</option>
                         <option value="ECE">ECE</option>
                         <option value="EEE">EEE</option>
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
