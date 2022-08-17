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

const FacebooksAds = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
  //Fecha pasada a la selecionada
  const startPast =  state.TimeStartPast
  const endPast =   state.TimeEndPast


//Body
const fadsBody = useData("/stats/aggregations/FacebookAds", start, end);
const fadsBodyPast = useData("/stats/aggregations/FacebookAds", startPast, endPast);

//ALCANCE
const impresions = useData("/stats/timeline/impressions", start, end)
const reach = useData("/stats/timeline/reach", start, end)
const spend = useData("/stats/timeline/spend", start, end)

//Cliks
const fbAdsClicks = useData("/stats/timeline/clicks", start, end)
const offsite_conversion = useData("/stats/timeline/offsite_conversion", start, end)
const offsite_conversionPast = useData("/stats/timeline/offsite_conversion", startPast, endPast)

//RENDIMIENTO
const FAdscpm = useData("/stats/timeline/cpm", start, end)
const FAdscpc = useData("/stats/timeline/cpc", start, end)
const FAdsctr = useData("/stats/timeline/ctr", start, end)




const TimeLine = reach.map(([key, value]) => {
  return +key;
});


const AlcancePag = [
  {
    data: useTimeLine(impresions),
    dataNumber: fadsBody.impressions,
    dataNumberPast: fadsBodyPast.impressions,
    type: "line",
    id: "FAdsIP",
    name: "Impresiones",
    group: "crecimiento",
    color: "#42a5f5",
  },
  {
    data: useTimeLine(reach),
    dataNumber: fadsBody.reach,
    dataNumberPast: fadsBodyPast.reach,
    type: "bar",
    id: "FAdsgasto",
    name: "Alcance",
    group: "crecimiento",
    color: "#4dd0e1",
  },
  {
    data: useTimeLine(spend),
    dataNumber: parseFloat(fadsBody.spend).toFixed(2) + " €",
    dataNumberPast: parseFloat(fadsBodyPast.spend).toFixed(2) + " €",
    type: "bar",
    id: "FAdsgasto",
    name: "Gasto",
    group: "crecimiento",
    color: "#fff176",
  },
];

const GAdsResultados = [
  {
    data: useTimeLine(fbAdsClicks),
    dataNumber: fadsBody.clicks,
    dataNumberPast: fadsBodyPast.clicks,
    type: "line",
    id: "GAdsDClicks",
    name: "Clicks",
    group: "clicksPagina",
    color: "#42a5f5",
  },
  {
    data: useTimeLine(offsite_conversion),
    dataNumber: useCount(offsite_conversion),
    dataNumberPast: useCount(offsite_conversionPast),
    type: "area",
    id: "FAdsConversiones",
    name: "Conversiones",
    group: "clicksPagina",
    color: "#4dd0e1",
  },
  {
    data: useTimeLine(spend),
    dataNumber: parseFloat(fadsBody.spend).toFixed(2) + " €",
    dataNumberPast: parseFloat(fadsBodyPast.spend).toFixed(2) + " €",
    type: "bar",
    id: "FAdsgasto",
    name: "Gasto",
    group: "crecimiento",
    color: "#fff176",
  },
];

const GAdsRendimiento = [
  {
    data: useTimeLine(FAdscpm),
    dataNumber: fadsBody.unique_clicks == 0? "0" : parseFloat(fadsBody.spend / fadsBody?.impressions * 1000).toFixed(2),
    dataNumberPast: fadsBodyPast.unique_clicks == 0? "0" : parseFloat(fadsBodyPast.spend / fadsBodyPast?.impressions * 1000).toFixed(2),
    type: "area",
    id: "GadsCPM",
    name: "CPM",
    group: "Rendimiento",
    color: "#4dd0e1",
  },
  {
    data: useTimeLine(FAdscpc),
    dataNumber: fadsBody.unique_clicks == 0? "0" : parseFloat(fadsBody.spend / fadsBody.unique_clicks).toFixed(2),
    dataNumberPast: fadsBodyPast.unique_clicks == 0? "0" : parseFloat(fadsBodyPast.spend / fadsBodyPast.unique_clicks).toFixed(2),
    type: "line",
    id: "GAdsCPC",
    name: "CPC",
    group: "Rendimiento",
    color: "#42a5f5",
  },
  {
    data: useTimeLine(FAdsctr),
    dataNumber: fadsBody.unique_clicks == 0? "0" : parseFloat(fadsBody.unique_clicks / fadsBody.impressions * 100).toFixed(2),
    dataNumberPast: fadsBodyPast.unique_clicks == 0? "0" : parseFloat(fadsBodyPast.unique_clicks / fadsBodyPast.impressions * 100).toFixed(2),
    type: "line",
    id: "GAdsCTR",
    name: "CTR",
    group: "Rendimiento",
    color: "#f06292",
  },
  {
    data: useTimeLine(spend),
    dataNumber: parseFloat(fadsBody.spend).toFixed(2) + " €",
    dataNumberPast: parseFloat(fadsBodyPast.spend).toFixed(2) + " €",
    type: "bar",
    id: "FAdsgasto",
    name: "Gasto",
    group: "crecimiento",
    color: "#fff176",
  },
];



const GAdsAllData = [
  {
    id: "Alcance",
    data: AlcancePag,
    name: "Alcance",
    colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
  },
  {
    id: "Resultados",
    data: GAdsResultados,
    name: "Resultados",
  },
  {
    id: "GAdsRendimiento",
    data: GAdsRendimiento,
    name: "Rendimiento",
  },
,
];


return (
  <div className="container">
    <div className="Ancl">
      {GAdsAllData.map((item) => {
        return (
          <a className="SectionsAncles" href={"#" + item.name}>
            {item.name}
          </a>
        );
      })}
    </div>
    <h3 className="PageTitle">VISIÓN GENERAL DE LA PÁGINA DE GOOGLE ADS</h3>
    <div className="row">
      {GAdsAllData.map((item) => {
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
};


export default FacebooksAds