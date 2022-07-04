import React from 'react'
import useData from '../hooks/useData';
import '../assets/styles/components/Avatar.css';



const Avatar = () => {
    const Avatar =`https://app.metricool.com/api/admin/profile?userToken=HTDJDJSLGBKTFLIDAHAQLCESCFTPHUFYXNEIMVNLLZCXVUNOXCJQVYRAHAHWFLFW&blogId=557387&userId=44035&username=notecopies.sm@outlook.com`;
    const avatar= useData(Avatar);


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