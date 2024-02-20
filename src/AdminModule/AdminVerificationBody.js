import React from 'react'
import AdminBodyRight from './AdminBodyRight';
import AdminBodyLeft from './AdminBodyLeft';

function AdminVerificationBody() {
  return (
    <div class="d-flex flex-row" style={{minHeight:'100vh'}}>
        <div style={{flex:1, borderRight:'1px solid black', marginRight:'2px'}}>
            <AdminBodyLeft/>
        </div>
        <div style={{flex:3, borderLeft:'1px solid black'}}>
            <AdminBodyRight/>
        </div>
    </div>
  );
}

export default AdminVerificationBody
