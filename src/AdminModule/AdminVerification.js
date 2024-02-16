import React from 'react'
import Banner from '../StudentModule/Banner'
import AdminVerificationBody from './AdminVerificationBody'

function AdminVerification() {
  return (
    <div>
      <Banner batchNo={"Admin"} moduleName={"Verification Page"}/>
      <AdminVerificationBody/>
    </div>
  )
}

export default AdminVerification
