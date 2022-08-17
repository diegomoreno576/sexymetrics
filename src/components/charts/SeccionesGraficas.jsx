import React, { useContext } from 'react';
import MixedGrafica from './MixedGrafica';
import BotonGrafica from './BotonGrafica';
import '../../assets/styles/components/seccionesGraficas.css';

const SeccionesGraficas = (props) => {
    

    
    return (
        <div id={props.name}>
          <div className='row'>
            
         
       
            <div className='SeccionTitle'>
              <h3>{props.name} </h3>
            </div>
       
    {
          props.data.map(items => {

            return(
              <div key={items.id} className="col-lg-3 col-md-6 col-12">
              <BotonGrafica
              idMixed={props.id}
               datos={items.data} 
               Timeline={props.timeLine}
               type={items.type} 
               id={items.id} 
               name={items.name} 
               group={items.group} 
               color={items.color}
               dataNumber={items.dataNumber}
               dataNumberPast={items.dataNumberPast}
               icono={items.icono}
               />
  
            </div>
            )
          })
    }
    
        <div className='mainGraficMixed'>
      <MixedGrafica
      id={props.id}
      Timeline={props.timeLine}
       MixedData={props.data}
       colors={props.colors}
        />
      </div>
      </div>
      </div>
      )
}

export default SeccionesGraficas