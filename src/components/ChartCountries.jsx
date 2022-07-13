import React from "react";
import { Chart } from "react-google-charts";


export const options = {
  colorAxis: { colors: ['#42a5f5', '#4dd0e1', '#f06292',] },
  backgroundColor: "transparent",
  datalessRegionColor: "#3333339c",
  defaultColor: "#333333",
};

const ChartCountries = (props) => {
  const charConfig = [["Country", "Seguidores"]];
  const datos =  props.data;
  const data = charConfig.concat(datos);

  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default ChartCountries
