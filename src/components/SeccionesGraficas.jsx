import React, { useContext } from 'react';
import MixedGrafica from '../components/MixedGrafica';
import BotonGrafica from '../components/BotonGrafica';


const SeccionesGraficas = (props) => {
    
    
    return (
        <React.Fragment>
            
       
    {
          props.data.map(items => {

            return(
              <div key={items.id} className="col-3">
              <BotonGrafica
               datos={items.data} 
               Timeline={props.timeLine}
               type={items.type} 
               id={items.id} 
               name={items.name} 
               group={items.group} 
               background={items.background} />
  
            </div>
            )
          })
    }
        <div className='mainGraficMixed'>
      <MixedGrafica
      Timeline={props.timeLine}
      
       MixedData={props.data}
        />
      </div>
</React.Fragment>
      )
}

export default SeccionesGraficas