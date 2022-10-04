import React, { useState, useContext, useEffect } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import "../../assets/styles/components/BotonGrafica.css";
import { HiTrendingDown, HiTrendingUp, HiUserRemove } from "react-icons/hi";
import { MdTrendingFlat } from "react-icons/md";
import { ThemeContext } from "../../context";
import Spinner from 'react-bootstrap/Spinner';


function BotonGrafica(props) {
  const [state, dispatch] = useContext(ThemeContext);
  const [isToggled, setToggled] = useState(false);

  const handleToogleClick = () => {
    ApexCharts.exec(props.idMixed, "toggleSeries", props.name);
    setToggled(!isToggled);
  };
  const styles = {
    ChartBtn: {
      backgroundColor: props.color,
      opacity: !isToggled ? "1" : "0.5",
    },
  };

  useEffect(() => {
    setToggled(false);
  }, [state.TimeStart, state.TimeEnd]);
  

  if(props.datos.length == 0 || state.Loading == true){
    return (
      <div
      style={styles.ChartBtn}
      className="ChartsButtons loadingButton"
    >
          <Spinner animation="border" role="status" className="buttonsSpinners">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      </div>
    )
  }else{
  return (
    <div
      style={styles.ChartBtn}
      onClick={handleToogleClick}
      className="ChartsButtons"
    >
      <div>
        <div className="mainGraficName">
          <div className="BtnNumberICon">
            <div className="BtnIcon">
              {<i id="BtnIcon" className={props.icono}></i>}{" "}
            </div>
            <div className="BtnNumber">
              <span>{props.dataNumber} </span>
            </div>
          </div>
          <div className="btnNumberPast">
            <div className="btnIconPast">
              {props.dataNumber < props.dataNumberPast ? (
                <HiTrendingDown />
              ) : (
                ""
              )}
              {props.dataNumber > props.dataNumberPast ? <HiTrendingUp /> : ""}
              {props.dataNumber == props.dataNumberPast ? (
                <MdTrendingFlat />
              ) : (
                ""
              )}
            </div>
            <div>{props.dataNumberPast}</div>
          </div>
 
        </div>
        <div className="MainGraficBtnName">
            <span className="graficBtnName">{props.name}</span>
          </div>
      </div>
      <Chart
        options={{
          chart: {
            id: props.id,
            stacked: false,
            toolbar: {
              show: false,
              offsetX: 0,
              offsetY: 0,
              tools: {
                download: false,
                reset: false | '<img src="/static/icons/reset.png" width="20">',
                customIcons: [],
              },
              autoSelected: "zoom",
            },
            sparkline: {
              enabled: true,
            },
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 2,
              opacity: 0.2,
            },
          },
          dataLabels: {
            enabled: false,
          },
          labels: props.Timeline,
          xaxis: {
            type: 'datetime',
        },
          tooltip: {
            theme: "dark",
          },
          stroke: {
            width: 5,
            curve: "smooth",
            lineCap: "round",
          },
          markers: {
            size: 0,
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            padding: {
              top: 20,
              bottom: 10,
              left: 0,
            },
          },
          colors: ["white"],
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              gradientToColors: ["white"],
              shadeIntensity: 1,
              type: "horizontal",
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
        }}
        series={[
          {
            name: props.name,
            data: props.datos,
          },
        ]}
        height={props.height ? props.height : 90}
        type={props.type}
      />
    </div>
  );
}
}
export default BotonGrafica;
