import React, { useContext, useEffect, useState } from 'react';
import './signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserInfoContext from '../UsenInfoContext';


function Signin() {
  const [userFormsClass, setUserFormsClass] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [newUserId, setNewUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [selectedStaffIncharge, setSelectedStaffIncharge] = useState('');
  const [selectedBatchNo, setSelectedBatchNo] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [exPassword, setExPassword] = useState('');
  const [exUserId, setExUserId] = useState('');
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserInfoContext);
  const [guideList, setGuideList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/guide/getlist/')
      .then(response => {
        setGuideList(response.data.Names);
        console.log(response.data.Names)
      })
      .catch(error => {
        console.error('Error fetching guide list:', error);
      });
  }, []);
  

  const [isauthorized, setIsAuthorized] = useState(
    localStorage.getItem("isauthorized") || ""
  );
  const [isSigned, setIsSigned] = useState(
    localStorage.getItem("isSigned") === "true" ? true : false
  );
  

  useEffect(() => {
    localStorage.setItem("isauthorized", isauthorized);
  }, [isauthorized]);

  useEffect(() => {
    localStorage.setItem("isSigned", isSigned.toString());
  }, [isSigned]);
  

  const handleSignupClick = () => {
    setUserFormsClass('bounceLeft');
  };

  const handleLoginClick = () => {
    setUserFormsClass('bounceRight');
  };

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
      case 'admin':
        navigate('/admin');
        break;
      case 'student':
        navigate('/student');
        break;
      case 'staff':
        navigate('/staff');
        break;
      default:
        alert("not an valid Role")
    }
  }
  useEffect(() => {
    if (isSigned && isauthorized) {
      handleNavigation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSigned, isauthorized]);

  const handleLogin = (event) => {
	event.preventDefault();
  const data = {
    ExUserId : exUserId,
    ExPassword : exPassword,
  }
  console.log(data)
  axios
    .post("http://127.0.0.1:8000/login/",data)
    .then((response) => {
      if (!response.data) {
        alert("User Can't Found");
      } else {
        setIsSigned(true);
        setIsAuthorized(response.data.Role);
        setUserInfo(response.data);
        console.log(response.data)
        localStorage.setItem('userInfo', JSON.stringify(response.data));
      }
      setExPassword('');
      setExUserId('');
    })
    .catch((error) => {
      console.log("Failed to send request",error)
    })

  }

  const handleSignup = (event) => {
	event.preventDefault();
	const data = {
    User_Name : newUserName,
    User_Id : newUserId,
    Role : selectedRole,
    Password : newPassword,
    Email : newEmail,
    Batch_No : selectedBatchNo,
    Year : selectedYear,
    Staff_Incharge : selectedStaffIncharge,
  };
  axios
    .post("http://127.0.0.1:8000/login/signin/", data)
    .then((response) => {
      console.log(response.data);
      setUserFormsClass('bounceRight');
      if (!response.data) {
        alert("User Can't Found or not Registered");
      } else {
        console.log(response.data)
        setIsSigned(true);
        setIsAuthorized(response.data.Role);
        setUserInfo(response.data);
        localStorage.setItem('userInfo', JSON.stringify(response.data));
      }
      setNewUserName('');
      setNewUserId('');
      setNewPassword('');
      setNewEmail('');
      setSelectedRole('');
      setSelectedStaffIncharge('');
      setSelectedBatchNo('');
      setSelectedYear('');
    })
    .catch((error) => {
      console.log("failed");
    })

  }
   
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
  const handleEmail = (event) => {
    setNewEmail(event.target.value);
  }
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  }

  const handleStaffInchargeChange = (event) => {
    setSelectedStaffIncharge(event.target.value);
  }
  const handleBatchNoChange = (event) => {
    setSelectedBatchNo(event.target.value);
  }
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
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
