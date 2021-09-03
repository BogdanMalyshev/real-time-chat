import React, {useContext, useEffect, useRef} from 'react';
import Loading from "../../Loading/Loading";
import Message from "./Message/Message";
import "./messages.scss"
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../../index";

const Messages = ({isLoading, messages}) => {
    const scrollRef = useRef()
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    useEffect(() => {
        scrollToBottom(scrollRef)
    }, [isLoading])

    function scrollToBottom(ref) {
        ref.current.scrollTop = ref.current.scrollHeight
    }

    function renderMessages(messages) {
        const elements = messages.map((message, index) => {
            return <Message
                key={`${index}-message`}
                isSenderUser={user.uid === message.uid}
                text={message.text}
                name={message.displayName}
                photo={message.photoURL}
            />
        })

        return user ? (
            <ul className="messages-list">
                {elements}
            </ul>
        ) : null
    }

    return (
        <div className="messages" ref={scrollRef}>
            {isLoading ? <Loading/> : renderMessages(messages)}
        </div>
    );
};

export default Messages;