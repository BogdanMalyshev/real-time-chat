import React, {useContext, useState} from "react";
import {IconButton, InputAdornment, TextField} from "@material-ui/core";
import Loading from "../../Loading/Loading";
import SendIcon from "@material-ui/icons/Send";
import "./send-message-block.scss"
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../../index";


function SendMessageBlock({isLoading}) {
    const [isSending, setIsSending] = useState(false)
    const [messageValue, setMessageValue] = useState('')
    const {auth, firestore, firebase} = useContext(Context)
    const [user] = useAuthState(auth)

    const onMessageInputChange = (event) => {
        setMessageValue(event.target.value)
    }

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: messageValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessageValue('')
    }

    return (
        <div className="send-bar">
            <TextField
                disabled={isLoading}
                fullWidth
                onChange={onMessageInputChange}
                size="small"
                label="Send"
                variant="outlined"
                multiline
                rows={3}
                rowsMax={3}
                value={messageValue}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {
                                isSending ?
                                    <Loading size={20}/> :
                                    <IconButton disabled={isLoading} onClick={sendMessage}>
                                        <SendIcon color="primary"/>
                                    </IconButton>
                            }
                        </InputAdornment>
                    )
                }}
            />
        </div>
    )
}

export default SendMessageBlock