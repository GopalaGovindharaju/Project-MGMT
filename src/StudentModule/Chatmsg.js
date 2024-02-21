import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Chatmsg.css'

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
            setIsTabOpen(false);
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
                    <button class="btn btn-success" onClick={handleButtonClick} id='stud-logo1'>I</button>
                </div>
                <h6 className='stud-name'>Guide - Indhulekha</h6>
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default Chatmsg
