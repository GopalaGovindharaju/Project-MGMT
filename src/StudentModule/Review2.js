// App.js
import React, { useState } from 'react';
import './Review2.css';

function App() {
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
    <div className="App">
      <div className="container">
        
        
        
        <form onSubmit={submitReview2Form}>
        <table>
          <thead>
            <tr>
              <th>TASK</th>
              <th>ACTION</th>
              <th>CONFORMATION</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td><label htmlFor="abstract"className='label1' >Upload Project Screenshots</label></td>
              <td><input type="file" id="abstract" name="abstract" className="form-control-file reduced-size" accept=".gif , .png , .jpeg" required/></td>
              <td><div>to be confirmed by guide or HOD</div></td>
            </tr>
            <tr>
              <td><label htmlFor="basePaper" className='label1'>Upload Your Rough Report Of The Project</label></td>
              <td><input type="file" id="basePaper" name="basePaper" className="form-control-file reduced-size" accept=".pdf, .doc, .docx" required/></td>
              <td><div>to be confirmed by guide or HOD</div></td>
            </tr>
            <tr>
              <td><label htmlFor="ppt" className='label1'>Upload Your PPT</label></td>
              <td><input type="file" id="ppt" name="ppt" className="form-control-file reduced-size" accept=".ppt, .pptx" required/></td>
              <td><div>to be confirmed by guide or HOD</div></td>
            </tr>
          </tbody>
        </table>
          <label htmlFor="yesNoQuestion">Do You Publish Your Project</label>
          <br/>
          <select  className='chitra'       id="yesNoQuestion" value={answer} onChange={handleAnswerChange} required>
            <option value="">Please select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <form onSubmit={submitReview2Form}>
  
  <div className="submit-review">
    <button type="submit" className="custom-btn">Submit Review 2</button>
  </div>
</form>

        </form>
      </div>
    </div>
  );
}

export default App;
