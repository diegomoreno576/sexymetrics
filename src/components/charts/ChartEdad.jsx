import React,{ useState } from 'react'
import Chart from "react-apexcharts";

const ChartEdad = (props) => {
  console.log(props.barBackground)
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
                    barHeight: "90%",
                    borderRadius: 3,
                    columnWidth: '95%',
                    colors: {
                      backgroundBarColors: props.barBackground,
                      },
                },
            },
            colors: props.colors,
            fill: {
               opacity: 1,
             },
          dataLabels: {
            enabled: false,
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
              show: props.labels,
              style: {
                colors: 'white',
              },
            },
            axisBorder: {
              show: false
           },
           axisTicks: {
            show: false,
            borderType: 'solid',
            color: 'transparent',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
            categories: ageValue,
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
       
        yaxis: {
            show: props.yaxisShow,
            showAlways: true,
            axisBorder: {
                show: true,
                color: 'transparent',
                offsetX: 0,
                offsetY: 0
            },
            
            
        },
        legend: {
          show: false,
            horizontalAlign: 'left',
            offsetX: 0
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