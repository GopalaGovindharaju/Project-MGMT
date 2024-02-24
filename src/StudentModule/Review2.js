import React, { useState } from 'react';
import './Review2.css';
import axios from 'axios';

function Review2() {

  const [publishChoice, setPublishChoice] = useState('')
  const [answer, setAnswer] = useState(false);

  const handleChoiceChange = (event) => {
    const bool = event.target.value;
    setPublishChoice(bool);
    setAnswer(bool === 'yes');
  };

  const [formData, setFormData] = useState({
    implementation_80p: null,
    report_roughcopy: null,
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
    data.append('implementation_80p', formData.implementation_80p);
    data.append('report_roughcopy', formData.report_roughcopy);
    data.append('ppt', formData.ppt);
    data.append('publish_project', answer);

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
                <td>
                  <input
                    type="file"
                    id="abstract"
                    name="abstract"
                    className="arrange"
                    accept=".pdf, .doc, .docx"
                    onChange={(event) => handleFileChange(event, 'implementation_80p')}
                    required
                  />
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
                <td>
                  <input
                    type="file"
                    id="basePaper"
                    name="basePaper"
                    className="arrange"
                    accept=".pdf, .doc, .docx"
                    onChange={(event) => handleFileChange(event, 'report_roughcopy')}
                    required
                  />
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
                <td>
                  <input
                    type="file"
                    id="ppt"
                    name="ppt"
                    className="arrange"
                    accept=".ppt, .pptx"
                    onChange={(event) => handleFileChange(event, 'ppt')}
                    required
                  />
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
              required
            >
              <option value="">Please select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <table>
            <tr>
              <td>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ width: "31%", marginLeft: "20%" }}
                >
                  Submit
                </button>
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
          </table>
        </form>
      </div>
    </div>
  );
}

export default Review2;
