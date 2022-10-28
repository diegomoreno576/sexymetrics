import React from 'react'
import '../../assets/styles/components/dashboard/ButtonsData.css'

const ButtonsData = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className="DashboardsThree">
      <div className="MinDashboarTreBtn">
        <div className="BtnDashboardTotal">
          <span className="actualDashboardNumber">{props.number}</span>
        </div>
        <div className="BtnDashboardname">{props.name}</div>
      </div>
    </div>
  );
}

export default ButtonsData