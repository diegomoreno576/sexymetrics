import React from "react";
import BotonGrafica from "../charts/BotonGrafica";
import ButtonsData from "./ButtonsData";
import '../../assets/styles/components/dashboard/Dashboard.css'
import MaxAge from "./MaxAge";
import MaxCountry from "./MaxCountry";
import MaxCity from './MaxCity';
import Userssex from "./Userssex";
import LastPost from "./LastPost";

export const Dashboard = (props) => {
  return (
    <div className="Resumen">
      <div className="mainResumenTitle">
        <h4 className="ResumenTitle">Resumen {props.name}</h4>
      </div>

     <div className="dashboardContainer">
     <div className="row">
        <div key={props.dataGrafica.id} className="col-4 buttonDashboard">
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
            height={210}
          />
        </div>

        <div className="col-8 right-dashboardItems">
          <div className="row mainDatabuttons ">
            {props.data.map((item) => {
              return (
                <div className="col-4 buttonsitems">
                  <ButtonsData
                    number={item.dataNumber}
                    name={item.name}
                    color={item.color}
                  />
                </div>
              );
            })}
          </div>

          <div className="row mainAgeSex">
            <div className="col-4 buttonsItemsDown">
              <MaxAge number={props.age.dataNumber} />
            </div>
            <div className="col-8 buttonsItemsDown">
              <Userssex
                sex={props.sex}
                colors={["#fff176", "#4dd0e1", "#f06292"]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bottomItemsDashboard">
        <div className="row">
          <div className="col-4">
            <div className="row twoButtonsdown">
              <div className="col-12">
                <MaxCountry name={props.country.name} />
              </div>

              <div className="col-12">
                <MaxCity name={props.city.name} />
              </div>
            </div>
          </div>
          <div className="col-8">
            <LastPost/>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};
