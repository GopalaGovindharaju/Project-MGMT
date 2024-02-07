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
      <div className="container1">
      <h1 className='titles'>Project Status Update</h1>
      <p className="description">
      The project must reach an 80% completion milestone, with meticulous attention to detail and strict adherence to the specified requirements. It is imperative that all implementations are thoroughly executed to ensure comprehensive fulfillment of the project's objectives.      </p>
        <form className='form-container' onSubmit={submitReview2Form}>
        <table>
          <thead >
            <tr>
              <th>TASKS</th>
              <th>ACTION</th>
              <th>STATUS</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><label htmlFor="abstract"className='label2' >Upload Project Screenshots</label></td>
              <td><input type="file" id="abstract" name="abstract" className="arrange" accept=".gif , .png , .jpeg" required/></td>
              <td><div> to be confirmed by guide and HOD</div></td>
            </tr>
            <tr>
              <td><label htmlFor="basePaper" className='label2'>Upload Your Rough Report Of The Project</label></td>
              <td><input type="file" id="basePaper" name="basePaper" className="arrange" accept=".pdf, .doc, .docx" required/></td>
              <td><div> to be confirmed by guide and HOD</div></td>
            </tr>
            <tr>
              <td><label htmlFor="ppt" className='label2'>Upload Your PPT</label></td>
              <td><input type="file" id="ppt" name="ppt" className="arrange" accept=".ppt, .pptx" required/></td>
              <td><div> to be confirmed by guide and HOD</div></td>
            </tr>
          </tbody>
        </table>
        <div>
          <label htmlFor="yesNoQuestion"style={{marginTop:'30px'}}>Do You Publish Your Project</label>
          <br/>
          <select  className='chitra'       id="yesNoQuestion" value={answer} onChange={handleAnswerChange} required>
            <option value="">Please select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          </div>
          <table>
            <tr>
              <td><button type="submit" className="btn btn-success"style={{width:'31%', marginright:'20px'}}>Submit</button></td> 
              <td></td>
              <td><button type="submit" className="btn btn-success"style={{width:'20%', marginLeft:'60%'}}>Next (Review-3)</button></td>
            </tr>
          </table>
          <form onSubmit={submitReview2Form}>
  
          

</form>

        </form>

      </div>
    </div>
  );
}

export default App;
