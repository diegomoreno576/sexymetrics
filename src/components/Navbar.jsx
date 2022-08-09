import React from 'react'
import MonthYearCalendar from "./MonthCalendar";
import '../assets/styles/components/Navbar.css';


const Navbar = () => {

  return (
    <div className="container">
  <nav className="customNavbar navbar">

      <div className='col-6'>
        
      </div>
      <div className='col-3 calendarNavbar'>
      <MonthYearCalendar/>
        </div>

  </nav>
</div>
  )
}

export default Navbar