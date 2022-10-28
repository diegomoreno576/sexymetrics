import React,{useContext} from 'react'
import "../assets/styles/components/Team.css";
import { LayoutContext } from '../context/layoutContext';

const Team = () => {
  const [state, dispatch] = useContext(LayoutContext);
  const ntcTeam = [
    {
      id: "1",
      avatarImg: "https://notecopies.app/wp-content/uploads/2021/06/david-1.png",
      avatarName: "David",
      avatarEmployment: "Marketing"
    
    },
    {
      id: "2",
      avatarImg: "https://notecopies.app/wp-content/uploads/2022/01/DIEGO_baja.png",
      avatarName: "Diego",
      avatarEmployment: "Web"
    
    }
  ]
  if(state.changeLayout == true){
  return (
    <div className="TeamContainer">
      <div className="notecopiesLogo">
        <div className="notecopiesLogoimg">
          <img
            src="https://notecopies.es/wp-content/uploads/2021/03/notecopies-blanco.gif"
            alt=""
          />
        </div>
      </div>

      <div className="mainAvatarTeam">
        <div className="avatarList">
        {ntcTeam.map((item) => { 
          return(
            <div key={item.id} className="avatarItem">
            <div className="avatarImg">
              <img
                src={item.avatarImg}
                alt=""
              />
            </div>
            <div className="avatarDescriptcion">
              <div className="avatarName">
                <span>{item.avatarName}</span>
              </div>
              <div className="avatarWorking">
                <span>{item.avatarEmployment}</span>
              </div>
            </div>
          </div>
          )
          })}
        </div>
      </div>
    </div>
  );
}
 }

export default Team