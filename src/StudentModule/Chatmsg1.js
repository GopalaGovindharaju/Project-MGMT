import React from 'react'
import './Chatmsg1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

function Chatmsg1({setIsTabOpen}) {

  const closeBtn = () => {
    setIsTabOpen(false);
  }

  return (
    <>
      <div className='msgs1'>

            <div className='msg-headsticky'>
                <div class="input-group">
                <div class="input-group-prepend"> <button class="btn btn-success" id='stud-logo1'>I</button> </div> 
                    <h6 className='stud-name'>Indhulekha</h6>
                <div style={{display:'inline-block', paddingLeft:'50%'}}><FontAwesomeIcon onClick={closeBtn} icon={faClose}  /></div>

                </div>
            </div>


            <div id='msg-type-name' class="input-group"> <h6 className='stud-name'>Me</h6> </div>
            <div className='one-msg1'>
                <p className='stud-msg'>We found the title of the project mam</p>
                <div className='date-time'>
                    <p className='stud-msg1'>14/02/24</p>
                    <p className='stud-msg2'>9.15 AM</p>
                </div>
            </div>

            <div class="input-group"> <h6 className='stud-name'>Indhulekha</h6> </div>
            <div className='one-msg1'>
                <p className='stud-msg'>Can you describe the title?</p>
                <div className='date-time'>
                    <p className='stud-msg1'>14/02/24</p>
                    <p className='stud-msg2'>9.15 AM</p>
                </div>
            </div>

            <div class="input-group"> <h6 className='stud-name'>Me</h6> </div>
            <div className='one-msg1'>
                <p className='stud-msg'>We have submitted the objectives mam</p>
                <div className='date-time'>
                    <p className='stud-msg1'>14/02/24</p>
                    <p className='stud-msg2'>9.15 AM</p>
                </div>
            </div>

            <div class="input-group"> <h6 className='stud-name'>Indhulekha</h6> </div>
            <div className='one-msg1'>
                <p className='stud-msg'>Now do the system architecture</p>
                <div className='date-time'>
                    <p className='stud-msg1'>14/02/24</p>
                    <p className='stud-msg2'>9.15 AM</p>
                </div>
            </div>

            <div className='stud-inp-msg' id='footer-inp-msg'>
            <div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-success" style={{marginRight:'7px'}} id='stud-logo1'>Me</button>
                </div>
                <input type="text" class="form-control" placeholder='Enter the Message'/>
                <div class="input-group-append">
                    <button class="btn btn-success" style={{marginLeft:'8px'}}>SEND</button>
                </div>
            </div>
            </div>

        </div>
    </>
  )
}

export default Chatmsg1
