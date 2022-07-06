import React from 'react'
import useData from '../hooks/useData';
import '../assets/styles/components/Avatar.css';



const Avatar = () => {
   
    const avatar= useData("/admin/profile");


    return (

        <div className="row MainAvatar">
            <div className="col-6  avatarName">
            <p> {avatar.label}</p>
          </div>
        <div className="col-4 avatarImg">
        <div className="avatarImg">
            <img src={avatar.facebookPicture} />
            </div>
          </div>
        
        
        </div>
    );
}

export default Avatar