import React, { useContext, useEffect} from 'react';
import useData from '../hooks/useData';
import { ThemeContext } from '../context';
import { setFbDatos } from '../actions';
import SeccionesGraficas from '../components/SeccionesGraficas';

const Facebook = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
  //FbBody
  const fbbody = useData(`/stats/aggregations/Facebook`, start, end);

  //FbBodyPast
  const fbbodyPast = useData(`/stats/aggregations/Facebook`, state.TimeStartPast, state.TimeEndPast);

  // Crecimiento

     const fbLikes = useData(`/stats/timeline/facebookLikes`, start, end);
     const fbFollows = useData(`/stats/timeline/fbFollows`, start, end);
     const fbUnFollows = useData(`/stats/timeline/fbUnfollows`, start, end);
     const fbPost = useData(`/stats/timeline/fbPosts`, start, end);

    //Alcance
      
      const fbImpresiones = useData(`/stats/timeline/pageImpressions`, start, end);

    //Click en la pagina
    const fbctaClicks = useData(`/stats/timeline/ctaClicks`, start, end);
    const fbgetDirectionsClicks = useData(`/stats/timeline/getDirectionsClicks`, start, end);
    const fbcallPhoneClicks = useData(`/stats/timeline/callPhoneClicks`, start, end);
    const fbpageViews = useData(`/stats/timeline/pageViews`, start, end);
    //Publicaciones
    const fbDailyEngagement = useData(`/stats/timeline/fbDailyEngagement`, start, end);
    const fbDailyInteractions = useData(`/stats/timeline/fbDailyInteractions`, start, end);
    const fbdailyImpressionsUnique = useData(`/stats/timeline/dailyImpressionsUnique`, start, end);
    const fbdailyImpressions = useData(`/stats/timeline/dailyImpressions`, start, end);
    //Interacciones
    const fbdailyReactions = useData(`/stats/timeline/dailyReactions`, start, end);
    const fbComments = useData(`/stats/timeline/fbComments`, start, end);
    const fbdailyShares = useData(`/stats/timeline/dailyShares`, start, end);
    const fbdailyClicks = useData(`/stats/timeline/dailyClicks`, start, end);

      const TimeLine = fbFollows.map((d) => {
        return +d[0];
      });
 

     const FbDatosCrecimiento = [{
        data: fbLikes.map((d) => {
          return +d[1];
        }),
        dataNumber: '10',
        dataNumberPast: '5',
        type: 'line',
        id: 'FbMG',
        name: 'Me gusta',
        group: 'crecimiento',
        color: '#42a5f5',
        icono: "fa-solid fa-thumbs-up"
    },
    {
      data: fbFollows.map((d) => {
        return +d[1];
      }),
      dataNumber: fbbody.Follows,
      dataNumberPast: fbbodyPast.Follows,
      type: 'area',
      id: 'FbG',
      name: 'Ganados',
      group: 'crecimiento',
      color: '#4dd0e1',
      icono: "fa-solid fa-arrow-up"
    },
    {
      data: fbUnFollows.map((d) => {
        return +d[1];
      }),
      dataNumber: fbbody.Unfollows,
      dataNumberPast: fbbodyPast.Unfollows,
      type: 'line',
      id: 'FbP',
      name: 'Perdidos',
      group: 'crecimiento',
      color: '#f06292',
      icono: "fa-solid fa-arrow-down"
    },
    {
      data: fbPost.map((d) => {
        return +d[1];
      }),
      dataNumber: '10',
      dataNumberPast: '5',
      type: 'bar',
      id: 'FbPost',
      name: 'Posts',
      group: 'crecimiento',
      color: '#fff176',
      icono: "fa-solid fa-memo"
    },
    

  ]

  const AlcancePag = [{
    data: fbImpresiones.map((d) => {
      return +d[1];
    }),
    dataNumber: '10',
    type: 'line',
    id: 'FbIP',
    name: 'Impresiones',
    group: 'crecimiento',
    color: '#42a5f5'
},
{
  data: fbPost.map((d) => {
    return +d[1];
  }),
  dataNumber: '10',
  type: 'bar',
  id: 'FbPost',
  name: 'Posts',
  group: 'crecimiento',
  color: '#fff176'
},


]

