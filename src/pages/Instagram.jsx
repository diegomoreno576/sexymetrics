import React, { useContext, useEffect } from "react";
import useData from "../hooks/useData";
import { ThemeContext } from "../context";
import SeccionesGraficas from "../components/charts/SeccionesGraficas";
import PublicationList from "../components/Lists/PublicationList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChartPie from "../components/charts/ChartPie";
import ChartCountries from "../components/charts/ChartCountries";
import useTimeLine from "../hooks/useTimeLine";
import { settings } from "../slicks/slickConfig";
import useCount from "../hooks/useCount";
import ChartEdad from "../components/charts/ChartEdad";
import CitiesList from "../components/Lists/CitiesList";

const Instagram = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
  //Fecha pasada a la selecionada
  const startPast =  state.TimeStartPast
  const endPast =   state.TimeEndPast

//Body
const igBody = useData("/stats/aggregations/Instagram", start, end);
const igBodyPast = useData("/stats/aggregations/Instagram", startPast, endPast);

 //Crecimiento
     const igFollows = useData("/stats/timeline/igFollowers", start, end);
     const igFollowsPast = useData("/stats/timeline/igFollowers", startPast, endPast);

     const igUnFollows = useData("/stats/timeline/igFollowing", start, end);

     const igPost = useData("/stats/timeline/igPosts", start, end);
     const igPostPast = useData("/stats/timeline/igPosts", startPast, endPast);


//Alcance de Pagina
const igimpresiones = useData("/stats/timeline/igimpressions", start, end);
const igAlcance = useData("/stats/timeline/igreach", start, end);
const visitasPerfil = useData("/stats/timeline/igprofile_views", start, end);

//Publicaciones
const igEngagement = useData("/stats/timeline/igEngagement", start, end);
const igEngagementPast = useData("/stats/timeline/igEngagement", startPast, endPast);

const igInteractions = useData("/stats/timeline/igInteractions", start, end);
const igInteractionsPast = useData("/stats/timeline/igInteractions", startPast, endPast);

const igPostsReach = useData("/stats/timeline/igPostsReach", start, end);
const igPostsReachPast = useData("/stats/timeline/igPostsReach", startPast, endPast);

const igPostsImpressions = useData("/stats/timeline/igPostsImpressions", start, end);
const igPostsImpressionsPast = useData("/stats/timeline/igPostsImpressions", startPast, endPast);

//INTERACCIONES
const igLikes = useData("/stats/timeline/igLikes", start, end);
const igLikesPast = useData("/stats/timeline/igLikes", startPast, endPast);

const igComments = useData("/stats/timeline/igComments", start, end);
const igCommentsPast = useData("/stats/timeline/igComments", startPast, endPast);

const igSaved  = useData("/stats/timeline/igSaved", start, end);
const igSavedPast  = useData("/stats/timeline/igSaved", startPast, endPast);

//HISTORIAS
const igStoriesImpressions  = useData("/stats/timeline/igStoriesImpressions", start, end);
const igStoriesImpressionsPast  = useData("/stats/timeline/igStoriesImpressions", startPast, endPast);

const igStoriesReach  = useData("/stats/timeline/igStoriesReach", start, end);
const igStoriesReachPast  = useData("/stats/timeline/igStoriesReach", startPast, endPast);

