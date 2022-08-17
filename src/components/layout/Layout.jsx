import React from 'react'
import Navbar from './Navbar'
import Sidebar from './SideBar'
import '../../assets/styles/components/Layout.css';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
<div className='mainApp'>
<div className='row'>
       <Navbar/>
      <div className='col-2'>
         <Sidebar/>
      </div>
     
      <div className='col-10 mainContainer'>
     
      {children}
      </div>
      
    </div>
    <Footer/>
</div>
  )
}

export default Layout