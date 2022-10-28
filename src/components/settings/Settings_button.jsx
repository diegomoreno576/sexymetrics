import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../assets/styles/components/settings/settings.css";

const Settings_button = () => {
  return (
    <NavLink
    to={"/ajustes"}
    className="DakmodeButton"
    >
           <i class="fa-light fa-gear"></i>
    </NavLink>
  
  )
}

export default Settings_button