const igStoriesCount  = useData("/stats/timeline/igStoriesCount", start, end);
const igStoriesCountPast  = useData("/stats/timeline/igStoriesCount", startPast, endPast);

 //Seguidores sexo y edad
 const igsexo  = useData("/stats/gender/instagram", start, end);
 const igAge  = useData("/stats/age/instagram", start, end);



   const igCountryies  = useData("/stats/country/instagram", start, end);
   const igCountry = Object.entries(igCountryies);

 const igCities  = useData("/stats/city/instagram", start, end);
 const igCity = Object.entries(igCities);
 //Tabla Posts
 const igPosts  = useData("/stats/instagram/posts", start, end);


      const TimeLine = igUnFollows.map((d) => {
        return +d[0];
      });
 

     const igDatosCrecimiento = [
    {
      data: useTimeLine(igFollows),
      dataNumber: igFollows.length != 0 ? parseInt(igFollows[igFollows.length - 1][1], 0) : "",
      dataNumberPast: igFollowsPast.length != 0 ? parseInt(igFollowsPast[igFollowsPast.length - 1][1], 0) : "",
      type: 'line',
      id: 'igG',
      name: 'Seguidores',
      group: 'crecimiento',
      color: '#42a5f5'
    },
    {
      data: useTimeLine(igUnFollows),
      dataNumber: igUnFollows.length != 0 ? parseInt(igUnFollows[igUnFollows.length - 1][1], 0) : "",
      dataNumberPast: igUnFollows.length != 0 ? parseInt(igUnFollows[igUnFollows.length - 1][1], 0) : "",
      type: 'line',
      id: 'igP',
      name: 'Siguiendo',
      group: 'crecimiento',
      color: '#4dd0e1'
    },
    {
      data: useTimeLine(igPost),
      dataNumber: useCount(igPost),
      dataNumberPast: useCount(igPostPast),
      type: 'bar',
      id: 'igPost',
      name: 'Posts',
      group: 'crecimiento',
      color: '#fff176'
    },
    

  ]

  const igBalanceSeg = [{
    data: useTimeLine(igFollows),
    dataNumber: useCount(igFollows),
    dataNumberPast: useCount(igFollowsPast),
    type: 'line',
    id: 'igIP',
    name: 'Seguidores',
    group: 'crecimiento',
    color: '#42a5f5'
},
{
  data: useTimeLine(igPost),
  dataNumber: useCount(igPost),
  dataNumberPast: useCount(igPostPast),
  type: 'bar',
  id: 'igPost',
  name: 'Posts',
  group: 'crecimiento',
  color: '#fff176'
},


]

const igAlcancePagina = [{
  data: useTimeLine(igimpresiones),
  dataNumber: igBody.impressions,
  dataNumberPast: igBodyPast.impressions,
  type: 'line',
  id: 'igIP',
  name: 'Impresiones',
  group: 'crecimiento',
  color: '#42a5f5'
},
{
data: useTimeLine(igAlcance),
dataNumber: igBody.reach,
dataNumberPast: igBodyPast.reach,
type: 'line',
id: 'Alcance',
name: 'Alcance',
group: 'crecimiento',
color: '#4dd0e1'
},
{
  data: useTimeLine(visitasPerfil),
  dataNumber: igBody.profile_views,
  dataNumberPast: igBodyPast.profile_views,
  type: 'line',
  id: 'visitas',
  name: 'Visitas al perfil',
  group: 'crecimiento',
  color: '#f06292'
  },
  {
    data: useTimeLine(igPost),
    dataNumber: useCount(igPost),
    dataNumberPast: useCount(igPostPast),
    type: 'bar',
    id: 'igPost',
    name: 'Posts',
    group: 'crecimiento',
    color: '#fff176'
  },


]




const igAPublicaciones = [{
  data: useTimeLine(igEngagement),
  dataNumber: useCount(igEngagement),
  dataNumberPast: useCount(igEngagementPast),
  type: 'line',
  id: 'Engagament',
  name: 'Engagament',
  group: 'crecimiento',
  color: '#42a5f5'
},
{
data: useTimeLine(igInteractions),
dataNumber: useCount(igInteractions),
dataNumberPast: useCount(igInteractionsPast),
type: 'line',
id: 'Interacciones',
name: 'Interacciones',
group: 'crecimiento',
color: '#4dd0e1'
},
{
  data: useTimeLine(igPostsReach),
  dataNumber: useCount(igPostsReach),
  dataNumberPast: useCount(igPostsReachPast),
  type: 'line',
  id: 'Alcance',
  name: 'Alcance',
  group: 'crecimiento',
  color: '#f06292'
  },
  {
    data: useTimeLine(igPostsImpressions),
    dataNumber: useCount(igPostsImpressions),
    dataNumberPast: useCount(igPostsImpressionsPast),
    type: 'bar',
    id: 'Impresiones',
    name: 'Impresiones',
    group: 'crecimiento',
    color: '#fff176'
  },


]



