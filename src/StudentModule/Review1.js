import React, { useEffect, useState } from 'react'
import './Review1.css';
import axios from 'axios';

function Review1() {
  const [submitEnable, setSubmitEnable] = useState(false)
  const [fileData, setFileData] = useState([]);
  const [formData, setFormData] = useState({
    architecture: null,
    modules: null,
    modules_description: null,
    litrature_survey: null,
    outcome_images: null,
    ppt: null,
  });

  useEffect(() => {
    const data = {
      id: 3,
    }
    axios.post('http://127.0.0.1:8000/addStudent/get_review_1_files/',data)
    .then((response) => {
      console.log(response.data)
      setFileData(response.data)
      setFormData((prevFormData) => ({
        ...prevFormData,
        architecture: response.data.system_architecture_url || '',
        modules: response.data.module_types_url || '',
        modules_description: response.data.module_techniques_url || '',
        litrature_survey: response.data.literature_survey_url || '',
        outcome_images: response.data.expected_outcome_url || '',
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
    data.append('architecture', formData.architecture);
    data.append('modules', formData.modules);
    data.append('modules_description', formData.modules_description);
    data.append('litrature_survey', formData.litrature_survey);
    data.append('outcome_images', formData.outcome_images);
    data.append('ppt', formData.ppt);
    console.log(data)

    try {
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const response = await axios.post('http://127.0.0.1:8000/reviewupload/1/', data, {
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
    <div style={{ maxHeight: "100vh", overflowY: "scroll" }}>
      <div>
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
                  <label htmlFor="ppt" className="labletd">
                    PPT
                  </label>
                </td>
                <td style={{display:'flex',justifyContent:'space-between'}}>
                  {formData.ppt ? (
                    <>
                      {" "}
                      <a
                        href={formData.ppt}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here to view PPT
                      </a>{" "}
                      <button
                        className="btn btn-success"
                        style={{ width: "20%", marginRight:'5%' }}
                        onClick={() => handleEdit("ppt")}
                      >
                        Re-Upload
                      </button>{" "}
                    </>
                  ) : (
                    <input
                      type="file"
                      id="ppt"
                      name="ppt"
                      className="label4"
                      accept=".ppt, .pptx"
                      onChange={(event) => handleFileChange(event, "ppt")}
                    />
                  )}
                </td>
                <td>
                  <label className="labeltd">
                    To be confirmed by Guide or HOD
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="moduleDetails" className="labletd">
                    System Architecture Submission
                  </label>
                </td>
                <td style={{display:'flex',justifyContent:'space-between'}}>
                  {formData.architecture ? (
                    <>
                      {" "}
                      <a
                        href={formData.architecture}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here to view Architecture
                      </a>{" "}
                      <button
                        className="btn btn-success"
                        style={{ width: "20%", marginRight:'5%' }}
                        onClick={() => handleEdit("architecture")}
                      >
                        Re-Upload
                      </button>{" "}
                    </>
                  ) : (
                    <input
                      type="file"
                      id="moduleDetails"
                      name="moduleDetails"
                      className="label4"
                      accept=".pdf, .doc, .docx"
                      onChange={(event) =>
                        handleFileChange(event, "architecture")
                      }
                    />
                  )}
                </td>
                <td>
                  <label className="labeltd">
                    To be confirmed by Guide or HOD
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="moduleDetails" className="labletd">
                    Module Types Submission
                  </label>
                </td>
                <td style={{display:'flex',justifyContent:'space-between'}}>
                  {formData.modules ? (
                    <>
                      {" "}
                      <a
                        href={formData.modules}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here to view Modules
                      </a>{" "}
                      <button
                        className="btn btn-success"
                        style={{ width: "20%", marginRight:'5%' }}
                        onClick={() => handleEdit("modules")}
                      >
                        Re-Upload
                      </button>{" "}
                    </>
                  ) : (
                    <input
                      type="file"
                      id="moduleDetails"
                      name="moduleDetails"
                      className="label4"
                      accept=".pdf, .doc, .docx"
                      onChange={(event) => handleFileChange(event, "modules")}
                    />
                  )}
                </td>
                <td>
                  <label className="labeltd">
                    To be confirmed by Guide or HOD
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="architecturePicture" className="labletd">
                    Module Techniques Submission
                  </label>
                </td>
                <td style={{display:'flex',justifyContent:'space-between'}}>
                  {formData.modules_description ? (
                    <>
                      {" "}
                      <a
                        href={formData.modules_description}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here to view Modules Description
                      </a>{" "}
                      <button
                        className="btn btn-success"
                        style={{ width: "20%", marginRight:'5%' }}
                        onClick={() => handleEdit("modules_description")}
                      >
                        Re-Upload
                      </button>{" "}
                    </>
                  ) : (
                    <input
                      type="file"
                      id="architecturePicture"
                      name="architecturePicture"
                      className="label4"
                      accept=".pdf, .doc, .docx"
                      onChange={(event) =>
                        handleFileChange(event, "modules_description")
                      }
                    />
                  )}
                </td>
                <td>
                  <label className="labeltd">
                    To be confirmed by Guide or HOD
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="literatureSurvey" className="labletd">
                    Literature Survey Submission
                  </label>
                </td>
                <td style={{display:'flex',justifyContent:'space-between'}}>
                  {formData.litrature_survey ? (
                    <>
                      {" "}
                      <a
                        href={formData.litrature_survey}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here to view Litrature Survey
                      </a>{" "}
                      <button
                        className="btn btn-success"
                        style={{ width: "20%", marginRight:'5%' }}
                        onClick={() => handleEdit("litrature_survey")}
                      >
                        Re-Upload
                      </button>{" "}
                    </>
                  ) : (
                    <input
                      type="file"
                      id="literatureSurvey"
                      name="literatureSurvey"
                      className="label4"
                      accept=".pdf, .doc, .docx"
                      onChange={(event) =>
                        handleFileChange(event, "litrature_survey")
                      }
                    />
                  )}
                </td>
                <td>
                  <label className="labeltd">
                    To be confirmed by Guide or HOD
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="moduleTypes" className="labletd">
                    Expected Outcomes (Screenshot)
                  </label>
                </td>
                <td style={{display:'flex',justifyContent:'space-between'}}>
                  {formData.outcome_images ? (
                    <>
                      {" "}
                      <a
                        href={formData.outcome_images}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click here to view Outcome Images
                      </a>{" "}
                      <button
                        className="btn btn-success"
                        style={{ width: "20%", marginRight:'5%' }}
                        onClick={() => handleEdit("outcome_images")}
                      >
                        Re-Upload
                      </button>{" "}
                    </>
                  ) : (
                    <input
                      type="file"
                      id="moduleTypes"
                      name="moduleTypes"
                      className="label4"
                      accept=".pdf, .doc, .docx"
                      onChange={(event) =>
                        handleFileChange(event, "outcome_images")
                      }
                    />
                  )}
                </td>
                <td>
                  <label className="labeltd">
                    To be confirmed by Guide or HOD
                  </label>
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
                <td></td>
                <td>
                  <button className="btn btn-success" style={{ width: "48%" }}>
                    Next (Review-2)
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Review1
