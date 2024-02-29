import React,{useState} from 'react';
import './Body.css';
import Verify from './Verify';
import Stud from './Stud';
import { Outlet } from 'react-router';
import ReviewDate from './ReviewDate';
import Chatmsg from '../StudentModule/Chatmsg'
import Chatmsg1 from '../StudentModule/Chatmsg1'

function Body({ID}) {
  const [isTabOpen, setIsTabOpen] = useState(false);

  return (
    <div className="full-height">
      <div className="row full-height" style={{ border: '1px solid #000', height:'800px'}}>
        <div className="col-4" style={{ borderRight: '1px solid #000', padding: '10px', height: '100%' }}>
        
          <Stud/>
          <ReviewDate/>
          {ID}
        </div>
        <div className="col-8" style={{ padding: '10px', height: '100%' }}>
          <Verify/>
          <Outlet context={ID}/>
          <Chatmsg setIsTabOpen={setIsTabOpen}/>
      {isTabOpen && <Chatmsg1 setIsTabOpen={setIsTabOpen}/> }
        </div>
      </div>
    </div>
  );
}

export default Body;
