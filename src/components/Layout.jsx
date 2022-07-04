import React from 'react'
import Navbar from './Navbar'
import Sidebar from './SideBar'
import '../assets/styles/components/Layout.css';

const Layout = ({children}) => {
  return (
<div className='mainApp'>
<div className='row'>
       <Navbar/>
      <div className='col-1'>
         <Sidebar/>
      </div>
     
      <div className='col-11 mainContainer'>
     
      {children}
      </div>
      
    </div>
</div>
  )
}

export default Layout