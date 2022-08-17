import React, {Fragment, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import avatar from './img/avatar.jpg';
import { APP_URL } from '../../constants';
import ChatMessage from './ChatMessage';
import ChatroomWebSocket from './ChatRoomWebSocket';
import { ThemeContext } from '../../context';

const styles = theme => ({
    table: {
        minWidth: 650,
    },
    chatSection: {
        width: '100%',
        height: '80vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '70vh',
        overflowY: 'auto'
    }
});

const ChatRoomShow = (props) => {
    const [ messageText, setmessageText] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        setmessageText( e.target.value)
    }   
    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
           console.log("enter")
           const message = {
            body: messageText,
            chatroom_id: props.roomData.chatroom.id
        }

    
        fetch(`${APP_URL}/api/v1/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'token': sessionStorage.getItem("jwt") 
            },
            body: JSON.stringify({
                message: message, 
                user_id: props.currentUser.attributes.id
            })
        })
        .then(resp => resp.json())
        .then(result => {
            let messageDiv = document.getElementById('messages')
            messageDiv.scrollTop = messageDiv.scrollHeight
            setmessageText('')
        })
        }
      }

   
   const handleSendMessage = (e) => {
        e.preventDefault();
        
        const message = {
            body: messageText,
            chatroom_id: props.roomData.chatroom.id
        }

    
        fetch(`${APP_URL}/api/v1/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'token': sessionStorage.getItem("jwt") 
            },
            body: JSON.stringify({
                message: message, 
                user_id: props.currentUser.attributes.id
            })
        })
        .then(resp => resp.json())
        .then(result => {
            let messageDiv = document.getElementById('messages')
            messageDiv.scrollTop = messageDiv.scrollHeight
            setmessageText('')
        })
    }

    const whichUser = (message) => {
        const user = props.roomData.users.data.find(user => parseInt(user.id) === message.user_id )
        return user
    }

    const displayMessages = (messages) => {
        return messages.map(message => {
            const user = whichUser(message)
            return (
                message.body !== null ? 
                    <ChatMessage key={message.id} message={message} user={user} currentUser={props.currentUser}/> :
                    <div></div>
            )
        }) 
    }

 
        const { classes } = props;
        console.log('messages ==>', props.roomData.messages)
        return(
            <Fragment>
                <div>
                    <Grid item xs={9}>
                        <List className={classes.messageArea}>
                            <ListItem key="1">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <div id='chat-feed'>
                                            <h3>Chat Feed:</h3>
                                            <div id='messages'> 
                                                { props.roomData.messages !== undefined && props.roomData.messages.length > 0 ? (
                                                    displayMessages(props.roomData.messages)
                                                ) : (
                                                    <h3>This room has no messages yet - be the first to post!</h3>
                                                ) }
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </List>
                        <Divider />
                        <Grid container style={{padding: '20px'}}>
                            <Grid item xs={11}>
                                <TextField id="outlined-basic-email" label="Type Something" value={messageText} onChange={handleChange} onKeyDown={handleKeyDown} fullWidth />
                            </Grid>
                            <Grid xs={1} align="right">
                                <Fab color="primary" aria-label="add" onClick={handleSendMessage}><SendIcon /></Fab>
                            </Grid>
                        </Grid>
                    </Grid>
    
                    <ChatroomWebSocket
                        cableApp={props.cableApp}
                        getRoomData={props.getRoomData}
                        roomData={props.roomData}
                        updateApp={props.updateApp}
                    />
                </div>
               
            </Fragment>
        )
    }


export default withStyles(styles)(ChatRoomShow);