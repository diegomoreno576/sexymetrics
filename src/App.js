import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Facebook from './pages/Facebook';
import Instagram from './pages/Instagram';


import './App.css';

function App() {
return(
  <BrowserRouter>
  <Layout> 
  <Routes>
    <Route path="/" element={<Facebook/>} exact />
    <Route path="/instagram" element={<Instagram/>} exact />
  </Routes>
  </Layout>
</BrowserRouter>
)
};

   
export default App;
