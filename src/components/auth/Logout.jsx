import React,{useContext} from 'react'
import useUser from '../../hooks/useUser';
import { LayoutContext } from '../../context/layoutContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [state, dispatch] = useContext(LayoutContext);
    const {isLogged, logout} = useUser()
    const navigate = useNavigate()

    const handleLogoutClick = (e) =>  {
     e.preventDefault()
     logout()
      navigate('/')
     }
     if(state.changeLayout == true){
      return (
        <button className='LogoutButton' onClick={handleLogoutClick}>
           <i className="fa-solid fa-power-off"></i>
        </button>
      )
     }

}

export default Logout