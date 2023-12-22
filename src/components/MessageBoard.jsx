import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);
  const handleMessage = () => {
    const newMessageList = [...messageList];
    newMessageList.push(messageInput);
    setMessageList(newMessageList);
  };
  const deleteMessage = (messageListIndex) =>{
    const newMessageList = [...messageList]
    newMessageList.splice(messageListIndex,1)
    setMessageList(newMessageList)
  }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
            value={messageInput}
          />
        </label>
        <button className="submit-message-button" onClick={handleMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageList.map((message,index) => {
          return (
            <div className="message">
              <h1>{message}</h1>
              <button className="delete-button" onClick={deleteMessage}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
