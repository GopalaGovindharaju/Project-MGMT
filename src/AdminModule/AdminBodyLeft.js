import React from 'react'
import '../StudentModule/Navb.css'
import './AdminBody.css'

function AdminBodyLeft() {
  return (
    <div className="admin-body-left">
      <div className="guide-detail">
        <nav>
          <div className="navbar-options">
            <div id="navbar-option">Guide Details</div>
          </div>
        </nav>
        <div className="guide-info">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td className='col-7'>Mrs. R. L. Indu Lekha</td>
              </tr>
              <tr>
                <th scope="row">ID</th>
                <td className='col-7'>12345678</td>
              </tr>
              <tr>
                <th scope="row">Designation</th>
                <td className='col-7'>Assistant Professor</td>
              </tr>
              <tr>
                <th scope="row">Department</th>
                <td className='col-7'>CSE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="student-detail">
        <nav>
          <div className="navbar-options">
            <div id="navbar-option">Students Detail</div>
          </div>
        </nav>
        <div className="student-info">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Department</th>
                <td className='col-7'>CSE</td>
              </tr>
              <tr>
                <th scope="row">Batch</th>
                <td className='col-7'>2020 - 2024</td>
              </tr>
            </tbody>
          </table>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col" className='col-7'>Reg NO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gopala G</td>
                <td className='col-7'>AC20UCS034</td>
              </tr>
              <tr>
                <td>Gopal G</td>
                <td className='col-7'>AC20UCS035</td>
              </tr>
              <tr>
                <td>Gopu G</td>
                <td className='col-7'>AC20UCS036</td>
              </tr>
              <tr>
                <td>Gops G</td>
                <td className='col-7'>AC20UCS037</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminBodyLeft
