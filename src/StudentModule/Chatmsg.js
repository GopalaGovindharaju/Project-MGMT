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
            Openup.style.bottom = '-70%';
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

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search Messages"/>
                <div className="input-group-append">
                    <button className='btn btn-success' style={{marginLeft:'8px'}}>Search</button>
                </div>
            </div>
        </div>
        
        <div className='msgs'>
            <div className="input-group">
               <div className="input-group-prepend">
                    <button className="btn btn-success" onClick={handleButtonClick} id='stud-logo1'>I</button>
                </div>
                <h6 className='stud-name'>Guide - Indhulekha</h6>
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default Chatmsg
