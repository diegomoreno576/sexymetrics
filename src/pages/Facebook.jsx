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
import ChartEdad from "../components/charts/ChartEdad";
import CitiesList from "../components/Lists/CitiesList";




const Facebook = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
  //Fecha pasada a la selecionada
  const startPast =  state.TimeStartPast
  const endPast =   state.TimeEndPast
 

 
  //FbBody
  const fbbody = useData(
    `/stats/aggregations/Facebook`,
   start, 
   end
   );

  //FbBodyPast
  const fbbodyPast = useData(
     `/stats/aggregations/Facebook`,
   startPast, 
   endPast);


  // Crecimiento

  const fbLikes = useData(
    `/stats/timeline/facebookLikes`,
   start,
    end)
    ;
  const fbLikesPast = useData(
    `/stats/timeline/facebookLikes`,
   startPast, 
   endPast
   );

  const fbFollows = useData(
    `/stats/timeline/fbFollows`,
   start, 
   end
   );
  const fbUnFollows = useData(
    `/stats/timeline/fbUnfollows`,
   start,
    end
    );
  
  const fbPost = useData(
    `/stats/timeline/fbPosts`,
   start, 
   end
   );
  const fbPostPast = useData(
    `/stats/timeline/fbPosts`,
   startPast,
    endPast
    );

  //Alcance

  const fbImpresiones = useData(
    `/stats/timeline/pageImpressions`,
   start, 
   end
   );

 
  //Click en la pagina
  const fbctaClicks = useData(
    `/stats/timeline/ctaClicks`, 
  start, 
  end
  );

  const fbgetDirectionsClicks = useData(
    `/stats/timeline/getDirectionsClicks`,
   start,
    end
    );
  const fbgetDirectionsClicksPast = useData(
    `/stats/timeline/getDirectionsClicks`,
   startPast,
    endPast
    );

  const fbcallPhoneClicks = useData(
    `/stats/timeline/callPhoneClicks`,
   start,
   end
   );
  const fbcallPhoneClicksPast = useData(
    `/stats/timeline/callPhoneClicks`,
   startPast,
   endPast
   );

  const fbpageViews = useData(
    `/stats/timeline/pageViews`, 
  start,
   end
   );


  //Publicaciones
  const fbDailyEngagement = useData(
    `/stats/timeline/fbDailyEngagement`,
    start,
    end
  );
  const fbDailyEngagementPast = useData(
    `/stats/timeline/fbDailyEngagement`,
    startPast,
    endPast
  );

  const fbDailyInteractions = useData(
    `/stats/timeline/fbDailyInteractions`,
    start,
    end
  );
  const fbDailyInteractionsPast = useData(
    `/stats/timeline/fbDailyInteractions`,
    startPast,
    endPast
  );

  const fbdailyImpressionsUnique = useData(
    `/stats/timeline/dailyImpressionsUnique`,
    start,
    end
  );
  const fbdailyImpressionsUniquePast = useData(
    `/stats/timeline/dailyImpressionsUnique`,
    startPast,
    endPast
  );

  const fbdailyImpressions = useData(
    `/stats/timeline/dailyImpressions`,
    start,
    end
  );

  const fbdailyImpressionsPast = useData(
    `/stats/timeline/dailyImpressions`,
    startPast,
    endPast
  );

  //Interacciones
  const fbdailyReactions = useData(
    `/stats/timeline/dailyReactions`,
    start,
    end
  );
  const fbdailyReactionsPast = useData(
    `/stats/timeline/dailyReactions`,
    startPast,
    endPast
  );

  const fbComments = useData(
    `/stats/timeline/fbComments`
    , start, 
    end
    );
    const fbCommentsPast = useData(
      `/stats/timeline/fbComments`
      , startPast, 
      endPast
      );

  const fbdailyShares = useData(
    `/stats/timeline/dailyShares`,
     start, 
     end
     );
     const fbdailySharesPast = useData(
      `/stats/timeline/dailyShares`,
       startPast, 
       endPast
       );

  const fbdailyClicks = useData(
    `/stats/timeline/dailyClicks`,
     start,
      end
      );
      const fbdailyClicksPast = useData(
        `/stats/timeline/dailyClicks`,
         startPast,
          endPast
          );    

  //Sexo
  const fbsexo = useData(`/stats/gender/facebook`, start, end);
  //Edad
  const fbage = useData(`/stats/age/facebook`, start, end);
  // Paises
  const fbCountries = useData(`/stats/country/facebook`, start, end);
  const fbCountry = Object.entries(fbCountries);
  //Ciudades
  const fbCities = useData(`/stats/city/facebook`, start, end);
  const fbCity = Object.entries(fbCities);
  //Lista de publicaciones
  const fbListPublications = useData(`/stats/facebook/posts`, start, end);
  //TimeLine

  const TimeLine = fbLikes.map(([key, value]) => {
    return +key;
  });

 
  const FbDatosCrecimiento = [
    {
      data: useTimeLine(fbLikes),
      dataNumber:
        fbLikes.length !== 0 ? parseInt(fbLikes[fbLikes.length - 1][1], 0) : "",
      dataNumberPast: fbLikesPast.length !== 0 ? parseInt(fbLikesPast[fbLikesPast.length - 1][1], 0) : "",
      type: "line",
      id: "FbMG",
      name: "Me gusta",
      group: "crecimiento",
      color: "#42a5f5",
      icono: "fa-solid fa-thumbs-up",
    },
    {
      data: useTimeLine(fbFollows),
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
      data: useTimeLine(fbUnFollows),
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
      data: useTimeLine(fbPost),
      dataNumber: useCount(fbPost),
      dataNumberPast: useCount(fbPostPast),
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
      data: useTimeLine(fbImpresiones),
      dataNumber: fbbody.pageImpressions,
      dataNumberPast: fbbodyPast.pageImpressions,
      type: "line",
      id: "FbIP",
      name: "Impresiones",
      group: "crecimiento",
      color: "#42a5f5",
    },
    {
      data: useTimeLine(fbPost),
      dataNumber: useCount(fbPost),
      dataNumberPast: useCount(fbPostPast),
      type: "bar",
      id: "FbPost",
      name: "Posts",
      group: "crecimiento",
      color: "#fff176",
    },
  ];

  const FbPublicaciones = [
    {
      data: useTimeLine(fbDailyEngagement),
      dataNumber: useCount(fbDailyEngagement),
      dataNumberPast: useCount(fbDailyEngagementPast),
      type: "line",
      id: "FbDailyEngagement",
      name: "Engagement",
      group: "clicksPagina",
      color: "#42a5f5",
    },
    {
      data: useTimeLine(fbDailyInteractions),
      dataNumber: useCount(fbDailyInteractions),
      dataNumberPast: useCount(fbDailyInteractionsPast),
      type: "area",
      id: "FbDailyInteraction",
      name: "Interacciones",
      group: "clicksPagina",
      color: "#4dd0e1",
    },
    {
      data: useTimeLine(fbdailyImpressionsUnique),
      dataNumber: useCount(fbdailyImpressionsUnique),
      dataNumberPast: useCount(fbdailyImpressionsUniquePast),
      type: "line",
      id: "FbDayliImpresionsUnique",
      name: "Alcance",
      group: "clicksPagina",
      color: "#f06292",
    },
    {
      data: useTimeLine(fbdailyImpressions),
      dataNumber: useCount(fbdailyImpressions),
      dataNumberPast: useCount(fbdailyImpressionsPast),
      type: "bar",
      id: "Fbdailyimprsions",
      name: "Impresiones",
      group: "clicksPagina",
      color: "#fff176",
    },
  ];

  const FbClickPagina = [
    {
      data: useTimeLine(fbctaClicks),
      dataNumber: fbbody.ctaClicks,
      dataNumberPast: fbbodyPast.ctaClicks,
      type: "line",
      id: "FbLlamadaAccion",
      name: "Llamada a la acción",
      group: "Publicaciones",
      color: "#42a5f5",
    },
    {
      data: useTimeLine(fbgetDirectionsClicks),
      dataNumber: useCount(fbgetDirectionsClicks),
      dataNumberPast: useCount(fbgetDirectionsClicksPast),
      type: "area",
      id: "DirectionsClick",
      name: "Direcciones",
      group: "Publicaciones",
      color: "#4dd0e1",
    },
    {
      data: useTimeLine(fbcallPhoneClicks),
      dataNumber: useCount(fbcallPhoneClicks),
      dataNumberPast: useCount(fbcallPhoneClicksPast),
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
      dataNumber: fbbody.pageViews,
      dataNumberPast: fbbodyPast.pageViews,
      type: "bar",
      id: "PageViews",
      name: "Vistas de página",
      group: "Publicaciones",
      color: "#fff176",
    },
  ];

  const Fbinteracciones = [
    {
      data: useTimeLine(fbdailyReactions),
      dataNumber: useCount(fbdailyReactions),
      dataNumberPast: useCount(fbdailyReactionsPast),
      type: "line",
      id: "FbMG",
      name: "Reacciones",
      group: "clicksPagina",
      color: "#42a5f5",
    },
    {
      data: useTimeLine(fbComments),
      dataNumber: useCount(fbComments),
      dataNumberPast: useCount(fbCommentsPast),
      type: "area",
      id: "FbG",
      name: "Comentarios",
      group: "clicksPagina",
      color: "#4dd0e1",
    },
    {
      data: useTimeLine(fbdailyShares),
      dataNumber: useCount(fbdailyShares),
      dataNumberPast: useCount(fbdailySharesPast),
      type: "line",
      id: "FbP",
      name: "Compartidos",
      group: "clicksPagina",
      color: "#f06292",
    },
    {
      data: useTimeLine(fbdailyClicks),
      dataNumber: useCount(fbdailyClicks),
      dataNumberPast: useCount(fbdailyClicksPast),
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
            <a className="SectionsAncles" href={"#" + item.name}>
              {item.name}
            </a>
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
        <div className="charsex col-lg-6 col-12">
          <h5 className="Subtitle">Sexo</h5>
          <ChartPie data={fbsexo} />
        </div>
        <div className="Subtitle chartGender col-lg-6 col-12">
          <h5>Edad</h5>

          <ChartEdad data={fbage} horizontal={false} colors={["#fff176"]} gridShow={true} yaxisShow={true} height={350} labels={true}/>
        </div>
        <div className="chartCountries col-lg-6 col-12">
          <h5 className="Subtitle">Paises de los Seguidores</h5>
          <ChartCountries data={fbCountry} />
        </div>
        <div className="CitiesList col-lg-6 col-12">
          <h5 className="Subtitle">Ciudades de los Seguidores</h5>
          <div className="ListCities">
          <CitiesList data={fbCity}/>
          </div>
         
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
