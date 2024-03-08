import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Review() {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [submitEnable, setSubmitEnable] = useState(false)
  const [fileData, setFileData] = useState([]);
  const [formData, setFormData] = useState({
    projectTitle: '',
    abstract: null,
    basePaper: null,
    ppt: null,
  });
  const handleTitleChange = (event) => {
    const title = event.target.value;
    setSubmitEnable(true)
    setFormData({
      ...formData,
      projectTitle: title,
    });
  };

  useEffect(() => {
    const data = {
      id: userInfo.ID,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_0_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
      setFormData((prevFormData) => ({
        ...prevFormData,
        projectTitle: response.data.title || '',
        abstract: response.data.abstract_url || '',
        basePaper: response.data.base_paper_url || '',
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
    data.append('id', userInfo.ID);
    data.append('title', formData.projectTitle);
    data.append('abstract', formData.abstract);
    data.append('basePaper', formData.basePaper);
    data.append('ppt', formData.ppt);
    console.log(data)

    try {
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const response = await axios.post('http://127.0.0.1:8000/reviewupload/0/', data, {
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
    <div>
      <form onSubmit={handleSubmit}>
        <table style={{ margin: "20px", height:'50vh' }}>
          <thead>
            <tr>
              <th className="text-center col-3">TASKS</th>
              <th className="text-center col-6 m-6">ACTION</th>
              <th className="text-center">STATUS </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="projectTitle" className="label1">
                  Project Title
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="projectTitle"
                  name="projectTitle"
                  className="form-control reduced-size"
                  value={formData.projectTitle}
                  onChange={handleTitleChange}
                />
              </td>
              <td>
                {fileData.title_status ? fileData.hod_status ?  <div>title confirmed</div> : <div>to be confirmed by hod</div>:<div>to be confirmed by guide</div>}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="abstract" className="label1">
                  Abstract Document Submission
                </label>
              </td>
              <td style={{display:'flex',justifyContent:'space-between'}}>
                {formData.abstract ? <> <a
                    href={formData.abstract}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Abstract
                  </a> <button className="btn btn-success" style={{ width: "20%", marginRight:"10px" }} onClick={() => handleEdit('abstract')}>Re-Upload</button> </> : <input
                  type="file"
                  id="abstract"
                  name="abstract"
                  className="abform"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) => handleFileChange(event, 'abstract')}
                />}
                
              </td>
              <td>
              {fileData.abstract_status ? fileData.hod_status ?  <div>Abstract confirmed</div> : <div>to be confirmed by hod</div>:<div>to be confirmed by guide</div>}

              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="basePaper" className="label1">
                  Base Paper Document Submission
                </label>
              </td>
              <td style={{display:'flex',justifyContent:'space-between'}}>
                {formData.basePaper ?  <> <a
                    href={formData.basePaper}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Base Paper
                  </a> <button className="btn btn-success" style={{ width: "20%", marginRight:"10px" }} onClick={() => handleEdit('basePaper')}>Re-Upload</button> </> : <input
                  type="file"
                  id="basePaper"
                  name="basePaper"
                  className="abform"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) => handleFileChange(event, 'basePaper')}
                />}
                
              </td>
              <td>
              {fileData.base_paper_status ? fileData.hod_status ?  <div>Base Paper confirmed</div> : <div>to be confirmed by hod</div>:<div>to be confirmed by guide</div>}

              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="ppt" className="label1">
                  PPT Document Submission
                </label>
              </td>
              <td style={{display:'flex',justifyContent:'space-between'}}>
                {formData.ppt ?  <> <a
                    href={formData.ppt}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view PPT
                  </a> <button className="btn btn-success" style={{ width: "20%", marginRight:"10px" }} onClick={() => handleEdit('ppt')}>Re-Upload</button> </> : <input
                  type="file"
                  id="ppt"
                  name="ppt"
                  className="abform"
                  accept=".ppt, .pptx"
                  onChange={(event) => handleFileChange(event, 'ppt')}
                />}
                
              </td>
              <td>
              {fileData.ppt_status ? fileData.hod_status ?  <div>PPT confirmed</div> : <div>to be confirmed by hod</div>:<div>to be confirmed by guide</div>}
              </td>
            </tr>
            <tr>
              <td>
                {submitEnable && <button
                  type="submit"
                  className="btn btn-success"
                  style={{ width: "35%", marginLeft: "20%" }}
                >
                  Submit
                </button>}
              </td>
              <td></td>
              <td>
                <button
                  className="btn btn-success"
                  style={{ width: "45%" }}
                >
                  Next (Review-1)
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Review;
