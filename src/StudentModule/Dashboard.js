import React, { useContext, useState } from 'react'
import './dash.css';
import UserInfoContext from '../UsenInfoContext';

function Dashboard() {
	const Email = "nothing";
	const [teamMembers, setTeamMembers] = useState(0);
	const { userInfo } = useContext(UserInfoContext);

	const handleTeamMembersChange = (e) => {
		setTeamMembers(parseInt(e.target.value, 10));
	  };
	  
  const renderTeamMembersInfo = () => {
    const membersInfo = [];
    for (let i = 0; i < teamMembers; i++) {
      membersInfo.push(
        <div key={i} className="mb-3 row">
			<h4>Team Member {i+1}</h4>
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label d-flex flex-row-reverse">
            Reg No
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value={Email} 
            />
          </div>
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label d-flex flex-row-reverse">
            Name
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value={Email} 
            />
          </div>
		  <label htmlFor="staticEmail" className="col-sm-2 col-form-label d-flex flex-row-reverse">
            Class
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value={Email} 
            />
          </div>
		  <label htmlFor="staticEmail" className="col-sm-2 col-form-label d-flex flex-row-reverse">
            Email
          </label>
          <div className="col-sm-10">
            <input
              className="form-control"
              type="text"
              value={Email} 
            />
          </div>
        </div>
      );
    }
    return membersInfo;
  };


  return (
    <div >
      <div class="container">
    <div class="row profile">
		<div class="col-md-3">
			<div class="profile-sidebar">

				<div class="profile-userpic">
					<img src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" class="img-responsive" alt=""/>
				</div>

				<div class="profile-usertitle">
					<div class="profile-usertitle-name">
						{userInfo.Name}
					</div>
					<div class="profile-usertitle-job">
						{userInfo.Role}
					</div>
					<div class="profile-usertitle-name">
						Email : {userInfo.Email}
					</div>
          <div class="profile-usertitle-name">
						Batch No : {userInfo.Batch_No}
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-9">
            <div class="profile-content">
			<div class="mb-3 row">
      <label for="staticEmail" class="col-sm-2 col-form-label d-flex flex-row-reverse">Project Title</label>
    <div class="col-sm-10">
	<input class="form-control" type="text" value={Email} aria-label="readonly input example" readonly/>
    </div>
			<label for="staticEmail" class="col-sm-2 col-form-label d-flex flex-row-reverse">Reg No</label>
    <div class="col-sm-10">
	<input class="form-control" type="text" value={userInfo.User_Id} aria-label="readonly input example" readonly/>
    </div>
    <label for="staticEmail" class="col-sm-2 col-form-label d-flex flex-row-reverse">Class</label>
    <div class="col-sm-10">
	<input class="form-control" type="text" value={Email} aria-label="readonly input example" readonly/>
    </div>
	<label for="staticEmail" class="col-sm-2 col-form-label d-flex flex-row-reverse">Team Members</label>
	<div class="col-sm-10">
	<select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleTeamMembersChange}
                  >
                    <option value={0} selected>
                      Select Members
                    </option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select></div>
  </div>{renderTeamMembersInfo()}
  
			
            </div>
		</div>
	</div>
</div>
    </div>
  )
}

export default Dashboard
