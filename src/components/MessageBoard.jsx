import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessage] = useState([
    "Hello all ! This is first message.",
  ]);

  function handleAddMessage(event) {
    event.preventDefault();
    const newMessages = [...messages];
    newMessages.push(inputMessage);
    setMessage(newMessages);
    setInputMessage("");
  }

  function handleDeleteMessage(messageIndex) {
    const newMessages = [...messages];
    newMessages.splice(messageIndex, 1);
    setMessage(newMessages);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form class="message-input-container" onSubmit={handleAddMessage}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => {
              setInputMessage(event.target.value);
            }}
            value={inputMessage}
          />
        </label>
        <button className="submit-message-button" type="submit">
          Submit
        </button>
      </form>
      <div class="board">
        {messages.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => handleDeleteMessage(index)}
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
