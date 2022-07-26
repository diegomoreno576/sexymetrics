import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createConsumer } from '@rails/actioncable'

const Chat = ({ loggedInUser }) => {
    const [messages, setMessage] = useState([])
    const params = useParams
    const cable = useRef()

useEffect(() => {
  
    if (!cable.current){
        cable.current = createConsumer("ws://localhost:3001/cable")
    }
    

    const paramsToSend = {
        chanel: "conversationChanel",
        id: params.id
    }

    const handlers = {
        received(data) {
            setMessage([...messages, data])
        },

        connected() {
            console.log("connected")
        },
        disconnected() {
            console.log("disconected")
        }
    }

    const subscription = cable.subscription.create(paramsToSend, handlers)

  return function cleanup(){
   console.log("unsubbing from", params.id)
   cable.current = null
   subscription.unsubscribe()
  }
}, [params.id, messages])




  return (
    <div>Chat</div>
  )
}

export default Chat