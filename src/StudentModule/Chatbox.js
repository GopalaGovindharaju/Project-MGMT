import React from 'react'
import './Chatbox.css'
import './Schedule.css'
function Chatbox() {
  return (
    <div class='reach'>
         <div class="chatbot-container">
            <h1>Chat Box</h1>
    <div class="chatbox">
      <div class="chat-messages" id="chatMessages">
    
      </div>
      <div class="user-input">
        <input type="text" id="userInput" placeholder="Type your message..."/>
        <input type="file" id="fileInput" accept="video/*, image/*, audio/*" style={{marginRight: '5px', marginTop:'15px'}}/>
        <button className="btn btn-success" onclick="sendMessage()" style={{height:'35px', marginTop:'10px'}}>Send</button>
      </div>
    </div>
    <button className="btn btn-success" onclick="downloadChats()" style={{ marginTop: '20px' }}>Download Chats</button>
  </div>
  
  
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <div>
        
     
  
    </div>
    </div>
  )
}

export default Chatbox
