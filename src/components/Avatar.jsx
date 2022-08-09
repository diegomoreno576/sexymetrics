import React from 'react'
import '../assets/styles/components/Avatar.css';
import useData from '../hooks/useData';

const Avatar = () => {
 
  //FbBody
  const Avatar = useData(
    `/admin/profile`,
   );
  
   return (
     <div className="mainAvatar">
       <div className="AvatarChild">
         <div className="avatar">
           <img src={Avatar.picture} alt="" />
         </div>
         <div className="AvatarName">{Avatar.label}</div>
       </div>
     </div>
   );
  

}

export default Avatar