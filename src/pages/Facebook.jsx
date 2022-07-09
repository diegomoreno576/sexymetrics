import React, { useContext, useEffect } from "react";
import useData from "../hooks/useData";
import { ThemeContext } from "../context";
import { setFbDatos } from "../actions";
import SeccionesGraficas from "../components/SeccionesGraficas";
import PublicationList from '../components/PublicationList';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
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
  const AllPost = [];
  fbPost.map((item) => {
    AllPost.push(+item[1]);
  });
  const totalPost = AllPost.reduce((acc, curr) => acc + curr, 0);

  //Alcance

  const fbImpresiones = useData(`/stats/timeline/pageImpressions`, start, end);

  //Datos
  //Impresiones
  const AllfbImpresiones = [];
  fbImpresiones.map((item) => {
    AllfbImpresiones.push(+item[1]);
  });
  const totalfbImpresiones = AllfbImpresiones.reduce(
    (acc, curr) => acc + curr,
    0
  );

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
  const AllfbctaClicks = [];
  fbctaClicks.map((item) => {
    AllfbctaClicks.push(+item[1]);
  });
  const totalfbctaClicks = AllfbctaClicks.reduce((acc, curr) => acc + curr, 0);

  //direcctionClicks
  const AlldirecctionClicks = [];
  fbgetDirectionsClicks.map((item) => {
    AlldirecctionClicks.push(+item[1]);
  });
  const totaldirecctionClicks = AlldirecctionClicks.reduce(
    (acc, curr) => acc + curr,
    0
  );
    //telefono
    const AllfbcallPhoneClicks = [];
    fbcallPhoneClicks.map((item) => {
      AllfbcallPhoneClicks.push(+item[1]);
    });
    const totalfbcallPhoneClicks = AllfbcallPhoneClicks.reduce(
      (acc, curr) => acc + curr,
      0
    );
        //vistas de la pàgina
        const AllfbpageViews = [];
        fbpageViews.map((item) => {
          AllfbpageViews.push(+item[1]);
        });
        const totalfbpageViews = AllfbpageViews.reduce(
          (acc, curr) => acc + curr,
          0
        );

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

  const TimeLine = fbLikes.map((d) => {
    return +d[0];
  });


  //Lista de publicaciones
  const fbListPublications = useData(`/stats/facebook/posts`, start, end);

  


  const FbDatosCrecimiento = [
    {
      data: fbLikes.map((d) => {
        return d[1];
      }),
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
      data: fbFollows.map((d) => {
        return parseInt(d[1]);
      }),
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
      data: fbPost.map((d) => {
        return d[1];
      }),
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
      data: fbPost.map((d) => {
        return +d[1];
      }),
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
      data: fbDailyEngagement.map((d) => {
        return parseInt(d[1]);
      }),
      dataNumber: "10",
      type: "line",
      id: "FbDailyEngagement",
      name: "Engagement",
      group: "clicksPagina",
      color: "#42a5f5",
    },
    {
      data: fbDailyInteractions.map((d) => {
        return parseInt(d[1]);
      }),
      dataNumber: "10",
      type: "area",
      id: "FbDailyInteraction",
      name: "Interacciones",
      group: "clicksPagina",
      color: "#4dd0e1",
    },
    {
      data: fbdailyImpressionsUnique.map((d) => {
        return parseInt(d[1]);
      }),
      dataNumber: "10",
      type: "line",
      id: "FbDayliImpresionsUnique",
      name: "Alcance",
      group: "clicksPagina",
      color: "#f06292",
    },
    {
      data: fbdailyImpressions.map((d) => {
        return parseInt(d[1]);
      }),
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
      data: fbdailyReactions.map((d) => {
        return +d[1];
      }),
      dataNumber: "10",
      type: "line",
      id: "FbMG",
      name: "Reacciones",
      group: "clicksPagina",
      color: "#42a5f5",
    },
    {
      data: fbComments.map((d) => {
        return +d[1];
      }),
      dataNumber: "10",
      type: "area",
      id: "FbG",
      name: "Comentarios",
      group: "clicksPagina",
      color: "#4dd0e1",
    },
    {
      data: fbdailyShares.map((d) => {
        return +d[1];
      }),
      dataNumber: "10",
      type: "line",
      id: "FbP",
      name: "Compartidos",
      group: "clicksPagina",
      color: "#f06292",
    },
    {
      data: fbdailyClicks.map((d) => {
        return +d[1];
      }),
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
      timeLine: fbLikes.map((d) => {
        return +d[1];
      }),
    },
    {
      id: "Alcance de pagina",
      data: AlcancePag,
      name: "Alcance de Páginna",
      colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
      timeLine: fbImpresiones.map((d) => {
        return +d[1];
      }),
    },
    {
      id: "Clicks en pagina",
      data: FbClickPagina,
      name: "Clicks en la página",
      timeLine: fbctaClicks.map((d) => {
        return +d[1];
      }),
    },
    {
      id: "Publicaciones",
      data: FbPublicaciones,
      name: "Publicaciones",
      timeLine: fbLikes.map((d) => {
        return +d[1];
      }),
    },
    {
      id: "interacciones",
      data: Fbinteracciones,
      name: "Interacciones",
      timeLine: fbLikes.map((d) => {
        return +d[1];
      }),
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
      puntos={item.engagement}
      reproducciones={item.videoViews}
      />
      
         );
    })}
     </Slider>  
    </div>
  );
};

export default Facebook;
