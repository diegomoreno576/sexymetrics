import React from "react";
import "../../assets/styles/components/dashboard/MaxAge.css";

const MaxAge = (props) => {
  return (
    <div className="EdadBtnDashboard">
      <span className="maxEdad">{props.number}</span>
      <div className="BtnDashboardname">Años</div>
    </div>
  );
};

export default MaxAge;
