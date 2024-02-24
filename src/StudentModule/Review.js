import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Review() {
  const [formData, setFormData] = useState({
    projectTitle: '',
    abstract: null,
    basePaper: null,
    ppt: null,
  });


  const handleTitleChange = (event) => {
    const title = event.target.value;
    setFormData({
      ...formData,
      projectTitle: title,
    });
  };

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
    data.append('title', formData.projectTitle);
    data.append('abstract', formData.abstract);
    data.append('basePaper', formData.basePaper);
    data.append('ppt', formData.ppt);

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table style={{ margin: "20px" }}>
          <thead>
            <tr>
              <th className="text-center">TASKS</th>
              <th className="text-center">ACTION</th>
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
                  onChange={handleTitleChange}
                />
              </td>
              <td>
                <div> to be confirmed by guide and HOD</div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="abstract" className="label1">
                  Abstract Document Submission
                </label>
              </td>
              <td>
                <input
                  type="file"
                  id="abstract"
                  name="abstract"
                  className="abform"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) => handleFileChange(event, 'abstract')}
                />
              </td>
              <td>
                <div> to be confirmed by guide and HOD</div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="basePaper" className="label1">
                  Base Paper Document Submission
                </label>
              </td>
              <td>
                <input
                  type="file"
                  id="basePaper"
                  name="basePaper"
                  className="abform"
                  accept=".pdf, .doc, .docx"
                  onChange={(event) => handleFileChange(event, 'basePaper')}
                />
              </td>
              <td>
                <div> to be confirmed by guide and HOD</div>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="ppt" className="label1">
                  PPT Document Submission
                </label>
              </td>
              <td>
                <input
                  type="file"
                  id="ppt"
                  name="ppt"
                  className="abform"
                  accept=".ppt, .pptx"
                  onChange={(event) => handleFileChange(event, 'ppt')}
                />
              </td>
              <td>
                <div> to be confirmed by guide and HOD</div>
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
