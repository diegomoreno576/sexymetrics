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
import CitiesList from "../components/Lists/CitiesList";

const Web = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
    //Fecha pasada a la selecionada
    const startPast =  state.TimeStartPast
    const endPast =   state.TimeEndPast

    //Body
    const webBody = useData("/stats/aggregations/Audience", start, end);
    const webBodyPast = useData("/stats/aggregations/Audience", startPast, endPast);

    const webBodyC = useData("/stats/aggregations/Contents", start, end);

      //Paginas visitadas
     const pageviews  = useData("/stats/timeline/PageViews", start, end);

    //visistors
    const visitors = useData("/stats/timeline/Visitors", start, end);

    //Visitas
    const SessionsCount = useData("/stats/timeline/SessionsCount", start, end);

     // Posts 
      const DailyPosts = useData("/stats/timeline/DailyPosts", start, end);  
      const DailyPostsPast = useData("/stats/timeline/DailyPosts", startPast, endPast); 

    // Comentarios
    const DailyComments = useData("/stats/timeline/DailyComments", start, end); 
    const DailyCommentsPast = useData("/stats/timeline/DailyComments", startPast, endPast); 

    //Países de los visitantes
    const Webcountries = useData("/stats/distribution/country", start, end); 
    const Webcountry = Object.entries(Webcountries);
    
    //fuente de trafico de los visitantes
    const Websourcies = useData("/stats/distribution/sources", start, end);
    const Websources = Object.entries(Websourcies);

    //páginas vistas de los visitantes
    const Webreferer = useData("/stats/distribution/referers", start, end);
    const Webreferers = Object.entries(Webreferer);

    //Lista de publicaciones
    const webPost = useData("/stats/posts", start, end);
  

    const TimeLine = pageviews.map(([key, value]) => {
      return +key;
    });

     
  const WebCrecimiento = [
    {
      data: useTimeLine(pageviews),
      dataNumber: webBody.PageViews,
      dataNumberPast: webBodyPast.PageViews,
      type: "line",
      id: "WebVistas",
      name: "Páginas Vistas",
      group: "crecimiento",
      color: "#42a5f5",
      icono: "fa-solid fa-thumbs-up",
    },
    {
      data: useTimeLine(visitors),
      dataNumber: webBody.SessionsCount,
      dataNumberPast: webBodyPast.SessionsCount,
      type: "area",
      id: "WebVisitas",
      name: "Visitas",
      group: "crecimiento",
      color: "#4dd0e1",
      icono: "fa-solid fa-arrow-up",
    },
    {
      data: useTimeLine(SessionsCount),
      dataNumber: webBody.Visitors,
      dataNumberPast: webBodyPast.Visitors,
      type: "line",
      id: "WebUsuarios",
      name: "Usuarios",
      group: "crecimiento",
      color: "#f06292",
      icono: "fa-solid fa-arrow-down",
    },
    {
      data: useTimeLine(DailyComments),
      dataNumber: useCount(DailyComments),
      dataNumberPast: useCount(DailyCommentsPast),
      type: "bar",
      id: "WebComentarios",
      name: "Comentarios",
      group: "crecimiento",
      color: "#fff176",
      icono: "fa-solid fa-memo",
    },
    {
      data: useTimeLine(DailyPosts),
      dataNumber: useCount(DailyPosts),
      dataNumberPast: useCount(DailyPostsPast),
      type: "bar",
      id: "WebPost",
      name: "Posts",
      group: "crecimiento",
      color: "#fff176",
      icono: "fa-solid fa-memo",
    },
  ];


  const WebAllData = [
    {
      id: "Crecimiento",
      data: WebCrecimiento,
      name: "Crecimiento",
      colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
    }
  ];



  return (
    <div className="container">
      <div className="Ancl">
        {WebAllData.map((item) => {
          return (
            <a className="SectionsAncles" href={"#" + item.name}>
              {item.name}
            </a>
          );
        })}
      </div>
      <h3 className="PageTitle">VISIÓN GENERAL DE LA PÁGINA DE WEB</h3>
      <div className="row">
        {WebAllData.map((item) => {
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
      <div className="row">
      <div className="chartCountries col-lg-6 col-12">
          <h5 className="Subtitle">PAÍSES DE LOS VISITANTES</h5>
          <ChartCountries data={Webcountry} />
        </div>
        <div className="charsex col-lg-6 col-12">
          <h5 className="Subtitle">
          CIUDADES DE LOS VISITANTES
            </h5>
            <div className="ListCities">
          <CitiesList data={Webcountry}/>
          </div>
        </div>

        <div className="charsex col-lg-6 col-12">
          <h5 className="Subtitle">
           Páginas Vistas
            </h5>
            <div className="ListCities">
          <CitiesList data={Webreferers}/>
          </div>
        </div>
        <div className="Subtitle chartGender col-lg-6 col-12">
          <h5>Fuentes de Tráfico</h5>

          <div className="ListCities">
          <CitiesList data={Websources}/>
          </div>
        </div>
     
        
      </div>

      <h3>Lista de Publicaciones</h3>
      <Slider {...settings}>
        {webPost.map((item) => {
          const fecha = new Date(item.date).toDateString();

          return (
            <PublicationList
              picture={item.picture}
              link={item.url}
              fecha={fecha}
              type={item.type}
              clicks={item.clicks}
              text={item.excerpt}
              Likes={item.likes}
              linkclicks={item.linkclicks}
              puntos={parseInt(item.engagement)}
              reproducciones={item.impressions}
            />
          );
        })}
      </Slider>
   
    </div>
  );
}

export default Web