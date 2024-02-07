import React from 'react';
import './Review1.css';

class ReviewForm extends React.Component {
  submitReview1Form = (event) => {
    event.preventDefault();
    alert('Review 1 form submitted. Implement this function as needed.');
  }

  render() {
    return (
      <div>
        <form className="container1" onSubmit={this.submitReview1Form}>
          <table>
            <thead>
                <tr>
                    <th className='tablehead'><b>TASKS</b></th>
                    <th className='tablehead'><b>ACTION</b></th>
                    <th className='tablehead'><b>STATUS</b></th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td><label htmlFor="abstract" className='labletd'>Abstract Document Submission</label></td>
                <td><input type="file" id="abstract" name="abstract" className="label4" accept=".pdf, .doc, .docx" required /></td>
                <td><label className='labeltd'>To be confirmed by Guide or HOD</label></td>
              </tr>
              <tr>
                <td><label htmlFor="moduleDetails" className='labletd'>System Architecture Submission</label></td>
                <td><input type="file" id="moduleDetails" name="moduleDetails" className="label4" accept=".pdf, .doc, .docx" required /></td>
                <td><label className='labeltd'>To be confirmed by Guide or HOD</label></td>
              </tr>
              <tr>
                <td><label htmlFor="moduleDetails" className='labletd'>Module Types Submission</label></td>
                <td><input type="file" id="moduleDetails" name="moduleDetails" className="label4" accept=".pdf, .doc, .docx" required /></td>
                <td><label className='labeltd'>To be confirmed by Guide or HOD</label></td>
              </tr>
              <tr>
                <td><label htmlFor="architecturePicture" className='labletd'>Module Techniques Submission</label></td>
                <td><input type="file" id="architecturePicture" name="architecturePicture" className="label4" accept=".jpg, .jpeg, .png" required /></td>
                <td><label className='labeltd'>To be confirmed by Guide or HOD</label></td>
              </tr>
              <tr>
                <td><label htmlFor="literatureSurvey" className='labletd'>Literature Survey Submission</label></td>
                <td><input type="file" id="literatureSurvey" name="literatureSurvey" className="label4" accept=".pdf, .doc, .docx" required /></td>
                <td><label className='labeltd'>To be confirmed by Guide or HOD</label></td>
              </tr>
              <tr>
                <td><label htmlFor="moduleTypes" className='labletd'>Expected Outcomes (Screenshot)</label></td>
                <td><input type="file" id="moduleTypes" name="moduleTypes" className="label4" accept=".pdf, .doc, .docx" required /></td>
                <td><label className='labeltd'>To be confirmed by Guide or HOD</label></td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="btn btn-success"style={{width:'20%'}}>Submit</button>
        </form>
        <button type="submit" className="btn btn-success"style={{width:'20%'}}>Next (Review-2)</button>
      </div>
    );
  }
}

export default ReviewForm;
