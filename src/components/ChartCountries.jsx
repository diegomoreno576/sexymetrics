import React from "react";
import { VectorMap } from "react-jvectormap";



const handleClick = (countryCode) => {
  console.log(countryCode.currentTarget);
};

const ChartCountries = (props) => {
  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={true}
        containerStyle={{
          width: "100%",
          height: "600px"
        }}
        onRegionClick={handleClick} //gets the country code
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
          selected: {
            fill: "#2938bc" //color for the clicked country
          },
          selectedHover: {}
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: props.data, //this is your data
              scale: ["#146804", "#ff0000"], //your color game's here
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    </div>
  );
};

export default ChartCountries;
