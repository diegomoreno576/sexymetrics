import React from 'react'
import { AiOutlinePoweroff } from "react-icons/ai";
import useUser from '../../hooks/useUser';

const Logout = () => {
    const {isLogged, logout} = useUser()

    const handleLogoutClick = (e) =>  {
     e.preventDefault()
     logout()
     }
  return (
    <button className='LogoutButton' onClick={handleLogoutClick}>
          <AiOutlinePoweroff/>
    </button>
  )
}

export default Logout