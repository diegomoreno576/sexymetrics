import React,{ useState } from 'react'
import Chart from "react-apexcharts";

const ChartEdad = (props) => {
// const [ageData, setageData] = useState([])
// const [ageValue, setageValue] = useState([])
let ageData = [];
let ageValue = [];

  for (const [key, value] of Object.entries(props.data)) {
    ageData.push(value);
    ageValue.push(key);
  }


    return (
        <Chart
        options={{
          chart: {
            stacked: false,
               toolbar: {
                          show: false
                      },
               
              },
            plotOptions: {
                bar: {
                   distributed: true,
                    horizontal: props.horizontal,
                    barHeight: "100%",
                    borderRadius: 3,
                    columnWidth: '95%',
                },
            },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 5,
            colors: ['transparent']
        },
        tooltip: {
            theme: "dark",
          },
        grid: {
          show: props.gridShow,
            borderColor: '#e7e7e7',
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
          xaxis: {
            labels: {
              show: false
            },
            categories: ageValue,
        },
        yaxis: {
            show: props.yaxisShow,
            showAlways: true,
            axisBorder: {
                show: true,
                color: 'transparent',
                offsetX: 0,
                offsetY: 0
            },
            
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: 'transparent',
                width: 6,
                offsetX: 0,
                offsetY: 0
            },
            labels: {
                style: {
                  colors: 'white',
                },
             }
        },
        legend: {
          show: false,
            horizontalAlign: 'left',
            offsetX: 0
          },
        colors: props.colors,
        fill: {
           opacity: 1,
         },
        }}
        series={[
          {
            name: 'Total',
            data: ageData,
          },
        ]}
        height={props.height}
        type={'bar'}
      />
      )
}

export default ChartEdad