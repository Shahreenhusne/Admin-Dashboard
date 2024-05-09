import React from 'react'
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

//import files from client 
import Header from "../customHeader/customHeader";
import MessageForm from "../customForm/customForm";


const projectId = "bb46956d-20a3-43aa-9826-77cd9ad21747";
const usename = "TestUser";
const secret = "1234";


const ChatApp = () => {
    const chatProps = useMultiChatLogic(projectId, usename, secret);
  return (
      <>
      <div style={{ flexBasis: "100%" }}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps}
          style={{ height: "100vh" }}
          renderChatHeader={(chat) => <Header chat={chat} />}
          renderMessageForm = {(props) => {
            return (
              <MessageForm props={props} activeChat={chatProps.chat}/>
            )
          }
          }
        />
         </div>
      </>
  )
}

export default ChatApp;
