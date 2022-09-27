import React,{useContext, useState} from "react";
import { ThemeContext } from "./context";
import { APP_URL } from "./constants";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Inicio from "./pages/Inicio";
import Facebook from './pages/Facebook';
import Instagram from './pages/Instagram';
import Twitter from "./pages/Twitter";
import GoogleMyBussines from "./pages/GoogleMyBussines";
import FacebooksAds from "./pages/FacebooksAds";
import Web from "./pages/Web";
import GoogleAds from "./pages/GoogleAds";
import './App.css';
import Login from './components/auth/Login';
import useUser from "./hooks/useUser";
import ChatRooms from "./components/ChatRoom/ChatRooms";
import ChatRoomShow from "./components/ChatRoom/ChatRoomShow";
import Planificacion from "./pages/Planificacion";
import 'animate.css';



function App(props) {
  const [state, dispatch] = useContext(ThemeContext);
  console.log(state)
  const {currentuser} = state
  const [currentUserRooms, setcurrentUserRooms] = useState([])
  const [currentRoom, setcurrentRoom] = useState({
    chatroom: [], 
    users: [],
    messages: []
})

 const updateCurrentUserRooms = (data) => {
    setcurrentUserRooms(data.chatrooms)
}

  const getRoomData = (id) => {
    fetch(`${APP_URL}/api/v1/chatrooms/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'token': sessionStorage.getItem("jwt") 
        }
    })
    .then(response => response.json())
    .then(result => {
        if(result.data){
          setcurrentRoom({
                chatroom: result.data,
                users: result.data.attributes.users,
                messages: result.data.attributes.messages
        })
        } else {
            alert("Chatroom Not found!")
        }
    })
}

const updateAppStateRoom = (newRoom) => {
  setcurrentRoom({
    chatroom: currentRoom.chatroom,
    users: currentRoom.users,
    messages: newRoom.messages
  })
}
  const {isLogged, logout} = useUser()

      if (!isLogged) {
        return <Login />;
      }
      else{
        return(
          <BrowserRouter>
          <Layout> 
          <Routes> 
          <Route path="/" element={<Inicio/>} exact />
            <Route path="/facebook" element={<Facebook/>} exact />
            <Route path="/instagram" element={<Instagram/>} exact />
            <Route path="/twitter" element={<Twitter/>} exact />
            <Route path="/googlemybussines" element={<GoogleMyBussines/>} exact />
            <Route path="/web" element={<Web/>} exact />
            <Route path="/googleads" element={<GoogleAds/>} exact />
            <Route path="/facebookads" element={<FacebooksAds/>} exact />
            <Route path="/planificacion" element={<Planificacion/>} exact />
            <Route path="/chat" element={<ChatRooms currentRoom={currentRoom['chatroom']} updateCurrentUserRooms={updateCurrentUserRooms} currentUser={currentuser} />} exact />
            <Route path='/chatroom/:id' element={ <ChatRoomShow
                                        cableApp={props.cableApp}
                                        currentUser={currentuser}
                                        getRoomData={getRoomData}
                                        roomData={currentRoom}
                                        updateApp={updateAppStateRoom}
                                    /> } exact />
          </Routes>
          </Layout>
        </BrowserRouter>
        )
      }

};

   
export default App;
