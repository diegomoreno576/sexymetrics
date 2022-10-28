import React, { Fragment } from 'react'
import Conections from '../components/settings/Conections'
import useTimeLine from "../hooks/useTimeLine";
import SeccionesGraficas from "../components/charts/SeccionesGraficas";


const Ajuste_de_marca = () => {


const fblikes = ["0", "0", "0"];
const TimeLine = ["0", "0", "0"];

const FbDatosCrecimiento = [
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "line",
    id: "FbMG",
    name: "Me gusta",
    group: "crecimiento",
    color: "#42a5f5",
    icono: "fa-solid fa-thumbs-up",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "area",
    id: "FbG",
    name: "Ganados",
    group: "crecimiento",
    color: "#4dd0e1",
    icono: "fa-solid fa-arrow-up",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "line",
    id: "FbP",
    name: "Perdidos",
    group: "crecimiento",
    color: "#f06292",
    icono: "fa-solid fa-arrow-down",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "bar",
    id: "FbPost",
    name: "Posts",
    group: "crecimiento",
    color: "#fff176",
    icono: "fa-solid fa-memo",
  },
];

const AlcancePag = [
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "line",
    id: "FbIP",
    name: "Impresiones",
    group: "crecimiento",
    color: "#42a5f5",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "bar",
    id: "FbPost",
    name: "Posts",
    group: "crecimiento",
    color: "#fff176",
  },
];

const FbPublicaciones = [
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "line",
    id: "FbDailyEngagement",
    name: "Engagement",
    group: "clicksPagina",
    color: "#42a5f5",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "area",
    id: "FbDailyInteraction",
    name: "Interacciones",
    group: "clicksPagina",
    color: "#4dd0e1",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "line",
    id: "FbDayliImpresionsUnique",
    name: "Alcance",
    group: "clicksPagina",
    color: "#f06292",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "bar",
    id: "Fbdailyimprsions",
    name: "Impresiones",
    group: "clicksPagina",
    color: "#fff176",
  },
];

const FbClickPagina = [
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "line",
    id: "FbLlamadaAccion",
    name: "Llamada a la acción",
    group: "Publicaciones",
    color: "#42a5f5",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "area",
    id: "DirectionsClick",
    name: "Direcciones",
    group: "Publicaciones",
    color: "#4dd0e1",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "line",
    id: "CallPhoneClicks",
    name: "Teléfono",
    group: "Publicaciones",
    color: "#f06292",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "bar",
    id: "PageViews",
    name: "Vistas de página",
    group: "Publicaciones",
    color: "#fff176",
  },
];

const Fbinteracciones = [
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "line",
    id: "FbMG",
    name: "Reacciones",
    group: "clicksPagina",
    color: "#42a5f5",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "area",
    id: "FbG",
    name: "Comentarios",
    group: "clicksPagina",
    color: "#4dd0e1",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "line",
    id: "FbP",
    name: "Compartidos",
    group: "clicksPagina",
    color: "#f06292",
  },
  {
    data: useTimeLine(fblikes),
    dataNumber: "0",
    dataNumberPast: "0",
    type: "bar",
    id: "FbPost",
    name: "Clicks",
    group: "clicksPagina",
    color: "#fff176",
  },
];

const FbAllData = [
  {
    id: "Crecimiento",
    data: FbDatosCrecimiento,
    name: "Crecimiento",
    colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
  },
  {
    id: "Alcance de pagina",
    data: AlcancePag,
    name: "Alcance de Páginna",
    colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
  },
  {
    id: "Clicks en pagina",
    data: FbClickPagina,
    name: "Clicks en la página",
  },
  {
    id: "Publicaciones",
    data: FbPublicaciones,
    name: "Publicaciones",
  },
  {
    id: "interacciones",
    data: Fbinteracciones,
    name: "Interacciones",
  },
];


  return (
   

    <Fragment>
       <Conections/>
      <div className="container page-container">
        <div className="Ancl ancle-container">
         
        </div>

       <div className="childContainer">
        <div className="row">
          {FbAllData.map((item) => {
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
      </div>
  </Fragment>
  )
}

export default Ajuste_de_marca