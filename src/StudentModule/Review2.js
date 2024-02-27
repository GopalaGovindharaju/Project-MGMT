import React, { useEffect, useState } from 'react';
import './Review2.css';
import axios from 'axios';

function Review2() {

  const [publishChoice, setPublishChoice] = useState('')
  const [answer, setAnswer] = useState(false);
  const [submitEnable, setSubmitEnable] = useState(false)
  const [fileData, setFileData] = useState([]);
  const [formData, setFormData] = useState({
    implementation_80p: null,
    report_roughcopy: null,
    ppt: null,
  });

  const handleChoiceChange = (event) => {
    setSubmitEnable(true)
    const bool = event.target.value;
    setPublishChoice(bool);
    setAnswer(bool === 'yes');
  };

  useEffect(() => {
    const data = {
      id: 3,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_2_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
      setPublishChoice(response.data.project_publish_state ? 'yes' : 'no')
      setAnswer(response.data.project_publish_state ? 'yes' : 'no')
      setFormData((prevFormData) => ({
        ...prevFormData,
        implementation_80p: response.data.project_screenshot_url || '',
        report_roughcopy: response.data.rough_report_url || '',
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
    data.append('implementation_80p', formData.implementation_80p);
    data.append('report_roughcopy', formData.report_roughcopy);
    data.append('ppt', formData.ppt);
    data.append('publish_project', answer);
    console.log(data)

    try {
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const response = await axios.post('http://127.0.0.1:8000/reviewupload/2/', data, {
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
    <div className="App">
      <div className="container1">
        <h1 className="titles">Project Status Update</h1>
        <p className="description">
          The project must reach an 80% completion milestone, with meticulous
          attention to detail and strict adherence to the specified
          requirements. It is imperative that all implementations are thoroughly
          executed to ensure comprehensive fulfillment of the project's
          objectives.{" "}
        </p>
        <form className="form-container" onSubmit={handleSubmit}>
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
                  <label htmlFor="abstract" className="label2">
                    Upload Project Screenshots
                  </label>
                </td>
                <td style={{display:'flex',justifyContent:'space-between'}}>
                  {formData.implementation_80p ? <> <a
                    href={formData.implementation_80p}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Project Screenshots
                  </a> <button className="btn btn-success" style={{ width: "20%", marginRight:'5%' }} onClick={() => handleEdit('implementation_80p')}>Re-Upload</button> </> : <input
                    type="file"
                    id="abstract"
                    name="abstract"
                    className="arrange"
                    accept=".pdf, .doc, .docx"
                    onChange={(event) => handleFileChange(event, 'implementation_80p')}
                  />}
                </td>
                <td>
                  <div> to be confirmed by guide and HOD</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="basePaper" className="label2">
                    Upload Your Rough Report Of The Project
                  </label>
                </td>
                <td style={{display:'flex',justifyContent:'space-between'}}>
                  {formData.report_roughcopy ? <> <a
                    href={formData.report_roughcopy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view Rough Report
                  </a> <button className="btn btn-success" style={{ width: "20%", marginRight:'5%' }} onClick={() => handleEdit('report_roughcopy')}>Re-Upload</button> </> : <input
                    type="file"
                    id="basePaper"
                    name="basePaper"
                    className="arrange"
                    accept=".pdf, .doc, .docx"
                    onChange={(event) => handleFileChange(event, 'report_roughcopy')}
                  />}
                </td>
                <td>
                  <div> to be confirmed by guide and HOD</div>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="ppt" className="label2">
                    Upload Your PPT
                  </label>
                </td>
                <td style={{display:'flex',justifyContent:'space-between'}}>
                  {formData.ppt ? <> <a
                    href={formData.ppt}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to view PPT
                  </a> <button className="btn btn-success" style={{ width: "20%", marginRight:'5%' }} onClick={() => handleEdit('ppt')}>Re-Upload</button> </> : <input
                    type="file"
                    id="ppt"
                    name="ppt"
                    className="arrange"
                    accept=".ppt, .pptx"
                    onChange={(event) => handleFileChange(event, 'ppt')}
                  />}
                </td>
                <td>
                  <div> to be confirmed by guide and HOD</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <label htmlFor="yesNoQuestion" style={{ marginTop: "30px" }}>
              Do You Publish Your Project
            </label>
            <br />
            <select
              className="chitra"
              id="yesNoQuestion"
              value={publishChoice}
              onChange={handleChoiceChange}
            >
              <option value="">Please select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <table>
            <thead>
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
              <td></td>
              <td>
                <button
                  className="btn btn-success"
                  style={{ width: "20%", marginLeft: "60%" }}
                >
                  Next (Review-3)
                </button>
              </td>
            </tr>
            </thead>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Review2;
