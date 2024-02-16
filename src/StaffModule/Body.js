import React from 'react';
import './Body.css'; // Import a separate CSS file for styling
import Verify from './Verify';
import Stud from './Stud';
import Review0 from './Review0';
import Review1 from './Review1';
import Review2 from './Review2';
import Review3 from './Review3';

function Body() {
  return (
    <div className="full-height">
      <div className="row full-height" style={{ border: '1px solid #000', height:'800px'}}>
        <div className="col-4" style={{ borderRight: '1px solid #000', padding: '10px', height: '100%' }}>
        
          <Stud/>
          
        </div>
        <div className="col-8" style={{ padding: '10px', height: '100%' }}>
          <Verify/>
         
          <Review1/>
        </div>
      </div>
    </div>
  );
}

export default Body;
