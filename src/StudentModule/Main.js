import React, { useState } from 'react'
import './main.css'
import { Outlet } from 'react-router-dom';
import Navb from './Navb';
import Banner from './Banner';
import Chatmsg from './Chatmsg';
import Chatmsg1 from './Chatmsg1';

function Main() {
    const [isTabOpen, setIsTabOpen] = useState(false);

  return (
    <div style={{ overflowY: 'hidden', height: '100vh', position:'relative' }}>
      <Banner batchNo={"A-01"} moduleName={"Student Page"}/>
      <Navb/>
      <Outlet/>
      <Chatmsg setIsTabOpen={setIsTabOpen}/>
      {isTabOpen && <Chatmsg1 setIsTabOpen={setIsTabOpen}/> }
    </div>
  );
}

export default Main
