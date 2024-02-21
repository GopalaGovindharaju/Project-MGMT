import React,{useState} from 'react'
import AdminNavB from './AdminNavB'
import { Outlet } from 'react-router'
import Chatmsg from '../StudentModule/Chatmsg'
import Chatmsg1 from '../StudentModule/Chatmsg1'

function AdminBodyRight() {
  const [isTabOpen, setIsTabOpen] = useState(false);
  return (
    <div>
      <AdminNavB/>
      <Outlet/>
      <Chatmsg setIsTabOpen={setIsTabOpen}/>
      {isTabOpen && <Chatmsg1 setIsTabOpen={setIsTabOpen}/> }
    </div>
  )
}

export default AdminBodyRight
