import React, { useState } from 'react';
import './Review3.css';
import axios from 'axios';

const Review3 = () => {
  const [formData, setFormData] = useState({
    project_demo: null,
    project_screenshot: null,
    report: null,
    ppt: null,
  });

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      [fieldName]: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('id', 3);
    data.append('project_demo', formData.project_demo);
    data.append('project_screenshot', formData.project_screenshot);
    data.append('report', formData.report);
    data.append('ppt', formData.ppt);

    try {
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const response = await axios.post('http://127.0.0.1:8000/reviewupload/3/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };
  return (
    <div className="form-container">
      <h1 className="titles">Project Status Update</h1>
      <p className="description">
        All modules must be implemented in both the frontend and backend. Ensure
        that all implementations are completed thoroughly and adhere to the
        specified requirements.
      </p>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th className="text-center">TASKS</th>
              <th className="text-center">ACTION</th>
              <th className="text-center">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="video" className="label2">
                    Upload Project Demo (Video)
                  </label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="file"
                    id="video"
                    name="video"
                    className=""
                    accept="video/*"
                    onChange={(event) => handleFileChange(event, 'project_demo')}
                    
                  />
                </div>
              </td>
              <td>
                <div>to be confirmed by guide and HOD</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="screenshots" className="label2">
                    Upload Project Screenshots
                  </label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="file"
                    id="screenshots"
                    name="screenshots[]"
                    className=""
                    accept=".pdf, .doc, .docx"
                    onChange={(event) => handleFileChange(event, 'project_screenshot')}
                  />
                </div>
              </td>
              <td>
                <div>to be confirmed by guide and HOD</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="documentation" className="label2">
                    Documentation
                  </label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="file"
                    id="documentation"
                    name="documentation"
                    className=""
                    accept=".pdf, .doc, .docx"
                    onChange={(event) => handleFileChange(event, 'report')}
                  />
                </div>
              </td>
              <td>
                <div>to be confirmed by guide and HOD</div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="ppt" className="label2">
                    PPT Document Submission
                  </label>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="file"
                    id="ppt"
                    name="ppt"
                    className=""
                    accept=".ppt, .pptx"
                    onChange={(event) => handleFileChange(event, 'ppt')}
                  />
                </div>
              </td>
              <td>
                <div>to be confirmed by guide and HOD</div>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ width: "35%", marginLeft: "20%" }}
                >
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Review3;