const igInteraciones = [{
  data: useTimeLine(igLikes),
  dataNumber: useCount(igLikes),
  dataNumberPast: useCount(igLikesPast),
  type: 'line',
  id: 'Me gusta',
  name: 'Me gusta',
  group: 'crecimiento',
  color: '#42a5f5'
},
{
data: useTimeLine(igComments),
dataNumber: useCount(igComments),
dataNumberPast: useCount(igCommentsPast),
type: 'line',
id: 'Comentarios',
name: 'Comentarios',
group: 'crecimiento',
color: '#4dd0e1'
},
{
  data: useTimeLine(igSaved),
  dataNumber: useCount(igSaved),
  dataNumberPast: useCount(igSavedPast),
  type: 'line',
  id: 'Guardados',
  name: 'Guardados',
  group: 'crecimiento',
  color: '#f06292'
  },



]





const igHistoria = [{
  data: useTimeLine(igStoriesImpressions),
  dataNumber: useCount(igStoriesImpressions),
  dataNumberPast: useCount(igStoriesImpressionsPast),
  type: 'line',
  id: 'Impresiones',
  name: 'Impresiones',
  group: 'crecimiento',
  color: '#42a5f5'
},
{
data: useTimeLine(igStoriesReach),
dataNumber: useCount(igStoriesReach),
dataNumberPast: useCount(igStoriesReachPast),
type: 'line',
id: 'Alcance',
name: 'Alcance',
group: 'crecimiento',
color: '#4dd0e1'
},
{
  data: useTimeLine(igStoriesCount),
  dataNumber: useCount(igStoriesCount),
  dataNumberPast: useCount(igStoriesCountPast),
  type: 'line',
  id: 'Historias',
  name: 'Historias',
  group: 'crecimiento',
  color: '#f06292'
  },



]


const igAllData = [
  {
   id: 'Crecimiento',
   data: igDatosCrecimiento,
   name: 'Crecimiento',
   colors: ['#42a5f5', '#4dd0e1', '#f06292', '#fff176'],
  },
  {
   id: 'Alcance de pagina',
   data: igBalanceSeg ,
   name: 'Alcance de Páginna',
  },
  {
   id: 'Alcance',
   data: igAlcancePagina,
   name: 'Alcance',
  },
  {
    id: 'Publicaciones',
    data: igAPublicaciones,
    name: 'Publicaciones',
   },
   {
    id: 'Interacciones',
    data: igInteraciones,
    name: 'Interacciones',
   },
   {
    id: 'Historia',
    data: igHistoria,
    name: 'Historia',
   }
 ]



 
  return (

    <div className="container">
            <div className="Ancl">
        {igAllData.map((item) => {
          return (
            <a className="SectionsAncles" href={"#" + item.name}>
              {item.name}
            </a>
          );
        })}
      </div>
       <h3 className="PageTitle">VISIÓN GENERAL DE LA PÁGINA DE INSTAGRAM</h3>
    <div className="row">
    {
    igAllData.map(item => {
      return(
        <SeccionesGraficas
        id={item.id}
        data={item.data} 
        timeLine={TimeLine}
        name={item.name} 
        colors={item.colors}
          />
      )
      
      
    })
   }
 

    </div>
    <div className="row">
    <div className="row">
    <div className="row">
        <div className="charsex col-lg-6 col-12">
          <h5 className="Subtitle">Sexo</h5>
          <ChartPie data={igsexo} />
        </div>
        <div className="Subtitle chartGender col-lg-6 col-12">
          <h5>Edad</h5>

          <ChartEdad data={igAge} horizontal={false} colors={["#fff176"]} height={350}/>
        </div>
        <div className="chartCountries col-lg-6 col-12">
          <h5 className="Subtitle">Paises de los Seguidores</h5>
          <ChartCountries data={igCountry} />
        </div>
        <div className="CitiesList col-lg-6 col-12">
          <h5 className="Subtitle">Ciudades de los Seguidores</h5>
          <div className="ListCities">
          <CitiesList data={igCity}/>
          </div>
         
        </div>
      </div>
      </div>
      </div>
    <h3>Lista de Publicaciones</h3>
      <Slider {...settings}>
        {igPosts.map((item) => {
          const fecha = new Date(item.created).toDateString();

          return (
            <PublicationList
              picture={item.imageUrl}
              link={item.url}
              fecha={fecha}
              type={item.type}
              clicks={item.clicks}
              text={item.content}
              Likes={item.likes}
              linkclicks={item.linkclicks}
              puntos={parseInt(item.engagement)}
              reproducciones={item.impressions}
            />
          );
        })}
      </Slider>
  </div>

  
  
  )
}

export default Instagram;