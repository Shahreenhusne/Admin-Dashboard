import React from 'react'
import {
    useMultipleChatLogic,
    MultiChatSocket,
    MultiChatWindow
} from "react-chat-engine-advanced";

const ChatApp = () => {
    const chatProps = useMultipleChatLogic(
      import.meta.env.VITE_PROJECT_ID,
      " TestUser",
      "1234"
    );
  return (
      <>
          <h1>Chat</h1>
      </>
  )
}

export default ChatApp;
