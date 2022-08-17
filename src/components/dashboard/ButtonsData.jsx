import React from 'react'
import '../../assets/styles/components/dashboard/ButtonsData.css'

const ButtonsData = (props) => {
  return (
    <div style={{backgroundColor:props.color}} class="DashboardsThree">
      <div class="MinDashboarTreBtn">
        <div class="BtnDashboardTotal">
          <span class="actualDashboardNumber">{props.number}</span>
        </div>
        <div class="BtnDashboardname">{props.name}</div>
      </div>
    </div>
  );
}

export default ButtonsData