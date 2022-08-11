import React, { useContext } from "react";
import { Dashboard } from '../components/Dashboard'
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
  
  const fbLikes = useData(
    `/stats/timeline/facebookLikes`,
   start,
    end)
    ;
    
    const TimeLine = fbLikes.map(([key, value]) => {
      return +key;
    });


    const FbDatosCrecimiento = [
      {
        data: useTimeLine(fbLikes),
        dataNumber:
          fbLikes.length !== 0 ? parseInt(fbLikes[fbLikes.length - 1][1], 0) : "",
        type: "line",
        id: "FbMG",
        name: "Me gusta",
        group: "crecimiento",
        color: "#42a5f5",
        icono: "fa-solid fa-thumbs-up",
      }
    ];

    const FbAllData = [
      {
        id: "Crecimiento",
        data: FbDatosCrecimiento,
        name: "Crecimiento",
        colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
      }
    ];

  return (
<div className="mainDashboard">
<div className="MainScheshule">
    <div className="Scheshule">
      <div className="ScheshuleMonth">
        <span>Datos del 10 de Aug del 2022</span></div>
    </div>   
    </div>
    <div className="resumen">
        {FbAllData.map((item) => {
          return (
            <Dashboard
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
  )
}

export default Inicio