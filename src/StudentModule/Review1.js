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
        <form className="form-container" onSubmit={this.submitReview1Form}>
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
              <tr>
                <td><button type="submit" className="btn btn-success"style={{width:'35%', marginRight:'10%'}}>Submit</button></td>
                <td></td>
                <td><button type="submit" className="btn btn-success"style={{width:'48%'}}>Next (Review-2)</button></td>
              </tr>
            </tbody>
          </table>
          
        </form>
        
      </div>
    );
  }
}

export default ReviewForm;
