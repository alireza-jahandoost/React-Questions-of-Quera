import React, { useState } from "react";
import "./MessageForm.css";

function MessageForm({ onMessageSend }) {
  const [message, setMessage] = useState("");

  function handleFormSubmit(event) {
    const trimmedMessage = message.trim();
    if (trimmedMessage) {
      onMessageSend(trimmedMessage);
      setMessage("");
    }
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          value={message}
          autoFocus
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          onChange={handleChange}
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
