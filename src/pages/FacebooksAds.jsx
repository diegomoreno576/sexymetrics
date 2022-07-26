import React, { useContext, useEffect } from "react";
import useData from "../hooks/useData";
import { ThemeContext } from "../context";
import { setFbDatos } from "../actions";
import SeccionesGraficas from "../components/SeccionesGraficas";
import PublicationList from "../components/PublicationList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChartPie from "../components/ChartPie";
import ChartCountries from "../components/ChartCountries";
import useTimeLine from "../hooks/useTimeLine";
import { settings } from "../slicks/slickConfig";
import useCount from "../hooks/useCount";

const FacebooksAds = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
//Body
const fadsBody = useData("/stats/aggregations/FacebookAds", start, end);

//ALCANCE
const reach = useData("/stats/timeline/reach", start, end)
const spend = useData("/stats/timeline/spend", start, end)

//Cliks
const fbAdsClicks = useData("/stats/timeline/clicks", start, end)
const offsite_conversion = useData("/stats/timeline/offsite_conversion", start, end)

//RENDIMIENTO
const cpm = useData("/stats/timeline/cpm", start, end)
const cpc = useData("/stats/timeline/cpc", start, end)
const ctr = useData("/stats/timeline/ctr", start, end)




  return (
    <div>FacebooksAds</div>
  )
}

export default FacebooksAds