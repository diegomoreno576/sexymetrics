import React, { useContext} from 'react';
import useData from '../hooks/useData';
import SeccionesGraficas from '../components/SeccionesGraficas';



const Instagram = () => {

 //Crecimiento
     const igFollows = useData("/stats/timeline/igFollowing");
     const igUnFollows = useData("/stats/timeline/igFollowing");
     const igPost = useData("/stats/timeline/igPosts");

//Alcance de Pagina
const igimpresiones = useData("/stats/timeline/igPosts");
const igAlcance = useData("/stats/timeline/igPosts");
const visitasPerfil = useData("/stats/timeline/igPosts");



      const TimeLine = igUnFollows.map((d) => {
        return +d[0];
      });
 

     const igDatosCrecimiento = [
    {
      data: igFollows.map((d) => {
        return +d[1];
      }),
      type: 'line',
      id: 'igG',
      name: 'Seguidores',
      group: 'crecimiento',
      background: '#4dd0e1'
    },
    {
      data: igUnFollows.map((d) => {
        return +d[1];
      }),
      type: 'line',
      id: 'igP',
      name: 'Siguiendo',
      group: 'crecimiento',
      background: '#f06292'
    },
    {
      data: igPost.map((d) => {
        return +d[1];
      }),
      type: 'bar',
      id: 'igPost',
      name: 'Posts',
      group: 'crecimiento',
      background: '#fff176'
    },
    

  ]

  const igBalanceSeg = [{
    data: igFollows.map((d) => {
      return +d[1];
    }),
    type: 'line',
    id: 'igIP',
    name: 'Seguidores',
    group: 'crecimiento',
    background: '#42a5f5'
},
{
  data: igPost.map((d) => {
    return +d[1];
  }),
  type: 'bar',
  id: 'igPost',
  name: 'Posts',
  group: 'crecimiento',
  background: '#fff176'
},


]

const igAlcancePagina = [{
  data: igimpresiones.map((d) => {
    return +d[1];
  }),
  type: 'line',
  id: 'igIP',
  name: 'Impresiones',
  group: 'crecimiento',
  background: '#42a5f5'
},
{
data: igAlcance.map((d) => {
  return +d[1];
}),
type: 'line',
id: 'igPost',
name: 'Alcance',
group: 'crecimiento',
background: '#4dd0e1'
},
{
  data: visitasPerfil.map((d) => {
    return +d[1];
  }),
  type: 'line',
  id: 'igPost',
  name: 'Visitas al perfil',
  group: 'crecimiento',
  background: '#f06292'
  },
  {
    data: igPost.map((d) => {
      return +d[1];
    }),
    type: 'bar',
    id: 'igPost',
    name: 'Posts',
    group: 'crecimiento',
    background: '#fff176'
  },


]



const FbAllData = [
  igDatosCrecimiento,
  igBalanceSeg ,
  igAlcancePagina
   
]


    




 
  return (

    <div className="container">
    <div className="row">
    {
    FbAllData.map(item => {
      return(
<SeccionesGraficas data={item} timeLine={TimeLine} />
      )
      
      
    })
   }
 

    </div>
    
  </div>

  
  
  )
}

export default Instagram;