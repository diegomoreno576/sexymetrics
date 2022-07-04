import React from 'react'
import MonthYearCalendar from "./MonthCalendar";
import '../assets/styles/components/Navbar.css';
import Avatar from './Avatar';

const Navbar = () => {
  return (
    <div className="container">
  <nav className="customNavbar navbar navbar-expand-lg ">
    <div className="container-fluid">
    <MonthYearCalendar/>

      <Avatar/>
      

      

    </div>
  </nav>
</div>
  )
}

export default Navbar