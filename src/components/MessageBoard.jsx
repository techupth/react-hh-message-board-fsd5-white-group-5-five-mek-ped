import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [text, setText] = useState("");

  function addMessage(value) {
    value.preventDefault();
    const newMessage = [...message];
    newMessage.push(text);
    setMessage(newMessage);
    setText("");
  }

  function deleteMessage(index) {
    const newMessage = [...message];
    newMessage.splice(index, 1);
    setMessage(newMessage);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={addMessage}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </label>
        <button className="submit-message-button">Submit</button>
      </form>
      <div class="board">
        {message.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => deleteMessage(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
