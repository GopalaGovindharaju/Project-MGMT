import React,{useState} from 'react'


function Review2() {
    const [sliderValue, setSliderValue] = useState(50);
    const [answer, setAnswer] = useState('');
  
    const updateSliderValue = (value) => {
      setSliderValue(value);
    };
  
    const handleAnswerChange = (event) => {
      setAnswer(event.target.value);
    };
  
    const submitReview2Form = (event) => {
      event.preventDefault();
      // Handle form submission for Review 2 as needed
      alert('Review 2 form submitted. Implement this function as needed.');
    };
  return (
    <div>
      <div class="container mt-5">
        <table class="table">
          <thead>
            <tr>
              <th>TASKS</th>
              <th>ACTION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >Upload Project Screenshots</td>
              <td>
              <input type="file" class="formss" accept=".pdf, .doc, .docx" disabled />
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" class="btn btn-danger ml-2">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Upload Your Rough Report Of The Project</td>
              <td>
                <input type="file" class="formss" accept=".pdf, .doc, .docx" disabled />
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" class="btn btn-danger ml-2">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Upload Your PPT</td>
              <td>
                <input type="file" class="formss" accept=".pdf, .doc, .docx" disabled />
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" class="btn btn-danger ml-2">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td>Do You Publish Your Project</td>
              <td>
              <select  className='chitra'       id="yesNoQuestion" value={answer} onChange={handleAnswerChange} required>
            <option value="">Please select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Approve
                </button>
                <button type="button" class="btn btn-danger ml-2">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td colspan="2"></td>
              <td>
                <button type="submit" class="btn btn-success" style={{ width: "100%" }}>
                Forward To HOD                </button>
              </td>
            </tr>
      
          </tbody>
        </table>

        <div id="reviewSchedule" style={{ display: "none" }}></div>
      </div>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  )
}

export default Review2
