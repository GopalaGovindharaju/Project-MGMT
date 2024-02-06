import React from 'react';
import './Review3.css'; // Make sure to import your CSS file

const Review3 = () => {
  return (
    <div className="form-container">
         <p className="description">
        All modules must be implemented in both the frontend and backend. Ensure that all implementations are completed thoroughly and adhere to the specified requirements.
      </p>
      <form>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="video"className='label2'>Upload Project Demo (Video)</label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input type="file" id="video" name="video" className="form-control-file" accept="video/*" required />
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
                  <input type="file" id="screenshots" name="screenshots[]" className="form-control-file" accept=".jpg, .jpeg, .png" multiple required />
                  
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
                  <input type="file" id="documentation" name="documentation" className="form-control-file" accept=".jpg, .jpeg, .png" multiple required />
                  
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
                  <input type="file" id="ppt" name="ppt" className="form-control-file" accept=".jpg, .jpeg, .png" multiple required />
                  
                  
                </div>
              </td>
              <td>
                <div>
                  to be confirmed by guide and HOD
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        

        <button type="submit" className="btn btn-primary btn-block">Submit Review 3</button>
      </form>
    </div>
  );
};

export default Review3;
