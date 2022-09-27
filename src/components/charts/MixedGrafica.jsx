import React from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import "../../assets/styles/components/MixedGrafica.css";

function MixedGrafica(props) {

  return (
    <div className="ChartsMixed">
      
      <Chart
        series={props.MixedData}
        options={{
          chart: {
            id: props.id,
            stacked: false,
          },
          stroke: {
            width: [1, 1, 4],
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
          stroke: {
            width: 5,
            curve: "smooth",
            lineCap: "round",
          },
          markers: {
            size: 0,
          },
          grid: {
            borderColor: "#333333",
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          colors: props.colors,
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              gradientToColors: ["#42a5f5"],
              shadeIntensity: 1,
              type: "horizontal",
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          yaxis: [
            {
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
                color: "white",
              },
              lines: {
                show: false,
              },
              labels: {
                style: {
                  colors: "white",
                },
                minWidth: 40,
              },
              title: {
                text: "Me gusta",
                style: {
                  color: "white",
                },
              },
              tooltip: {
                enabled: true,
              },
            },
            {
              seriesName: "Revenue",
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: "#FEB019",
              },
              labels: {
                style: {
                  colors: "#FEB019",
                },
              },
              title: {
                text: "Revenue (thousand crores)",
                style: {
                  color: "#FEB019",
                },
              },
            },
          ],
          tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: true,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            theme: "dark",
            fillSeriesColor: false,
            style: {
              fontSize: "12px",
              fontFamily: undefined,
            },

            x: {
              show: true,
              format: "dd MMM",
              formatter: undefined,
            },
            y: {
              formatter: undefined,
              title: {
                formatter: (seriesName) => seriesName,
              },
            },
            z: {
              formatter: undefined,
              title: "Size: ",
            },
          },
          legend: {
            show: false,
            horizontalAlign: "left",
            offsetX: 40,
          },
        }}
        type={props.type}
        height={350}
      />
    </div>
  );
}

export default MixedGrafica;
