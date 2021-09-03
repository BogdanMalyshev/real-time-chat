import {
    Paper
} from "@material-ui/core";
import React, {useContext, useEffect, useState} from 'react'
import './chat.scss'
import SendMessageBlock from "./SendMessageBlock/SendMessageBlock";
import InfoBar from "./InfoBar/InfoBar";
import Messages from "./Messages/Messages";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

function Chat() {
    const {firestore} = useContext(Context)
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    return (
        <Paper elevation={3} className="chat-layout">
            <InfoBar name={user.displayName}/>
            <Messages isLoading={loading} messages={messages}/>
            <SendMessageBlock isLoading={loading}/>
        </Paper>
    )
}

export default Chat