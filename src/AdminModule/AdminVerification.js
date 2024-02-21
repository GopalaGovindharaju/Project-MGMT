import React from 'react'
import Banner from '../StudentModule/Banner'
import AdminVerificationBody from './AdminVerificationBody'

function AdminVerification() {
  return (
    <div style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
    <div>
      <Banner batchNo={"Admin"} moduleName={"Verification Page"}/>
      <AdminVerificationBody/>
    </div>
    </div>
  )
}

export default AdminVerification
