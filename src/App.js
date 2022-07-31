import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Facebook from './pages/Facebook';
import Instagram from './pages/Instagram';
import Twitter from "./pages/Twitter";
import GoogleMyBussines from "./pages/GoogleMyBussines";
import FacebooksAds from "./pages/FacebooksAds";
import Web from "./pages/Web";
import './App.css';
import Login from './components/auth/Login';
import Chat from './pages/Chat';
import useUser from "./hooks/useUser";

function App() {
  const {isLogged, logout} = useUser()

      if (!isLogged) {
        return <Login />;
      }
      else{
        return(
          <BrowserRouter>
          <Layout> 
          <Routes> 
            <Route path="/" element={<Facebook/>} exact />
            <Route path="/instagram" element={<Instagram/>} exact />
            <Route path="/twitter" element={<Twitter/>} exact />
            <Route path="/googlemybussines" element={<GoogleMyBussines/>} exact />
            <Route path="/web" element={<Web/>} exact />
            <Route path="/facebookads" element={<FacebooksAds/>} exact />
            <Route path="/chat" element={<Chat/>} exact />
          </Routes>
          </Layout>
        </BrowserRouter>
        )
      }

};

   
export default App;
