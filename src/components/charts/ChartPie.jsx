import React from 'react'
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import '../../assets/styles/components/ChartPie.css';

const ChartPie = (props) => {

  let sexData = [];
  let sexValue = [];

  for (const [key, value] of Object.entries(props.data)) {
    sexData.push(value);
    sexValue.push(key);
  }
                                                                                                                                          
  return (
    <Chart
    series={sexData }
    options={{
        toolbar: {
			show: false,
		  },

      colors: ['#42a5f5', '#4dd0e1', '#f06292', '#ba68c8', '#ffb74d', '#fff176'],
      labels: sexValue,
      dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom'
            }
        },
        
        
    }]
    }}
    type={"donut"}
  />
  )
}

export default ChartPie