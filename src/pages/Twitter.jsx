import React, { useContext, useEffect } from "react";
import useData from "../hooks/useData";
import { ThemeContext } from "../context";
import SeccionesGraficas from "../components/charts/SeccionesGraficas";
import useTimeLine from "../hooks/useTimeLine";
import useCount from "../hooks/useCount";

const Twitter = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
    //Fecha pasada a la selecionada
    const startPast =  state.TimeStartPast
    const endPast =   state.TimeEndPast
//Body
const TwBody = useData("/stats/aggregations/Twitter", start, end);
const TwBodyPast = useData("/stats/aggregations/Twitter", startPast, endPast);
//Twits
const TwTweets = useData("/stats/timeline/twTweets", start, end);
const TwTweetsPast = useData("/stats/timeline/twTweets", startPast, endPast);

//Crecimiento
const Twfollowers = useData("/stats/timeline/twitterFollowers", start, end);
const TwfollowersPast = useData("/stats/timeline/twitterFollowers", startPast, endPast);
const Twfollows = useData("/stats/timeline/follows", start, end);
const Twunfollows = useData("/stats/timeline/unfollows", start, end);

//PUBLICACIONES - INTERACCIONES
const likes = useData("/stats/timeline/twFavorites", start, end);
const likesPast = useData("/stats/timeline/twFavorites", startPast, endPast);

const retweets = useData("/stats/timeline/twRetweets", start, end);
const retweetsPast = useData("/stats/timeline/twRetweets", startPast, endPast);

const mentions = useData("/stats/timeline/twMentions", start, end);
const mentionsPast = useData("/stats/timeline/twMentions", startPast, endPast);

const TimeLine = Twfollowers.map(([key, value]) => {
  return +key;
});

const TwCrecimiento = [
  {
    data: useTimeLine(Twfollowers),
    dataNumber:
      Twfollowers.length != 0 ? parseInt(Twfollowers[Twfollowers.length - 1][1], 0) : "",
    dataNumberPast: TwfollowersPast.length != 0 ? parseInt(TwfollowersPast[TwfollowersPast.length - 1][1], 0) : "",
    type: "line",
    id: "twSeguidores",
    name: "Seguidores",
    group: "crecimiento",
    color: "#42a5f5",
    icono: "fa-solid fa-thumbs-up",
  },
  {
    data: useTimeLine(Twfollows),
    dataNumber: TwBody.Follows,
    dataNumberPast: TwBodyPast.Follows,
    type: "area",
    id: "TwGanados",
    name: "Ganados",
    group: "crecimiento",
    color: "#4dd0e1",
    icono: "fa-solid fa-arrow-up",
  },
  {
    data: useTimeLine(Twunfollows),
    dataNumber: TwBody.Unfollows,
    dataNumberPast: TwBodyPast.Unfollows,
    type: "line",
    id: "TwPerdidos",
    name: "Perdidos",
    group: "crecimiento",
    color: "#f06292",
    icono: "fa-solid fa-arrow-down",
  },
  {
    data: useTimeLine(TwTweets),
    dataNumber: useCount(TwTweets),
    dataNumberPast: useCount(TwTweetsPast),
    type: "bar",
    id: "TwTweet",
    name: "Tweets",
    group: "crecimiento",
    color: "#fff176",
    icono: "fa-solid fa-memo",
  },
];

const TwPublicacionesInteraciones = [
  {
    data: useTimeLine(likes),
    dataNumber:useCount(likes),
    dataNumberPast: useCount(likesPast),
    type: "line",
    id: "twLikes",
    name: "Likes",
    group: "crecimiento",
    color: "#42a5f5",
    icono: "fa-solid fa-thumbs-up",
  },
  {
    data: useTimeLine(retweets),
    dataNumber: useCount(retweets),
    dataNumberPast: useCount(retweetsPast),
    type: "area",
    id: "TwRetweets",
    name: "Retweets",
    group: "crecimiento",
    color: "#4dd0e1",
    icono: "fa-solid fa-arrow-up",
  },
  {
    data: useTimeLine(mentions),
    dataNumber: useCount(mentions),
    dataNumberPast: useCount(mentionsPast),
    type: "line",
    id: "TwMenciones",
    name: "Menciones",
    group: "crecimiento",
    color: "#f06292",
    icono: "fa-solid fa-arrow-down",
  },
  {
    data: useTimeLine(TwTweets),
    dataNumber: useCount(TwTweets),
    dataNumberPast: useCount(TwTweetsPast),
    type: "bar",
    id: "TwTweet",
    name: "Tweets",
    group: "crecimiento",
    color: "#fff176",
    icono: "fa-solid fa-memo",
  },
];

const TwAllData = [
  {
    id: "Crecimiento",
    data: TwCrecimiento,
    name: "Crecimiento",
    colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
  },
  {
    id: "interacciones-publicaciones",
    data: TwPublicacionesInteraciones,
    name: "Interacciones-Publicaciones",
    colors: ["#42a5f5", "#4dd0e1", "#f06292", "#fff176"],
  },
];

return (
  <div className="container">
    <div className="Ancl">
      {TwAllData.map((item) => {
        return (
          <a className="SectionsAncles" href={"#" + item.name}>
            {item.name}
          </a>
        );
      })}
    </div>
    <h3 className="PageTitle">VISIÓN GENERAL DE LA PÁGINA DE TWITTER</h3>
    <div className="row">
      {TwAllData.map((item) => {
        return (
          <SeccionesGraficas
            id={item.id}
            data={item.data}
            timeLine={TimeLine}
            name={item.name}
            colors={item.colors}
          />
        );
      })}
    </div>


  </div>
);
}

export default Twitter