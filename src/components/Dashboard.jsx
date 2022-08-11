import React from 'react'
import BotonGrafica from './BotonGrafica'

export const Dashboard = (props) => {
    return (
        <div className='Resumen'>
    
      
       
    {
          props.data.map(items => {

            return(
              <div key={items.id} className="col-12">
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
    
   
      </div>
      )
}
