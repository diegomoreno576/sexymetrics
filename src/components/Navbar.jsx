import React from 'react'
import MonthYearCalendar from "./MonthCalendar";
import '../assets/styles/components/Navbar.css';
import Avatar from './Avatar';
import { AiOutlinePoweroff } from "react-icons/ai";
import useUser from '../hooks/useUser';


const Navbar = () => {
  const {isLogged, logout} = useUser()

 const handleLogoutClick = (e) =>  {
  e.preventDefault()
  logout()
  }
  return (
    <div className="container">
  <nav className="customNavbar navbar">

      <div className='col-6'>
        
      </div>
      <div className='col-3 calendarNavbar'>
      <MonthYearCalendar/>
        </div>
        <div className='col-1'>
        <button className='LogoutButton' onClick={handleLogoutClick}>
          <AiOutlinePoweroff/>
        </button>
        </div>
   <div className='col-2'>
   <Avatar/>
   </div>

  </nav>
</div>
  )
}

export default Navbar