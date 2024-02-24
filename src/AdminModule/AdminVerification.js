import React, { useContext } from 'react'
import Banner from '../StudentModule/Banner'
import AdminVerificationBody from './AdminVerificationBody'
import UserInfoContext from '../Helper/UsenInfoContext'

function AdminVerification() {
  const {userInfo} = useContext(UserInfoContext)
  console.log(userInfo)
  return (
    <div>
      <Banner batchNo={userInfo.Department} moduleName={"Verification Page"}/>
      <AdminVerificationBody/>
    </div>
  )
}

export default AdminVerification
