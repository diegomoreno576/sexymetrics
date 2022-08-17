import React from 'react'
import '../../assets/styles/components/dashboard/MaxAge.css'

const MaxAge = (props) => {
  return (
    <div class="EdadBtnDashboard">
    <span class="maxEdad">{props.number}</span>
        <div class="BtnDashboardname">
                Años
            </div>

        </div>
  )
}

export default MaxAge