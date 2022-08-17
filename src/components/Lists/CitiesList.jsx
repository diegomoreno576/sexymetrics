import React from 'react'
import '../../assets/styles/components/CitiesList.css'

const CitiesList = (props) => {
    

 const AllCities = props.data.map(([key, value]) => {
       return(
       
        <ul className='citiesList'>
                    <li>
                        
                        <span className='CitiesListNumber'>
                            {
                                value
                            }
                        </span>
                        <span className='CitiesListCountries'>
                            {

                                key
                            }
                        </span>
                    </li>
                </ul>
    
       )
      });

return AllCities
 
}

export default CitiesList