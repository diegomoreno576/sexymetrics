import React from 'react'
import { ThemeContext } from '../../context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import "../../assets/styles/components/settings/settings.css";


const Settings_button = () => {
  const [state] = useContext(ThemeContext);
  const {currentuser} = state
  let {brands} = currentuser;
  let {user} = currentuser;
  let currentBrand = brands?.[0]?.id
  let user_id = user?.data?.attributes?.id

  return (
    <NavLink
    to={`/ajustes/brand_id=${state.brand_id}&user_id=${user_id}`}
    className="DakmodeButton"
    >
           <i class="fa-light fa-gear"></i>
    </NavLink>
  
  )
}

export default Settings_button