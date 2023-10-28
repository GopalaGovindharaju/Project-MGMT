import React, { useState } from 'react'

function ProjectDetail() {
    const [fieldList, setFieldList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddButtonClick = () => {
    if (title && description) {
      // Add the new title and description to the array
      setFieldList([...fieldList, { title, description }]);
      // Clear the input fields
      setTitle('');
      setDescription('');
    }
  };


  return (
    <div>
      <div className="container">
          <div className="col-md-12">
            <div className="profile-content">
              <div>
              {fieldList.map((field, index) => (
                <div key={index}>
                  <h3>{field.title}</h3>
                  <p>{field.description}</p>
                </div>
              ))}
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="d-flex justify-content-start">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Title/Sub Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="d-flex justify-content-start">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <button onClick={handleAddButtonClick} className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProjectDetail
