import React,{useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../NewStudent/Stud.css';
import ReviewSchedule from './ReviewSchedule';

function Review({}) {

  return (
    <div id="review0Form" className="form-container" style={{position:'relative'}}>
      <form>
        <table><thead><tr>
          <th className="text-center" >TASKS</th>
        <th className="text-center">ACTION</th>
        <th className="text-center">STATUS </th>
        </tr>
        </thead>
          <tbody>
            <tr>
              <td><label htmlFor="projectTitle" className='label1'>Project Title</label></td>
              <td><input type="text" id="projectTitle" name="projectTitle" className="form-control reduced-size" required/></td>
              <td><div> to be confirmed by guide and HOD</div></td>
            </tr>
            <tr>
              <td><label htmlFor="abstract"className='label1' >Abstract Document Submission</label></td>
              <td><input type="file" id="abstract" name="abstract" className="abform" accept=".pdf, .doc, .docx" required/></td>
              <td><div> to be confirmed by guide and HOD</div></td>
            </tr>
            <tr>
              <td><label htmlFor="basePaper" className='label1'>Base Paper Document Submission</label></td>
              <td><input type="file" id="basePaper" name="basePaper" className="abform" accept=".pdf, .doc, .docx" required/></td>
              <td><div> to be confirmed by guide and HOD</div></td>
            </tr>
            <tr>
              <td><label htmlFor="ppt" className='label1'>PPT Document Submission</label></td>
              <td><input type="file" id="ppt" name="ppt" className="abform" accept=".ppt, .pptx" required/></td>
              <td><div> to be confirmed by guide and HOD</div></td>
            </tr>
            <tr><td><button type="submit" className="btn btn-success"style={{width:'35%', marginLeft:'0%'}}>Submit</button></td>
            <td></td>
              <td><button type="submit" className="btn btn-success"style={{width:'45%'}}>Next (Review-1)</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      
      

    </div>
  );
}

export default Review;
