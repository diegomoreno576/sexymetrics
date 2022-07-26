import React,{useContext, useEffect} from "react";
import axios from "axios";
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
import { ThemeContext } from "./context";
import { setIslogin } from "./actions";
import { setBlog_id } from "./actions";
import Chat from './pages/Chat';


function App() {
  const [state, dispatch] = useContext(ThemeContext);


useEffect(() => {
  axios
  .get("https://notecopies.herokuapp.com/api/v1/logged_in", { withCredentials: true })
  .then(response => {
    dispatch(setIslogin(response.data.logged_in));
    dispatch(setBlog_id(response.data.blog)); 
  })
  .catch(error => {
    console.log("check login error", error);
  });


}, [])



      if (!state.isLoggedIn) {
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
