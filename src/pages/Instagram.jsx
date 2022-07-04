import React, { useContext} from 'react';
import useData from '../hooks/useData';
import { ThemeContext } from '../context';
import SeccionesGraficas from '../components/SeccionesGraficas';

const usuario = 'username=notecopies.sm@outlook.com'
const blogId = 'blogId=557387' 
const userId = 'userId=44035'
const userToken = 'userToken=HTDJDJSLGBKTFLIDAHAQLCESCFTPHUFYXNEIMVNLLZCXVUNOXCJQVYRAHAHWFLFW'
const baseURL = 'https://app.metricool.com/api'


let date = new Date();
const start = String(date.getFullYear() + String(date.getMonth() + 1).padStart(2, '0') + '01');
let end = String(date.getFullYear() + String(date.getMonth() + 1).padStart(2, '0') + date.getDate()).padStart(2, '0');


const Instagram = () => {
  const [state, dispatch] = useContext(ThemeContext);
  // Crecimiento
  const IGFollows = `${baseURL}/stats/timeline/igFollowing?${userToken}&${blogId}&start=${state.TimeStart}&end=${state.TimeEnd}&${userId}&${usuario}`;
  const IGUnFollows = `${baseURL}/stats/timeline/igFollowing?${userToken}&${blogId}&start=${state.TimeStart}&end=${state.TimeEnd}&${userId}&${usuario}`;
  const IGPost = `${baseURL}/stats/timeline/igPosts?${userToken}&${blogId}&start=${state.TimeStart}&end=${state.TimeEnd}&${userId}&${usuario}`;

     const igFollows = useData(IGFollows);
     const igUnFollows = useData(IGUnFollows);
     const igPost = useData(IGPost);



      const TimeLine = igFollows.map((d) => {
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

  const igAlcancePag = [{
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



const FbAllData = [
  igDatosCrecimiento,
   igAlcancePag 
   
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