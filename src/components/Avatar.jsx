import React,{useContext} from 'react'
import '../assets/styles/components/Avatar.css';
import useData from '../hooks/useData';
import { LayoutContext } from '../context/layoutContext';

const Avatar = () => {
  const [state, dispatch] = useContext(LayoutContext);
 
  //FbBody
  const Avatar = useData(
    `/admin/profile`,
   );
  
   return (
     <div className="mainAvatar">
       <div className="AvatarChild">
         <div className={state.changeLayout ? "avatar avatarOpen" : "avatar avatarClose" }>
           <img src={Avatar.picture} alt="" />
         </div>
         {state.changeLayout == true && 
          <div className="AvatarName">{Avatar.label}</div>
         }
        
       </div>
     </div>
   );
  

}

export default Avatar