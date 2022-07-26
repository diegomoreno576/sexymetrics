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
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
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
            borderColor: '#e7e7e7',
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
          xaxis: {
            categories: ageValue,
        },
        yaxis: {
            show: true,
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
        
      
          colors: ['#fff176'],
          fill: {
            type: 'gradient',
            gradient: {
             shade: 'dark',
             gradientToColors: [ '#fff176'],
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
            name: 'Total',
            data: ageData,
          },
        ]}
        type={'bar'}
      />
      )
}

export default ChartEdad