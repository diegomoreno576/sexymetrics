import React,{ useContext } from 'react'
import MonthYearCalendar from "./MonthCalendar";
import '../assets/styles/components/Navbar.css';
import Avatar from './Avatar';
import axios from 'axios';
import { ThemeContext } from "../context";
import { setIslogin } from "../actions";
import { setLoginError } from "../actions";
import { AiOutlinePoweroff } from "react-icons/ai";

const Navbar = () => {
  const [state, dispatch] = useContext(ThemeContext);

 const handleLogoutClick = () =>  {
    axios
      .delete("https://notecopies.herokuapp.com/api/v1/logout", { withCredentials: true })
      .then(response => {
       dispatch(setIslogin(response.data.logged_in));
       dispatch(setLoginError(null));
      })
      .catch(error => {
        console.log("logout error", error);
      });
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