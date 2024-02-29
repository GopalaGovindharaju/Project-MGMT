import React from 'react';
import Banner from '../StudentModule/Banner'
import {Outlet, useParams } from 'react-router-dom';
import PanelNav from './PanelNav';

function PanelMember({ handleLogout }) {
    
  const {Id} = useParams();
  console.log(Id)

  return (
    <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
      <div>
        <Banner batchNo={"Meena"} moduleName={"Panel Member"} />    
        <PanelNav/>
        <Outlet context={Id}/>
      </div>
    </div>
  )
}

export default PanelMember;
