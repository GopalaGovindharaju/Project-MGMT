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
        <input type="file" id="fileInput" accept="video/*, image/*, audio/*" style={{marginRight: '5px'}}/>
        <button onclick="sendMessage()">Send</button>
      </div>
    </div>
    <button onclick="downloadChats()" style={{ marginTop: '10px' }}>Download Chats</button>
  </div>
  
  
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <div>
        
      <div class="schedule-container">
    <h1>Review Scheduled</h1>
    <p>Your upcoming project review is scheduled for:</p>
    <div class="datetime-info">
      <p>Date: <strong>February 15, 2024</strong></p>
      <p>Time: <strong>10:00 AM</strong></p>
    </div>
    <div class="footer">
      <p>Thank you for your hard work and preparation. If you have any questions, please contact your guide or HOD.</p>
    </div>
  </div>
  
    </div>
    </div>
  )
}

export default Chatbox
