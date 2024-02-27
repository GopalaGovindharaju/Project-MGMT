import React, { useEffect, useState } from 'react';
import './Review3.css';
import axios from 'axios';

const Review3 = () => {
  const [submitEnable, setSubmitEnable] = useState(false)
  const [fileData, setFileData] = useState([]);
  const [formData, setFormData] = useState({
    project_demo: null,
    project_screenshot: null,
    report: null,
    ppt: null,
  });

  useEffect(() => {
    const data = {
      id: 3,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_3_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
      setFormData((prevFormData) => ({
        ...prevFormData,
        project_demo: response.data.project_demo_video_url || '',
        project_screenshot: response.data.project_screenshot_url || '',
        report: response.data.report_url || '',
        ppt: response.data.ppt_url || '',
      }));
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  useEffect(() => {
    for(const key in fileData){
      if(fileData.hasOwnProperty(key)){
        if(fileData[key] === null || fileData[key] === ''){
          setSubmitEnable(true)
        }
      }
    }
    
  },[fileData])

  const handleFileChange = (event, fieldName) => {
    setSubmitEnable(true)
    const file = event.target.files[0];
    setFormData({
      ...formData,
      [fieldName]: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData.abstract)
    const data = new FormData();
    data.append('id', 3);
    data.append('project_demo', formData.project_demo);
    data.append('project_screenshot', formData.project_screenshot);
    data.append('report', formData.report);
    data.append('ppt', formData.ppt);
    console.log(data)

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

  const handleEdit = (param) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [param]: '',
    }));
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
                  {formData.project_demo ? <> <a
                    href={formData.project_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Project Demo
                  </a> <button className="btn btn-success" style={{ width: "20%" }} onClick={() => handleEdit('project_demo')}>Re-Upload</button> </> : <input
                    type="file"
                    id="video"
                    name="video"
                    className=""
                    accept="video/*"
                    onChange={(event) => handleFileChange(event, 'project_demo')}
                  />}
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
                  {formData.project_screenshot ? <> <a
                    href={formData.project_screenshot}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Project Screenshot
                  </a> <button className="btn btn-success" style={{ width: "20%" }} onClick={() => handleEdit('project_screenshot')}>Re-Upload</button> </> : <input
                    type="file"
                    id="screenshots"
                    name="screenshots[]"
                    className=""
                    accept=".pdf, .doc, .docx"
                    onChange={(event) => handleFileChange(event, 'project_screenshot')}
                  />}
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
                  {formData.report ? <> <a
                    href={formData.report}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Project Report
                  </a> <button className="btn btn-success" style={{ width: "20%" }} onClick={() => handleEdit('report')}>Re-Upload</button> </> : <input
                    type="file"
                    id="documentation"
                    name="documentation"
                    className=""
                    accept=".pdf, .doc, .docx"
                    onChange={(event) => handleFileChange(event, 'report')}
                  />}
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
                  {formData.ppt ? <> <a
                    href={formData.ppt}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view PPT
                  </a> <button className="btn btn-success" style={{ width: "20%" }} onClick={() => handleEdit('ppt')}>Re-Upload</button> </> : <input
                    type="file"
                    id="ppt"
                    name="ppt"
                    className=""
                    accept=".ppt, .pptx"
                    onChange={(event) => handleFileChange(event, 'ppt')}
                  />}
                  
                </div>
              </td>
              <td>
                <div>to be confirmed by guide and HOD</div>
              </td>
            </tr>
            <tr>
              <td>
              {submitEnable && (
                    <button
                      type="submit"
                      className="btn btn-success"
                      style={{ width: "35%", marginLeft: "20%" }}
                    >
                      Submit
                    </button>
                  )}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Review3;
