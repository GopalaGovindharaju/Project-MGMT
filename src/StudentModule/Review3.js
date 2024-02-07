import React from 'react';
import './Review3.css'; // Make sure to import your CSS file

const Review3 = () => {
  return (
    <div className="form-container">
      <h1 className='titles'>Project Status Update</h1>
         <p className="description">
        All modules must be implemented in both the frontend and backend. Ensure that all implementations are completed thoroughly and adhere to the specified requirements.
      </p>
      <form>
        <table ><thead><tr><th>TASKS</th><th>ACTION</th><th>STATUS</th></tr></thead>
          <tbody>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="video"className='label2'>Upload Project Demo (Video)</label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="file" id="video" name="video" className="" accept="video/*" required />
                </div>
              </td>
              <td>
                <div>
                  to be confirmed by guide and HOD
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="screenshots"className='label2'>Upload Project Screenshots</label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="file" id="screenshots" name="screenshots[]" className="" accept=".jpg, .jpeg, .png" multiple required />
                  
                </div>
              </td>
              <td>
                <div>
                  to be confirmed by guide and HOD
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="documentation"className='label2'>documentation</label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="file" id="documentation" name="documentation" className="" accept=".jpg, .jpeg, .png" multiple required />
                  
                </div>
              </td>
              <td>
                <div>
                  to be confirmed by guide and HOD
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="ppt"className='label2'>PPT</label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="file" id="ppt" name="ppt" className="" accept=".jpg, .jpeg, .png" multiple required />
                  
                  
                </div>
              </td>
              <td>
                <div>
                  to be confirmed by guide and HOD
                </div>
              </td>
            </tr>
            <tr>
              <td><button type="submit" className="btn btn-success" style={{ width: '35%', marginRight:'10%' }}>Submit</button></td>
            </tr>

          </tbody>
        </table>
        

        
      </form>
    </div>
  );
};

export default Review3;
