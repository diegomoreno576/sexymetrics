import React, { useContext, useEffect } from "react";
import useData from "../hooks/useData";
import { ThemeContext } from "../context";
import { setFbDatos } from "../actions";
import SeccionesGraficas from "../components/SeccionesGraficas";
import PublicationList from '../components/PublicationList';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ChartPie from "../components/ChartPie";
import ChartCountries from '../components/ChartCountries';
import useTimeLine from "../hooks/useTimeLine";
import { settings } from "../slicks/slickConfig";
import useCount from '../hooks/useCount';


const Facebook = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
  //FbBody
  const fbbody = useData(`/stats/aggregations/Facebook`, start, end);

  //FbBodyPast
  const fbbodyPast = useData(
    `/stats/aggregations/Facebook`,
    state.TimeStartPast,
    state.TimeEndPast
  );

  // Crecimiento

  const fbLikes = useData(`/stats/timeline/facebookLikes`, start, end);
  const fbFollows = useData(`/stats/timeline/fbFollows`, start, end);
  const fbUnFollows = useData(`/stats/timeline/fbUnfollows`, start, end);
  const fbPost = useData(`/stats/timeline/fbPosts`, start, end);


  //Datos  
  const totalPost = useCount(fbPost)

  //Alcance

  const fbImpresiones = useData(`/stats/timeline/pageImpressions`, start, end);

  //Datos
  //Impresiones
  const totalfbImpresiones = useCount(fbImpresiones)

  //Click en la pagina
  const fbctaClicks = useData(`/stats/timeline/ctaClicks`, start, end);
  const fbgetDirectionsClicks = useData(
    `/stats/timeline/getDirectionsClicks`,
    start,
    end
  );
  const fbcallPhoneClicks = useData(
    `/stats/timeline/callPhoneClicks`,
    start,
    end
  );
  const fbpageViews = useData(`/stats/timeline/pageViews`, start, end);

  //Datos
  //Clicks

  const totalfbctaClicks = useCount(fbctaClicks)

  //direcctionClicks
  const totaldirecctionClicks = useCount(fbgetDirectionsClicks)
    //telefono

    const totalfbcallPhoneClicks = useCount(fbcallPhoneClicks)

        //vistas de la pàgina
 
        const totalfbpageViews = useCount(fbpageViews)

  //Publicaciones
  const fbDailyEngagement = useData(
    `/stats/timeline/fbDailyEngagement`,
    start,
    end
  );
  const fbDailyInteractions = useData(
    `/stats/timeline/fbDailyInteractions`,
    start,
    end
  );
  const fbdailyImpressionsUnique = useData(
    `/stats/timeline/dailyImpressionsUnique`,
    start,
    end
  );
  const fbdailyImpressions = useData(
    `/stats/timeline/dailyImpressions`,
    start,
    end
  );

  //Interacciones
  const fbdailyReactions = useData(
    `/stats/timeline/dailyReactions`,
    start,
    end
  );
  const fbComments = useData(`/stats/timeline/fbComments`, start, end);
  const fbdailyShares = useData(`/stats/timeline/dailyShares`, start, end);
  const fbdailyClicks = useData(`/stats/timeline/dailyClicks`, start, end);




  //Sexo
  const fbsexo = useData(`/stats/gender/facebook`, start, end);


  let sexData = []
  let sexValue = []

  for (const [key, value] of Object.entries(fbsexo)) {
    sexData.push(value);
    sexValue.push(key);
  }

  // Paises 
  const fbCountries = useData(`/stats/country/facebook`, start, end);


  //Lista de publicaciones
  const fbListPublications = useData(`/stats/facebook/posts`, start, end);

//TimeLine

  const TimeLine = fbLikes.map(([key, value]) => {
    
    return +key;

  });

//Me gusta
const fbLikesAll = useTimeLine(fbLikes)

//Ganados
const fbFollowsAll = useTimeLine(fbFollows)


