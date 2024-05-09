import React from 'react'
import {ChatBubbleLeftIcon, PhoneIcon} from "@heroicons/react/24/solid"   //from heroicons 

function customHeader({chat}) {
  return (
    <>
      <div className="chat-custom-header">
        <div className="flexbetween">
          <ChatBubbleLeftIcon className="icon-chat" />
          <h3 className="header-text">{chat.title}</h3>
        </div>
        <div className="flexbetween">
          {chat.description === "⬅️ ⬅️ ⬅️" ? (
            <p className="header-text">no chat selected</p>
          ) : (
            <p className="header-text">{chat.description}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default customHeader
