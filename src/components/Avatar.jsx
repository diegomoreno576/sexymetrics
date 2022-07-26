import React, { useState, useContext } from 'react'
import useAvatar from '../hooks/useAvatar';
import '../assets/styles/components/Avatar.css';
import { ThemeContext } from "../context";




const Avatar = () => {
  const [state, dispatch] = useContext(ThemeContext);

  

  
   return(
    <div className='mainMarcas'>
      {
        state.blog_id.map((item) => {
         return (
          <div className='MarcasChild'>
          <div className='avatar'>
            <img src={item.avatar } alt=""/>
          </div>
          <div className='AvatarName'>
            {item.name}
          </div>
        </div>
         )
          })
      }
    </div>
   )
  

}

export default Avatar