// Count Posts
  const post = useTimeLine(fbPost)


  //fbDailyEngagement

  const engagement = useTimeLine(fbDailyEngagement)

  //fbDailyInteractions

  const fbInteractions = useTimeLine(fbDailyInteractions)

  //fbdailyImpressionsUnique

  const fbAlance = useTimeLine(fbdailyImpressionsUnique)

  //fbdailyImpressions
  const fbImpresionesall = useTimeLine(fbdailyImpressions)

  //Reaciones
 const fbReaciones = useTimeLine(fbdailyReactions)

 //Comentarios
 const fbComentarios = useTimeLine(fbComments)

 //Compartidos
 const fbCompartidos = useTimeLine(fbdailyShares)

 //clicks
 const fbClicks = useTimeLine(fbdailyClicks)



  const FbDatosCrecimiento = [
    {
      data: fbLikesAll,
      dataNumber:
        fbLikes.length != 0 ? parseInt(fbLikes[fbLikes.length - 1][1], 0) : "",
      dataNumberPast: "5",
      type: "line",
      id: "FbMG",
      name: "Me gusta",
      group: "crecimiento",
      color: "#42a5f5",
      icono: "fa-solid fa-thumbs-up",
    },
    {
      data: fbFollowsAll,
      dataNumber: fbbody.Follows,
      dataNumberPast: fbbodyPast.Follows,
      type: "area",
      id: "FbG",
      name: "Ganados",
      group: "crecimiento",
      color: "#4dd0e1",
      icono: "fa-solid fa-arrow-up",
    },
    {
      data: fbUnFollows.map((d) => {
        return parseInt(d[1]);
      }),
      dataNumber: fbbody.Unfollows,
      dataNumberPast: fbbodyPast.Unfollows,
      type: "line",
      id: "FbP",
      name: "Perdidos",
      group: "crecimiento",
      color: "#f06292",
      icono: "fa-solid fa-arrow-down",
    },
    {
      data: post,
      dataNumber: totalPost,
      dataNumberPast: "5",
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
      data: fbImpresiones.map((d) => {
        return +d[1];
      }),
      dataNumber: totalfbImpresiones,
      type: "line",
      id: "FbIP",
      name: "Impresiones",
      group: "crecimiento",
      color: "#42a5f5",
    },
    {
      data: post,
      dataNumber: totalPost,
      type: "bar",
      id: "FbPost",
      name: "Posts",
      group: "crecimiento",
      color: "#fff176",
    },
  ];

  const FbPublicaciones = [
    {
      data: engagement,
      dataNumber: "10",
      type: "line",
      id: "FbDailyEngagement",
      name: "Engagement",
      group: "clicksPagina",
      color: "#42a5f5",
    },
    {
      data: fbInteractions,
      dataNumber: "10",
      type: "area",
      id: "FbDailyInteraction",
      name: "Interacciones",
      group: "clicksPagina",
      color: "#4dd0e1",
    },
    {
      data: fbAlance,
      dataNumber: "10",
      type: "line",
      id: "FbDayliImpresionsUnique",
      name: "Alcance",
      group: "clicksPagina",
      color: "#f06292",
    },
    {
      data: fbImpresionesall,
      dataNumber: "10",
      type: "bar",
      id: "Fbdailyimprsions",
      name: "Impresiones",
      group: "clicksPagina",
      color: "#fff176",
    },
  ];

  const FbClickPagina = [
    {
      data: fbctaClicks.map((d) => {
        return +d[1];
      }),
      dataNumber: totalfbctaClicks,
      type: "line",
      id: "FbLlamadaAccion",
      name: "Llamada a la acción",
      group: "Publicaciones",
      color: "#42a5f5",
    },
    {
      data: fbgetDirectionsClicks.map((d) => {
        return +d[1];
      }),
      dataNumber: totaldirecctionClicks,
      type: "area",
      id: "DirectionsClick",
      name: "Direcciones",
      group: "Publicaciones",
      color: "#4dd0e1",
    },
    {
      data: fbcallPhoneClicks.map((d) => {
        return +d[1];
      }),
      dataNumber: totalfbcallPhoneClicks,
      type: "line",
      id: "CallPhoneClicks",
      name: "Teléfono",
      group: "Publicaciones",
      color: "#f06292",
    },
    {
      data: fbpageViews.map((d) => {
        return +d[1];
      }),
      dataNumber: totalfbpageViews,
      type: "bar",
      id: "PageViews",
      name: "Vistas de página",
      group: "Publicaciones",
      color: "#fff176",
    },
  ];

  const Fbinteracciones = [
    {
      data: fbReaciones,
      dataNumber: "10",
      type: "line",
      id: "FbMG",
      name: "Reacciones",
      group: "clicksPagina",
      color: "#42a5f5",
    },
    {
      data: fbComentarios,
      dataNumber: "10",
      type: "area",
      id: "FbG",
      name: "Comentarios",
      group: "clicksPagina",
      color: "#4dd0e1",
    },
    {
      data: fbCompartidos,
      dataNumber: "10",
      type: "line",
      id: "FbP",
      name: "Compartidos",
      group: "clicksPagina",
      color: "#f06292",
    },
    {
      data: fbClicks,
      dataNumber: "10",
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

  useEffect(() => {
    dispatch(setFbDatos(FbAllData));
  }, []);
  return (
    <div className="container">
      <div className="Ancl">
      {FbAllData.map((item) => {
          return (
          <a className="SectionsAncles" href={"#"+item.name}>{item.name}</a>
          );
        })}
      </div>
      <h3 className="PageTitle">VISIÓN GENERAL DE LA PÁGINA DE FACEBOOK</h3>
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

<div className="row">
<div className="charPie col-6">
        <h5>Sexo</h5>
      <ChartPie
     series={sexData}
     labels={sexValue}
     />
    </div>
    <div className="charPie col-6">
        <h5>Paises</h5>
      <ChartCountries
      data={fbCountries}
      />
    </div>
</div>


      <h3>Lista de Publicaciones</h3>
      <Slider {...settings}>
      {fbListPublications.map((item) => {
       const fecha = new Date(item.timestamp).toDateString();
       
         return (
       
      <PublicationList 
      picture={item.picture}
      link={item.link}
      fecha={fecha}
      type={item.type}
      clicks={item.clicks}
      text={item.text}
      Likes={item.reactions}
      linkclicks={item.linkclicks}
      puntos={parseInt(item.engagement)}
      reproducciones={item.videoViews}
      />
      
         );
    })}

     </Slider>  

    </div>
  );
};

export default Facebook;
