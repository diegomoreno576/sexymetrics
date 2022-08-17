import React,{useEffect} from 'react'

const ChatRoomWebSocket = (props) => {

    useEffect(() => {
      // used getRoomData() to render data on ChatroomShow component
      props.getRoomData(window.location.href.match(/\d+$/)[0])
      // the to send params to the subscribed action in ChatroomsChannel
      props.cableApp.room = props.cableApp.cable.subscriptions.create({
          channel: 'ChatroomsChannel',
          room: window.location.href.match(/\d+$/)[0]
      }, 
      {
          received: (updatedRoom) => {
              props.updateApp(updatedRoom)
          }
      }) 
    }, [])
    

  return (
    <div></div>
  )
}

export default ChatRoomWebSocket