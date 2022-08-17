import React from "react";
import BotonGrafica from "../charts/BotonGrafica";
import ButtonsData from "./ButtonsData";
import '../../assets/styles/components/dashboard/Dashboard.css'
import MaxAge from "./MaxAge";
import MaxCountry from "./MaxCountry";
import MaxCity from './MaxCity';

export const Dashboard = (props) => {
  return (
    <div className="Resumen">
     <div className="mainResumenTitle">
     <h4 className="ResumenTitle">Resumen {props.name}</h4>
     </div>

          <div key={props.dataGrafica.id} className="col-12">
            <BotonGrafica
              datos={props.dataGrafica.data}
              Timeline={props.timeLine}
              type={props.dataGrafica.type}
              id={props.dataGrafica.id}
              name={props.dataGrafica.name}
              group={props.dataGrafica.group}
              color={props.dataGrafica.color}
              dataNumber={props.dataGrafica.dataNumber}
              icono={props.dataGrafica.icono}
            />
          </div>
      
   

      <div className="row mainDatabuttons">
      {props.data.map((item) => {
        return(
          <div className="col-4">
          <ButtonsData
          number={item.dataNumber}
          name={item.name}
          color={item.color}
          />
        </div>
        )
         })}
      </div>
      <div className="row mainAgeSex">
        <div className="col-4">
         <MaxAge
            number={props.age.dataNumber}
         />
          </div>
        <div className="col-8">sexo</div>
      </div>
      <div className="row">
        <div className="col-6">
          <MaxCountry
          name={props.country.name}
          />
        </div>
        <div className="col-6">
          <MaxCity
          name={props.city.name}
          />
        </div>
      </div>
    </div>
  );
};
