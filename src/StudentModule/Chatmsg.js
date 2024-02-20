import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Chatmsg.css'
import Chatmsg1 from './Chatmsg1';

function Chatmsg({setIsTabOpen}) {

    const [upIcon,setUpicon] = useState(true);
    const messageToggle = () => {
        const Openup = document.querySelector(".msg-container");
        if(upIcon){
            setUpicon(false);
            Openup.style.bottom = '10px';    
        }
        else{
            setUpicon(true);
            Openup.style.bottom = '-444px';
        }
    }

    const handleButtonClick = () => {
        setIsTabOpen(true);
      };
      
  return (
    <div className='msg-container'>
        <div className='msg-child'>

        <div className='msg-headsticky'>
            <div className='msg-head'>
                <div><h5 style={{display:'inline-block'}}>Messaging</h5><div style={{display:'inline-block', paddingLeft:'8px'}}><FontAwesomeIcon icon={faDownload} /></div>  </div>     
                <div>{upIcon ? <FontAwesomeIcon onClick={messageToggle} icon={faChevronUp}/> : <FontAwesomeIcon onClick={messageToggle} icon={faChevronDown}/>} </div>  
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search Messages"/>
                <div class="input-group-append">
                    <button className='btn btn-success' style={{marginLeft:'8px'}}>Search</button>
                </div>
            </div>
        </div>
        
        <div className='msgs'>
            <div class="input-group">
               <div class="input-group-prepend">
                    <button class="btn btn-success" onClick={handleButtonClick} id='stud-logo1'>MG</button>
                </div>
                <h6 className='stud-name'>Gopu</h6>
            </div>
            <div className='one-msg'>
                <p className='stud-msg'>We found the title of the project mam</p>
                <div className='date-time'>
                    <p className='stud-msg1'>14/02/24</p>
                    <p className='stud-msg2'>9.15 AM</p>
                </div>
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-success" id='stud-logo1'>I</button>
                </div>
                <h6 className='stud-name'>Indhulekha</h6>
            </div>
            <div className='one-msg'>
                <p className='stud-msg'>Can you describe the title?</p>
                <div className='date-time'>
                    <p className='stud-msg1'>14/02/24</p>
                    <p className='stud-msg2'>9.15 AM</p>
                </div>
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-success" id='stud-logo1'>G</button>
                </div>
                <h6 className='stud-name'>Gopi</h6>
            </div>
            <div className='one-msg'>
                <p className='stud-msg'>We have submitted the objectives mam</p>
                <div className='date-time'>
                    <p className='stud-msg1'>14/02/24</p>
                    <p className='stud-msg2'>9.15 AM</p>
                </div>
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-success" id='stud-logo1'>H</button>
                </div>
                <h6 className='stud-name'>Harish</h6>
            </div>
            <div className='one-msg'>
                <p className='stud-msg'>Now, we are doing the system architecture</p>
                <div className='date-time'>
                    <p className='stud-msg1'>14/02/24</p>
                    <p className='stud-msg2'>9.15 AM</p>
                </div>
            </div>
        </div>

        <div className='stud-inp-msg' id='footer-inp-msg'>
            <div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-success" style={{marginRight:'7px'}} id='stud-logo1'>MG</button>
                </div>
                <input type="text" class="form-control" placeholder='Enter the Message'/>
                <div class="input-group-append">
                    <button class="btn btn-success" style={{marginLeft:'8px'}}>SEND</button>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Chatmsg