const FbPublicaciones = [{
  data: fbctaClicks.map((d) => {
    return +d[1];
  }),
  dataNumber: '10',
  type: 'line',
  id: 'FbLlamadaAccion',
  name: 'Llamada a la acción',
  group: 'Publicaciones',
  color: '#42a5f5'
},
{
data: fbgetDirectionsClicks.map((d) => {
  return +d[1];
}),
dataNumber: '10',
type: 'area',
id: 'DirectionsClick',
name: 'Direcciones',
group: 'Publicaciones',
color: '#4dd0e1'
},
{
data: fbcallPhoneClicks.map((d) => {
  return +d[1];
}),
dataNumber: '10',
type: 'line',
id: 'CallPhoneClicks',
name: 'Teléfono',
group: 'Publicaciones',
color: '#f06292'
},
{
data: fbpageViews.map((d) => {
  return +d[1];
}),
dataNumber: '10',
type: 'bar',
id: 'PageViews',
name: 'Vistas de página',
group: 'Publicaciones',
color: '#fff176'
},


]
const FbClickPagina = [{
  data: fbDailyEngagement.map((d) => {
    return +d[1];
  }),
  dataNumber: '10',
  type: 'line',
  id: 'FbDailyEngagement',
  name: 'Engagement',
  group: 'clicksPagina',
  color: '#42a5f5'
},
{
data: fbDailyInteractions.map((d) => {
  return +d[1];
}),
dataNumber: '10',
type: 'area',
id: 'FbDailyInteraction',
name: 'Interacciones',
group: 'clicksPagina',
color: '#4dd0e1'
},
{
data: fbdailyImpressionsUnique.map((d) => {
  return +d[1];
}),
dataNumber: '10',
type: 'line',
id: 'FbDayliImpresionsUnique',
name: 'Alcance',
group: 'clicksPagina',
color: '#f06292'
},
{
data: fbdailyImpressions.map((d) => {
  return +d[1];
}),
dataNumber: '10',
type: 'bar',
id: 'Fbdailyimprsions',
name: 'Impresiones',
group: 'clicksPagina',
color: '#fff176'
},


]

const Fbinteracciones = [{
  data: fbdailyReactions.map((d) => {
    return +d[1];
  }),
  dataNumber: '10',
  type: 'line',
  id: 'FbMG',
  name: 'Reacciones',
  group: 'clicksPagina',
  color: '#42a5f5'
},
{
data: fbComments.map((d) => {
  return +d[1];
}),
dataNumber: '10',
type: 'area',
id: 'FbG',
name: 'Comentarios',
group: 'clicksPagina',
color: '#4dd0e1'
},
{
data: fbdailyShares.map((d) => {
  return +d[1];
}),
dataNumber: '10',
type: 'line',
id: 'FbP',
name: 'Compartidos',
group: 'clicksPagina',
color: '#f06292'
},
{
data: fbdailyClicks.map((d) => {
  return +d[1];
}),
dataNumber: '10',
type: 'bar',
id: 'FbPost',
name: 'Clicks',
group: 'clicksPagina',
color: '#fff176'
},


]


const FbAllData = [
 {
  id: 'Crecimiento',
  data: FbDatosCrecimiento,
  name: 'Crecimiento',
  colors: ['#42a5f5', '#4dd0e1', '#f06292', '#fff176'],
  timeLine: fbLikes.map((d) => {
    return +d[1];
  }),
  
 },
 {
  id: 'Alcance de pagina',
  data: AlcancePag,
  name: 'Alcance de Páginna',
  timeLine: fbImpresiones.map((d) => {
    return +d[1];
  }),
 },
 {
  id: 'Publicaciones',
  data: FbPublicaciones,
  name: 'Publicaciones',
  timeLine: fbctaClicks.map((d) => {
    return +d[1];
  }),
 },
 {
  id: 'Clicks en pagina',
  data: FbClickPagina,
  name: 'Clicks en la página',
  timeLine: fbDailyEngagement.map((d) => {
    return +d[1];
  }),
 },
{
  id: 'interacciones',
  data: Fbinteracciones,
  name: 'Interacciones',
  timeLine: fbdailyReactions.map((d) => {
    return +d[1];
  }),
}
]


    

  useEffect( () => {
    dispatch(setFbDatos(FbAllData));
  }, []); 



 
  return (

    <div className="container">
    <div className="row">
    {
    FbAllData.map(item => {
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
    
  </div>

  
  
  )
}

export default Facebook