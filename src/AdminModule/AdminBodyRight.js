import React from 'react'
import AdminNavB from './AdminNavB'
import { Outlet } from 'react-router'


function AdminBodyRight() {
  return (
    <div>
      <AdminNavB/>
      <Outlet/>
    </div>
  )
}

export default AdminBodyRight
