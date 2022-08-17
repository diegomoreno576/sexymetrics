import React, { useContext, useEffect } from "react";
import useData from "../hooks/useData";
import { ThemeContext } from "../context";
import SeccionesGraficas from "../components/charts/SeccionesGraficas";
import PublicationList from "../components/Lists/PublicationList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTimeLine from "../hooks/useTimeLine";
import { settings } from "../slicks/slickConfig";
import useCount from "../hooks/useCount";




const GoogleAds = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
  //Fecha pasada a la selecionada
  const startPast =  state.TimeStartPast
  const endPast =   state.TimeEndPast
 

 
  //GAdsBody
  const GAdsbodyprincipal = useData(
    `/stats/adwords/campaigns`,
   start, 
   end
   );
   const GAdsbody = GAdsbodyprincipal?.[0]

  //GAdsBodyPast
  const GAdsbodyPastprincipal = useData(
     `/stats/adwords/campaigns`,
   startPast, 
   endPast);
   const GAdsbodyPast = GAdsbodyPastprincipal?.[0]

  // Alcance

  const GAdsimpresiones = useData(
    `/stats/timeline/adwords_Impressions`,
   start,
    end);
  const GAdsimpresionesPast = useData(
    `/stats/timeline/adwords_Impressions`,
   startPast, 
   endPast
   );

  const GAdsgasto = useData(
    `/stats/timeline/adwords_Cost`,
   start, 
   end
   );
   const GAdsgastoPast = useData(
    `/stats/timeline/adwords_Cost`,
   startPast, 
   endPast
   );




 
  //Resultados
  const GAdsctaClicks = useData(
    `/stats/timeline/adwords_Clicks`, 
  start, 
  end
  );

  const GAdsConversiones = useData(
    `/stats/timeline/adwords_Conversions`,
   start,
    end
    );
 



  //Rendimiento
  const GAdsCpm = useData(
    `/stats/timeline/adwords_AverageCpm`,
    start,
    end
  );


  const GAdsCpc = useData(
    `/stats/timeline/adwords_AverageCpc`,
    start,
    end
  );


  const GAdsCtr = useData(
    `/stats/timeline/adwords_Ctr`,
    start,
    end
  );


  //Lista de publicaciones
  const GAdsListPublications = useData(`/stats/adwords/campaigns`, start, end);
  //TimeLine

  const TimeLine = GAdsgasto.map(([key, value]) => {
    return +key;
  });


  const AlcancePag = [
    {
      data: useTimeLine(GAdsimpresiones),
      dataNumber: useCount(GAdsimpresiones),
      dataNumberPast: useCount(GAdsimpresionesPast),
      type: "line",
      id: "GAdsIP",
      name: "Impresiones",
      group: "crecimiento",
      color: "#42a5f5",
    },
    {
      data: useTimeLine(GAdsgasto),
      dataNumber: useCount(GAdsgasto),
      dataNumberPast: useCount(GAdsgastoPast),
      type: "bar",
      id: "GAdsgasto",
      name: "Gasto",
      group: "crecimiento",
      color: "#fff176",
    },
  ];

  const GAdsResultados = [
    {
      data: useTimeLine(GAdsctaClicks),
      dataNumber: GAdsbody?.clicks,
      dataNumberPast: GAdsbodyPast?.clicks,
      type: "line",
      id: "GAdsDClicks",
      name: "Clicks",
      group: "clicksPagina",
      color: "#42a5f5",
    },
    {
      data: useTimeLine(GAdsConversiones),
      dataNumber: GAdsbody?.conversions,
      dataNumberPast: GAdsbodyPast?.conversions,
      type: "area",
      id: "GAdsConversiones",
      name: "Conversiones",
      group: "clicksPagina",
      color: "#4dd0e1",
    },
    {
        data: useTimeLine(GAdsgasto),
        dataNumber: useCount(GAdsgasto),
        dataNumberPast: useCount(GAdsgastoPast),
        type: "bar",
        id: "GAdsgasto",
        name: "Gasto",
        group: "crecimiento",
        color: "#fff176",
      },
  ];

  const GAdsRendimiento = [
    {
      data: useTimeLine(GAdsCpc),
      dataNumber: parseFloat(GAdsbody?.spent / GAdsbody?.clicks).toFixed(2),
      dataNumberPast: parseFloat(GAdsbodyPast?.spent / GAdsbodyPast?.clicks).toFixed(2),
      type: "line",
      id: "GAdsCPC",
      name: "CPC",
      group: "Rendimiento",
      color: "#42a5f5",
    },
    {
      data: useTimeLine(GAdsCpm),
      dataNumber: parseFloat(GAdsbody?.spent / GAdsbody?.impressions * 1000).toFixed(2),
      dataNumberPast: parseFloat(GAdsbodyPast?.spent / GAdsbodyPast?.impressions * 1000).toFixed(2),
      type: "area",
      id: "GadsCPM",
      name: "CPM",
      group: "Rendimiento",
      color: "#4dd0e1",
    },
    {
      data: useTimeLine(GAdsCtr),
      dataNumber: parseFloat(GAdsbody?.clicks / GAdsbody?.impressions * 100).toFixed(2),
      dataNumberPast: parseFloat(GAdsbodyPast?.clicks / GAdsbodyPast?.impressions * 100).toFixed(2),
      type: "line",
      id: "GAdsCTR",
      name: "CTR",
      group: "Rendimiento",
      color: "#f06292",
    },
    {
        data: useTimeLine(GAdsgasto),
        dataNumber: useCount(GAdsgasto),
        dataNumberPast: useCount(GAdsgastoPast),
        type: "bar",
        id: "GAdsgasto",
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

      <Slider {...settings}>
        {GAdsListPublications.map((item) => {
          const fecha = new Date(item.start).toDateString();

          return (
            <PublicationList
              picture={item.picture}
              link={item.link}
              fecha={fecha}
              type={item.type}
              clicks={item.clicks}
              text={item.name}
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

export default GoogleAds;
