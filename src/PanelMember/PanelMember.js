import React, { useState } from 'react';
import Banner from '../StudentModule/Banner'
import {Outlet } from 'react-router-dom';
import PanelNav from './PanelNav';

function PanelMember({ handleLogout }) {
  

  return (
    <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
      <div>
        <Banner batchNo={"Meena"} moduleName={"Panel Member"} />
        <PanelNav/>
        <Outlet/>
      </div>
    </div>
  )
}

export default PanelMember;
