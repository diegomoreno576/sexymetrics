import React, { useContext, useEffect} from 'react';
import useData from '../hooks/useData';
import { ThemeContext } from '../context';
import { setFbDatos } from '../actions';
import SeccionesGraficas from '../components/SeccionesGraficas';

const Facebook = () => {
  const [state, dispatch] = useContext(ThemeContext);


  // Crecimiento

     const fbLikes = useData(`/stats/timeline/facebookLikes`);
     const fbFollows = useData(`/stats/timeline/fbFollows`);
     const fbUnFollows = useData(`/stats/timeline/fbUnfollows`);
     const fbPost = useData(`/stats/timeline/fbPosts`);

    //Alcance
      
      const fbImpresiones = useData(`/stats/timeline/pageImpressions`);

    //Click en la pagina


    //Publicaciones


    //Interacciones


      const TimeLine = fbLikes.map((d) => {
        return +d[0];
      });
 

     const FbDatosCrecimiento = [{
        data: fbLikes.map((d) => {
          return +d[1];
        }),
        type: 'line',
        id: 'FbMG',
        name: 'Me gusta',
        group: 'crecimiento',
        background: '#42a5f5'
    },
    {
      data: fbFollows.map((d) => {
        return +d[1];
      }),
      type: 'area',
      id: 'FbG',
      name: 'Ganados',
      group: 'crecimiento',
      background: '#4dd0e1'
    },
    {
      data: fbUnFollows.map((d) => {
        return +d[1];
      }),
      type: 'line',
      id: 'FbP',
      name: 'Perdidos',
      group: 'crecimiento',
      background: '#f06292'
    },
    {
      data: fbPost.map((d) => {
        return +d[1];
      }),
      type: 'bar',
      id: 'FbPost',
      name: 'Posts',
      group: 'crecimiento',
      background: '#fff176'
    },
    

  ]

  const AlcancePag = [{
    data: fbImpresiones.map((d) => {
      return +d[1];
    }),
    type: 'line',
    id: 'FbIP',
    name: 'Impresiones',
    group: 'crecimiento',
    background: '#42a5f5'
},
{
  data: fbPost.map((d) => {
    return +d[1];
  }),
  type: 'bar',
  id: 'FbPost',
  name: 'Posts',
  group: 'crecimiento',
  background: '#fff176'
},


]



const FbAllData = [
  FbDatosCrecimiento,
   AlcancePag 
   
]


console.log(state)
    

  useEffect( () => {
    dispatch(setFbDatos(FbAllData));
  }, []); 



 
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

export default Facebook