import React from "react";
import Chart from 'react-apexcharts'
import '../assets/styles/components/BotonGrafica.css'

function BotonGrafica(props) {

  return (
    <div   className="ChartsButtons">
      <div className="mainGraficName">
       <span className="graficBtnName">
         {props.name}
       </span>
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
							  download: true,
							  reset: true | '<img src="/static/icons/reset.png" width="20">',
							  customIcons: []
							},
							autoSelected: 'zoom' 
						  },
              height: 40,
              sparkline: {
                  enabled: true
              },
              dropShadow: {
                  enabled: false,
                  top: 1,
                  left: 1,
                  blur: 2,
                  opacity: 0.2,
              } ,
              
          },
          dataLabels: {
            enabled: false,
          },
          labels: props.Timeline,
          xaxis: {
            type: "datetime",
            labels: {
              datetimeFormatter: {
                day: "dd",
              },
            },
          },
          grid: {
            borderColor: "#535A6C",
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        tooltip: {
        theme: 'dark'
        },
          stroke: {
            width: 5,
             curve: 'smooth',
            lineCap: 'round',
                  },
                  markers: {
                      size: 0
                  },
                   grid: {
                  borderColor: '#e7e7e7',
                  yaxis: {
                      lines: {
                          show: false
                      }
                  },
              padding: {
                          top: 20,
                          bottom: 10,
                          left: 0
                      }
              },
          colors: [props.background],
          fill: {
                     type: 'gradient',
                     gradient: {
                      shade: 'dark',
                      gradientToColors: [props.background],
                      shadeIntensity: 1,
                      type: 'horizontal',
                      opacityFrom: 1,
                      opacityTo: 1,
                        stops: [0, 100]
                    },
            },
                 
         
        }}
        series={[
          {
            name: props.name,
            data: props.datos
          },
        ]}
        
        type={props.type}
      />
    </div>
  );
}

export default BotonGrafica;
