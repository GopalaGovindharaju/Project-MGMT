import React, { useState, useRef } from 'react';

function Chatbox() {
  const [userInput, setUserInput] = useState('');
  const [fileInput, setFileInput] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const fileInputRef = useRef(null);

  const sendMessage = () => {
    if (userInput || fileInput) {
      const fileType = fileInput
        ? fileInput.type.startsWith('video')
          ? 'video'
          : fileInput.type.startsWith('image')
          ? 'image'
          : fileInput.type.startsWith('audio')

          ? 'audio'
          : 'file'
        : null;

      const reader = new FileReader();
      reader.onload = (e) => {
        const message = createMessage(userInput, fileType, e.target.result);
        setChatMessages((prevMessages) => [...prevMessages, message]);
      };

      if (fileInput) {
        reader.readAsDataURL(fileInput);
        setFileInput(null); // Clear the file input
        fileInputRef.current.value = '';
      } else {
        const message = createMessage(userInput);
        setChatMessages((prevMessages) => [...prevMessages, message]);
      }

      setUserInput('');
    }
  };

  const createMessage = (text, fileType = null, fileData = null) => {
    return {
      text: text,
      fileType: fileType,
      fileData: fileData,
      timestamp: new Date().toLocaleTimeString(),
    };
  };

  const downloadChats = () => {
    const chatMessagesContainer = document.createElement('div');
    chatMessages.forEach((message) => {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'message';

      if (message.fileType) {
        const mediaElement = document.createElement(message.fileType);
        mediaElement.src = message.fileData;
        mediaElement.controls = true;
        messageDiv.appendChild(mediaElement);
      }

      const textElement = document.createElement('p');
      textElement.textContent = message.text;

      const timestampElement = document.createElement('span');
      timestampElement.className = 'timestamp';
      timestampElement.textContent = message.timestamp;

      messageDiv.appendChild(textElement);
      messageDiv.appendChild(timestampElement);

      chatMessagesContainer.appendChild(messageDiv);
    });

    const blob = new Blob([chatMessagesContainer.innerHTML], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat_history.txt';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="reach">
      <div className="chatbot-container">
        <h1 style={{color:'#333'}}>Chat Box</h1>
        <div className="chatbox">
          <div className="chat-messages">
            {chatMessages.map((message, index) => (
              <div key={index} className="message">
                {message.fileType && (
                  <React.Fragment>
                    <source src={message.fileData} type={message.fileType} />
                    <video controls />
                  </React.Fragment>
                )}
                <p>{message.text}</p>
                <span className="timestamp">{message.timestamp}</span>
              </div>
            ))}
          </div>
          <div className="user-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
            />
            <input
              type="file"
              accept="video/*, image/*, audio/*"
              ref={fileInputRef}
              onChange={(e) => setFileInput(e.target.files[0])}
              style={{ marginRight: '5px', marginTop: '15px' }}
            />
            <button
              className="btn btn-success"
              onClick={sendMessage}
              style={{ height: '35px', marginTop: '10px' }}
            >
              Send
            </button>
          </div>
        </div>
        <button
          className="btn btn-success"
          onClick={downloadChats}
          style={{ marginTop: '20px' }}
        >
          Download Chats
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
