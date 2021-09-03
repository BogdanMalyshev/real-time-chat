import React from 'react';
import "./message.scss"
import {Avatar} from "@material-ui/core";

const Message = ({text, isSenderUser, name, photo}) => {


    const flex = isSenderUser ? "end" : "start"
    return (
        <div className={`message-wrapper ${flex}`}>
            <Avatar src={photo}/>
            <div className={`message ${flex}`}>
                {!isSenderUser && <h3>{name}</h3>}
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Message;