import React, { useContext} from 'react';
import useData from '../hooks/useData';
import SeccionesGraficas from '../components/SeccionesGraficas';
import { ThemeContext } from '../context';


const Instagram = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const start = state.TimeStart;
  const end = state.TimeEnd;
 //Crecimiento
     const igFollows = useData("/stats/timeline/igFollowing", start, end);
     const igUnFollows = useData("/stats/timeline/igFollowing", start, end);
     const igPost = useData("/stats/timeline/igPosts", start, end);

//Alcance de Pagina
const igimpresiones = useData("/stats/timeline/igPosts", start, end);
const igAlcance = useData("/stats/timeline/igPosts", start, end);
const visitasPerfil = useData("/stats/timeline/igPosts", start, end);



      const TimeLine = igUnFollows.map((d) => {
        return +d[0];
      });
 

     const igDatosCrecimiento = [
    {
      data: igFollows.map((d) => {
        return +d[1];
      }),
      dataNumber: '10',
      dataNumberPast: '5',
      type: 'line',
      id: 'igG',
      name: 'Seguidores',
      group: 'crecimiento',
      color: '#4dd0e1'
    },
    {
      data: igUnFollows.map((d) => {
        return +d[1];
      }),
      dataNumber: '10',
      dataNumberPast: '5',
      type: 'line',
      id: 'igP',
      name: 'Siguiendo',
      group: 'crecimiento',
      color: '#f06292'
    },
    {
      data: igPost.map((d) => {
        return +d[1];
      }),
      dataNumber: '10',
      dataNumberPast: '5',
      type: 'bar',
      id: 'igPost',
      name: 'Posts',
      group: 'crecimiento',
      color: '#fff176'
    },
    

  ]

  const igBalanceSeg = [{
    data: igFollows.map((d) => {
      return +d[1];
    }),
    dataNumber: '10',
    dataNumberPast: '5',
    type: 'line',
    id: 'igIP',
    name: 'Seguidores',
    group: 'crecimiento',
    color: '#42a5f5'
},
{
  data: igPost.map((d) => {
    return +d[1];
  }),
  dataNumber: '10',
  dataNumberPast: '5',
  type: 'bar',
  id: 'igPost',
  name: 'Posts',
  group: 'crecimiento',
  color: '#fff176'
},


]

const igAlcancePagina = [{
  data: igimpresiones.map((d) => {
    return +d[1];
  }),
  dataNumber: '10',
  dataNumberPast: '5',
  type: 'line',
  id: 'igIP',
  name: 'Impresiones',
  group: 'crecimiento',
  color: '#42a5f5'
},
{
data: igAlcance.map((d) => {
  return +d[1];
}),
dataNumber: '10',
dataNumberPast: '5',
type: 'line',
id: 'igPost',
name: 'Alcance',
group: 'crecimiento',
color: '#4dd0e1'
},
{
  data: visitasPerfil.map((d) => {
    return +d[1];
  }),
  dataNumber: '10',
  dataNumberPast: '5',
  type: 'line',
  id: 'igPost',
  name: 'Visitas al perfil',
  group: 'crecimiento',
  color: '#f06292'
  },
  {
    data: igPost.map((d) => {
      return +d[1];
    }),
    dataNumber: '10',
    dataNumberPast: '5',
    type: 'bar',
    id: 'igPost',
    name: 'Posts',
    group: 'crecimiento',
    color: '#fff176'
  },


]



const igAllData = [
  {
   id: 'Crecimiento',
   data: igDatosCrecimiento,
   name: 'Crecimiento',
   colors: ['#42a5f5', '#4dd0e1', '#f06292', '#fff176'],
   timeLine: igFollows.map((d) => {
     return +d[1];
   }),
   
  },
  {
   id: 'Alcance de pagina',
   data: igBalanceSeg ,
   name: 'Alcance de Páginna',
   timeLine: igFollows.map((d) => {
     return +d[1];
   }),
  },
  {
   id: 'Publicaciones',
   data: igAlcancePagina,
   name: 'Publicaciones',
   timeLine: igFollows.map((d) => {
     return +d[1];
   }),
  }
 ]


    




 
  return (

    <div className="container">
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
    
  </div>

  
  
  )
}

export default Instagram;