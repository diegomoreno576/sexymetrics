import React, { useContext, useEffect, useState,  Fragment } from "react";
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
import ChartEdad from "../components/charts/ChartEdad";
import CitiesList from "../components/Lists/CitiesList";
import { useActiveMenu } from "react-active-menu";
import PageBanner from '../components/PageBanner';
import { useParams } from "react-router-dom";
import { APP_URL } from "../constants";
import { NavLink } from 'react-router-dom';
const Facebook = () => {


  
  const [state, dispatch] = useContext(ThemeContext);
 
  const start = state.TimeStart;
  const end = state.TimeEnd;

  //Fecha pasada a la selecionada
  const startPast = state.TimeStartPast;
  const endPast = state.TimeEndPast;

  const {currentuser} = state
  let {brands} = currentuser;
  let {user} = currentuser;
  let currentBrand = brands?.[0]?.id
  let user_id = user?.data?.attributes?.id

  const { registerContainer, registerSection, registerTrigger } = useActiveMenu(
    {
      smooth: true,
    }
  );

  let fb_likes = useData("page_facebook", start, end)
  const TimeLine = fb_likes?.fb_likes?.map(([key, value]) => {
    return key;
  });

  if(fb_likes.connected !== false){
  const FbDatosCrecimiento = [
    {
      data:  fb_likes?.fb_likes?.map(([key, value]) => {
        return value;
      }),
     dataNumber: fb_likes?.fb_likes?.at(-1)[1],
      //dataNumberPast: "3544",
      type: "line",
      id: "FbMG",
      name: "Me gusta",
      group: "crecimiento",
      color: "#42a5f5",
      icono: "fa-solid fa-thumbs-up",
    },
    {
      data:  fb_likes?.fb_likes_adds?.map(([key, value]) => {
        return value;
      }),
      dataNumber: fb_likes?.total_fb_likes_adds,
      // dataNumberPast: "3544",
      type: "area",
      id: "FbG",
      name: "Ganados",
      group: "crecimiento",
      color: "#4dd0e1",
      icono: "fa-solid fa-arrow-up",
    },
    {
      data:  fb_likes?.fb_likes_removes?.map(([key, value]) => {
        return value;
      }),
      dataNumber:fb_likes?.total_fb_likes_removes,
      // dataNumberPast: "3544",
      type: "line",
      id: "FbP",
      name: "Perdidos",
      group: "crecimiento",
      color: "#f06292",
      icono: "fa-solid fa-arrow-down",
    },
    // {
    //   data:  fb_likes?.fb_posts?.map(([key, value]) => {
    //     return value;
    //   }),
    //   dataNumber: fb_likes?.total_posts,
    //   dataNumberPast: "0",
    //   type: "bar",
    //   id: "FbPost",
    //   name: "Posts",
    //   group: "crecimiento",
    //   color: "#fff176",
    //   icono: "fa-solid fa-memo",
    // },
  ];

  const AlcancePag = [
    {
      data: fb_likes?.fb_impresiones?.map(([key, value]) => {
        return value;
      }),
      dataNumber: fb_likes?.total_fb_impresiones,
      //dataNumberPast: fbbodyPast.pageImpressions,
      type: "line",
      id: "FbIP",
      name: "Impresiones",
      group: "crecimiento",
      color: "#42a5f5",
    },
    // {
    //   data: useTimeLine(fbPost),
    //   dataNumber: useCount(fbPost),
    //   dataNumberPast: useCount(fbPostPast),
    //   type: "bar",
    //   id: "FbPost",
    //   name: "Posts",
    //   group: "crecimiento",
    //   color: "#fff176",
    // },
  ];

  const FbClickPagina = [
    {
      data: fb_likes?.fb_page_total_actions?.map(([key, value]) => {
        return value;
      }),
      dataNumber: fb_likes?.total_fb_page_total_actions,
      dataNumberPast: '',
      type: "line",
      id: "FbLlamadaAccion",
      name: "Llamada a la acción",
      group: "Publicaciones",
      color: "#42a5f5",
    },
    {
      data: fb_likes?.fb_page_get_directions_clicks?.map(([key, value]) => {
        return value;
      }),
      dataNumber: fb_likes?.total_fb_page_get_directions_clicks,
      dataNumberPast: '0',
      type: "area",
      id: "DirectionsClick",
      name: "Direcciones",
      group: "Publicaciones",
      color: "#4dd0e1",
    },
    {
      data: fb_likes?.fb_page_call_phone_clicks?.map(([key, value]) => {
        return value;
      }),
      dataNumber: fb_likes?.total_fb_page_call_phone_clicks,
      dataNumberPast: '0',
      type: "line",
      id: "CallPhoneClicks",
      name: "Teléfono",
      group: "Publicaciones",
      color: "#f06292",
    },
    {
      data: fb_likes?.fb_page_views_total?.map(([key, value]) => {
        return value;
      }),
      dataNumber: fb_likes?.total_fb_page_views_total,
      dataNumberPast: '0',
      type: "bar",
      id: "PageViews",
      name: "Vistas de página",
      group: "Publicaciones",
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
  ];

  return (
    <Fragment>
      <PageBanner />
        <div className="container page-container">
          <div className="Ancl ancle-container">
            <div className="ancle-item">
              {FbAllData.map((item) => {
                return (
                  <a
                    ref={registerTrigger(item.name)}
                    className="SectionsAncles"
                    href={"#" + item.name}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
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
  );
}
else{
  return (
    <div className="container main_connect_account_page">
      <div className="row">
        <div className="col-12">
          <h3 className="">
            <i class="facebook_icon fa-brands fa-facebook"></i> Facebook Página
          </h3>
        </div>
        <div className="connect_page_descrption">
          <p>
            Conecta tu página de Facebook para ver los datos de tu página.
          </p>
        </div>
        <div className="conect_account">
        <NavLink to={`/ajustes/brand_id=${currentBrand}&user_id=${user_id}`}  className="btn fb_confirm-btn">
                Conectar Facebook <i class="fa-brands fa-facebook"></i>
              </NavLink>
        </div>
      </div>

    </div>
  );
  }
};

export default Facebook;
