import React, { useContext, useEffect } from "react";
import useData from "../hooks/useData";
import { ThemeContext } from "../context";
import { setFbDatos } from "../actions";
import SeccionesGraficas from "../components/charts/SeccionesGraficas";
import PublicationList from "../components/Lists/PublicationList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChartPie from "../components/charts/ChartPie";
import ChartCountries from "../components/charts/ChartCountries";
import useTimeLine from "../hooks/useTimeLine";
import { settings } from "../slicks/slickConfig";
import useCount from "../hooks/useCount";

const GoogleMyBussines = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
    //Fecha pasada a la selecionada
    const startPast =  state.TimeStartPast
    const endPast =   state.TimeEndPast

    const fbLikes = useData(
      `/stats/timeline/facebookLikes`,
     start,
      end)
      ;
    //Body
    const gmbBody = useData("/stats/aggregations/gmb", start, end);
    const gmbBodyPast = useData("/stats/aggregations/gmb", startPast, endPast);

    //busquedas
    const queriesDirect = useData("/stats/timeline/queriesDirect", start, end);
    const queriesIndirect = useData("/stats/timeline/queriesIndirect", start, end)
    const queriesChain = useData("/stats/timeline/queriesChain", start, end)
    const gmbQueriesTotal = useData("/stats/timeline/gmbQueriesTotal", start, end)
    const gmbQueriesTotalPast = useData("/stats/timeline/gmbQueriesTotal", startPast, endPast)

    //visitas
    const viewsMaps = useData("/stats/timeline/viewsMaps", start, end)
    const viewsSearch = useData("/stats/timeline/viewsSearch", start, end)
    const gmbViewsTotal = useData("/stats/timeline/gmbViewsTotal", start, end)
    const gmbViewsTotalPast = useData("/stats/timeline/gmbViewsTotal", startPast, endPast)

    //Cliks
    const actionsWebsite = useData("/stats/timeline/actionsWebsite", start, end)
    const actionsPhone = useData("/stats/timeline/actionsPhone", start, end)
    const actionsDrivingDirectory = useData("/stats/timeline/actionsDrivingDirectory", start, end)

    const gmbClicksTotal = useData("/stats/timeline/gmbClicksTotal", start, end)
    const gmbClicksTotalPast = useData("/stats/timeline/gmbClicksTotal", startPast, endPast)

    const TimeLine = fbLikes.map(([key, value]) => {
      return +key;
    });
  

    const GmCrecimiento = [
      {
        data: useTimeLine(viewsMaps),
        dataNumber: gmbBody["QUERIES_DIRECT"],
        dataNumberPast:gmbBodyPast["QUERIES_DIRECT"],
        type: "line",
        id: "GmDirectas",
        name: "Directas",
        group: "Busquedas",
        color: "#42a5f5",
        icono: "fa-solid fa-thumbs-up",
      },
      {
        data: useTimeLine(viewsSearch),
        dataNumber: gmbBody["QUERIES_INDIRECT"],
        dataNumberPast: gmbBodyPast["QUERIES_INDIRECT"],
        type: "area",
        id: "GmIndirectas",
        name: "Indirectas",
        group: "Busquedas",
        color: "#4dd0e1",
        icono: "fa-solid fa-arrow-up",
      },
      {
        data: useTimeLine(queriesChain),
        dataNumber: gmbBody["QUERIES_CHAIN"],
        dataNumberPast: gmbBodyPast["QUERIES_CHAIN"],
        type: "line",
        id: "GmCadenas",
        name: "Cadenas",
        group: "Busquedas",
        color: "#f06292",
        icono: "fa-solid fa-arrow-down",
      },
      {
        data: useTimeLine(gmbQueriesTotal),
        dataNumber: useCount(gmbQueriesTotal),
        dataNumberPast: useCount(gmbQueriesTotalPast),
        type: "bar",
        id: "GmTotal",
        name: "Total",
        group: "Busquedas",
        color: "#fff176",
        icono: "fa-solid fa-memo",
      },
    ];

    const GmVisitas = [
      {
        data: useTimeLine(actionsWebsite),
        dataNumber: gmbBody["VIEWS_MAPS"],
        dataNumberPast:gmbBodyPast["VIEWS_MAPS"],
        type: "line",
        id: "GmGoogle Maps",
        name: "Google Maps",
        group: "visitas",
        color: "#42a5f5",
        icono: "fa-solid fa-thumbs-up",
      },
     
      {
        data: useTimeLine(actionsDrivingDirectory),
        dataNumber: gmbBody["VIEWS_SEARCH"],
        dataNumberPast: gmbBodyPast["VIEWS_SEARCH"],
        type: "line",
        id: "GmBúscador de Google",
        name: "Búscador de Google",
        group: "visitas",
        color: "#4dd0e1",
        icono: "fa-solid fa-arrow-down",
      },
      {
        data: useTimeLine(gmbClicksTotal),
        dataNumber: useCount(gmbClicksTotal),
        dataNumberPast: useCount(gmbViewsTotalPast),
        type: "bar",
        id: "GmTotal",
        name: "Total",
        group: "visitas",
        color: "#fff176",
        icono: "fa-solid fa-memo",
      },
    ];


    const GmClicks = [
      {
        data: useTimeLine(actionsWebsite),
        dataNumber: gmbBody["ACTIONS_WEBSITE"],
        dataNumberPast:gmbBodyPast["ACTIONS_WEBSITE"],
        type: "line",
        id: "GmSitio Web",
        name: "Sitio Web",
        group: "Clicks",
        color: "#42a5f5",
        icono: "fa-solid fa-thumbs-up",
      },
      {
        data: useTimeLine(actionsPhone),
        dataNumber: gmbBody["ACTIONS_PHONE"],
        dataNumberPast: gmbBodyPast["ACTIONS_PHONE"],
        type: "area",
        id: "GmTeléfono",
        name: "Teléfono",
        group: "Clicks",
        color: "#4dd0e1",
        icono: "fa-solid fa-arrow-up",
      },
      {
        data: useTimeLine(actionsDrivingDirectory),
        dataNumber: gmbBody["ACTIONS_DRIVING_DIRECTIONS"],
        dataNumberPast: gmbBodyPast["ACTIONS_DRIVING_DIRECTIONS"],
        type: "line",
        id: "GmComo Llegar",
        name: "Como Llegar",
        group: "Clicks",
        color: "#f06292",
        icono: "fa-solid fa-arrow-down",
      },
      {
        data: useTimeLine(gmbClicksTotal),
        dataNumber: useCount(gmbClicksTotal),
        dataNumberPast: useCount(gmbClicksTotalPast),
        type: "bar",
        id: "GmTotal",
        name: "Total",
        group: "Clicks",
        color: "#fff176",
        icono: "fa-solid fa-memo",
      },
    ];

    const GmAllData = [
      {
        id: "Crecimiento",
        data: GmCrecimiento,
        name: "Crecimiento",
        colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
      },
      {
        id: "Visitas",
        data: GmVisitas,
        name: "Visitas",
        colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
      },
      {
        id: "Clicks",
        data: GmClicks,
        name: "Cliks",
        colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
      }
    ];

    return (
      <div className="container">
        <div className="Ancl">
          {GmAllData.map((item) => {
            return (
              <a className="SectionsAncles" href={"#" + item.name}>
                {item.name}
              </a>
            );
          })}
        </div>
        <h3 className="PageTitle">VISIÓN GENERAL DE LA PÁGINA DE GOOGLE MY BUSSINES</h3>
        <div className="row">
          {GmAllData.map((item) => {
            return (
              <SeccionesGraficas
                id={item.id}
                data={item.data}
                timeLine={TimeLine}
                name={item.name}
                colors={item.colors}
              />
            );
          })}
        </div>
  

  
       
      </div>
    );
}

export default GoogleMyBussines