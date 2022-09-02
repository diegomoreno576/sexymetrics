import React,{useContext} from 'react'
import { ThemeContext } from '../../context';
import Sidebar from './SideBar'
import '../../assets/styles/components/Layout.css';
import Footer from './Footer';

const Layout = ({children}) => {
  const [state, dispatch] = useContext(ThemeContext);
  const  changeLayout  = state.changeLayout;
  
  return (
<div className='mainApp'>
<div className='row'>
      <div className={changeLayout ? "col-3" : "col-1"}>
         <Sidebar/>
      </div>
     

     <div className={changeLayout ? "col-9 mainContainer" : "col-11 mainContainer"}>     
      {children}
      </div>
      
    </div>
    <Footer/>
</div>
  )
}

export default Layout