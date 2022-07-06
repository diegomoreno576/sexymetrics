import React, { useContext } from 'react';
import MixedGrafica from '../components/MixedGrafica';
import BotonGrafica from '../components/BotonGrafica';
import '../assets/styles/components/seccionesGraficas.css';

const SeccionesGraficas = (props) => {
    
    
    return (
        <React.Fragment>
            <div className='SeccionTitle'>
              <p>{props.name} </p>
            </div>
       
    {
          props.data.map(items => {

            return(
              <div key={items.id} className="col-lg-3 col-6">
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
</React.Fragment>
      )
}

export default SeccionesGraficas