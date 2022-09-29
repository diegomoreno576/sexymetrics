import React, { useContext } from "react";
import { Dashboard } from '../components/dashboard/Dashboard'
import { ThemeContext } from "../context";
import Slider from "react-slick";
import { settings } from "../slicks/slickConfig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTimeLine from "../hooks/useTimeLine";
import useCount from "../hooks/useCount";
import useData from "../hooks/useData";

const Inicio = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;

   //FbBody
   const fbbody = useData(
    `/stats/aggregations/Facebook`,
   start, 
   end
   );
  
  const fbLikes = useData(
    `/stats/timeline/facebookLikes`,
   start,
    end);
    const fbPost = useData(
      `/stats/timeline/fbPosts`,
     start, 
     end
     );

     //IG Body
const igBody = useData("/stats/aggregations/Instagram", start, end);
    const igFollows = useData("/stats/timeline/igFollowers", start, end);
    
    const TimeLine = fbLikes.map(([key, value]) => {
      return +key;
    });


    const FbMegusta = {
        data: useTimeLine(fbLikes),
        dataNumber:
          fbLikes.length !== 0 ? parseInt(fbLikes[fbLikes.length - 1][1], 0) : "",
        type: "area",
        id: "FbMG",
        name: "Me gusta",
        group: "crecimiento",
        color: "#3b5998",
        icono: "fa-brands fa-facebook-f",
      };

    const FbDatos = [
      {
      dataNumber: useCount(fbPost),
      id: "FbPosts",
      name: "Posts",
      color: "#fff176",
      },
      {
        dataNumber: fbbody.Follows,
        id: "FbPosts",
        name: "Crecimiento",
        color: "#ba68c8",
        },
        {
          dataNumber: fbbody.pageImpressions,
          id: "FbPosts",
          name: "Impresiones  ",
          color: "#43a5f5",
          }
    ];
    const Fbage = {
        dataNumber: "35-44",
        id: "Fbage",
    } 

    //Sexo
  const fbsexo = useData(`/stats/gender/facebook`, start, end);


    const Fbcountry = {
      name: "España",
      id: "Fbcountry",
  } 
    const Fbcity = {
      name: "Santa cruz de ...",
      id: "Fbcity",
  }

  const IgMegusta = {
    data: useTimeLine(igFollows),
    dataNumber:
    igFollows.length != 0 ? parseInt(igFollows[igFollows.length - 1][1], 0) : "",
    type: "area",
    id: "IgSeguidores",
    name: "Seguidores",
    group: "crecimiento",
    color: "#ec4961",
    icono: "fa-brands fa-instagram",
  };

const IgDatos = [
  {
  dataNumber: "1",
  id: "IgPosts",
  name: "Posts",
  color: "#fff176",
  },
  {
    dataNumber: "1",
    id: "IgPosts",
    name: "Crecimiento",
    color: "#ba68c8",
    },
    {
      dataNumber: igBody.impressions,
      id: "IgPosts",
      name: "Impresiones  ",
      color: "#43a5f5",
      }
];
const Igage = {
    dataNumber: "35-44",
    id: "Igage",
} 
const Igcountry = {
  name: "España",
  id: "Igcountry",
} 
const Igcity = {
  name: "Santa cruz de ...",
  id: "Igcity",
}
  
  


    const RsAllData = [
      {
        id: "ResumenFacebook",
        dataGrafica: FbMegusta,
        data: FbDatos,
        name: "Facebook",
        age: Fbage,
        country: Fbcountry,
        city: Fbcity
      },
      {
        id: "ResumenInstagram",
        dataGrafica: IgMegusta,
        data: IgDatos,
        name: "Instagram",
        age: Igage,
        country: Igcountry,
        city: Igcity
      },
    ];

  return (
<div className="container mainDashboard">
<div className="MainScheshule">
    <div className="Scheshule">
      <div className="ScheshuleMonth">
        <span>Datos del 10 de Aug del 2022</span></div>
    </div>   
    </div>
    <div className="resumen">
        {RsAllData.map((item) => {
          return (
            <Dashboard
              id={item.id}
              dataGrafica={item.dataGrafica}
              timeLine={TimeLine}
              name={item.name}
              colors={item.colors}
              data={item.data}
              age={item.age}
              sex={fbsexo}
              country={item.country}
              city={item.city}
            />
          );
        })}
      </div>
</div>
  )
}

export default Inicio