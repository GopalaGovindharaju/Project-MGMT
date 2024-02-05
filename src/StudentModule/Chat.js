import React from 'react'
import './main.css'
import '../NewStudent/Stud.css'


function Chat() {
  return (
    <div>
        <div class="chatbot-container">
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
  
      
    </div>
  )
}

export default Chat
