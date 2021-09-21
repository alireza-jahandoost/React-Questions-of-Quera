import React, { useState, useEffect } from "react";
import MessageForm from "../components/MessageForm/MessageForm";
import MessageList from "../components/MessageList/MessageList";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let cleanupStarted = false;
    if (messages.length > 0 && messages[messages.length - 1].me === true) {
      const lastMessage = messages[messages.length - 1].body;
      fetch(`http://localhost:3001/message/${lastMessage}`)
        .then((response) => response.json())
        .then((response) => response.message)
        .then((answeredMessage) => {
          if (!cleanupStarted) {
            setMessages([...messages, { me: false, body: answeredMessage }]);
          }
        });
    }
    return () => (cleanupStarted = true);
  }, [messages]);

  const onMessageSend = (message) => {
    setMessages((prevMessages) => [...messages, { me: true, body: message }]);
  };

  return (
    <div className="App">
      <MessageList messages={messages} />
      <MessageForm onMessageSend={onMessageSend} />
    </div>
  );
}

export default App;
