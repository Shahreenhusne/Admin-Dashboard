import { PaperAirplaneIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Dropzone from "react-dropzone";
import { useState } from 'react';

const CustomForm = ({ props, activeChat }) => {
  console.log(activeChat)
  const [msg, setMsg] = useState("");
  const [attachment, setAttachment] = useState("");
  const [preview, setPreview] = useState("");

  const handleSubmit = async () => {
    console.log(attachment);
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const file_attached = attachment
      ? [{ blob: attachment, file: attachment.name }]
      : [];
    const form = {
      attachment: file_attached,
      created: date,
      sender_username: props.username,
      text: msg,
      activeChatId: activeChat.id,
    };
    props.onSubmit(form);
    setMsg("")
    setAttachment("")
  };

  return (
    <>
      <div className="msg-form-container">
        {preview && (
          <div className="attachment-preview">
            <img
              alt="msg-attachment"
              className="attachment-image"
              src={preview}
              onLoad={() => URL.revokeObjectURL(preview)}
            />
            <XMarkIcon
              className="message-form-icon-x"
              onClick={() => {
                setPreview("");
                setAttachment("");
              }}
            />
          </div>
        )}
        <div className="message-form">
          <div className="form-input-container">
            <input
              className="form-input"
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Send a message......"
            />
          </div>
          <div className="form-icons">
            <Dropzone
              acceptedFiles=".jpg, .jpeg, .png"
              multiple={false}
              noClick={true}
              onDrop={(acceptedFiles) => {
                setAttachment(acceptedFiles[0]);
                setPreview(URL.createObjectURL(acceptedFiles[0]));
              }}
            >
              {({ getRootProps, getInputProps, open }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <PaperClipIcon className="paper-clip-icon" onClick={open} />
                  </div>
                </section>
              )}
            </Dropzone>
            <hr className="vertical-line"></hr>
            <PaperAirplaneIcon
              className="icon-airplane"
              onClick={() => {
                  setPreview(""),
                  handleSubmit()
                }}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomForm;
