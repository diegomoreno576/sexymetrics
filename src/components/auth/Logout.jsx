import React,{useContext} from 'react'
import useUser from '../../hooks/useUser';
import { LayoutContext } from '../../context/layoutContext';

const Logout = () => {
  const [state, dispatch] = useContext(LayoutContext);
    const {isLogged, logout} = useUser()

    const handleLogoutClick = (e) =>  {
     e.preventDefault()
     logout()
     }
     if(state.changeLayout == true){
      return (
        <button className='LogoutButton' onClick={handleLogoutClick}>
           <i class="fa-solid fa-power-off"></i>
        </button>
      )
     }

}

export default Logout