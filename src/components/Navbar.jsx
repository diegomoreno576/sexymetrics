import React from 'react'
import MonthYearCalendar from "./MonthCalendar";
import '../assets/styles/components/Navbar.css';
import Avatar from './Avatar';

const Navbar = () => {
  return (
    <div className="container">
  <nav className="customNavbar navbar">

      <div className='col-6'>
        
      </div>
      <div className='col-4 calendarNavbar'>
      <MonthYearCalendar/>
        </div>
        <div className='col-2'>
        <Avatar/>
        </div>
   

  </nav>
</div>
  )
}

export default Navbar