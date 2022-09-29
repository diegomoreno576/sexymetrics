import React from 'react'
import ChartEdad from '../charts/ChartEdad'
import '../../assets/styles/components/dashboard/userSex.css'

const Userssex = (props) => {
  return (
    <div className="SexBar">
    <ChartEdad data={props.sex} horizontal={true} gridShow={false} yaxisShow={false} height={100}/>

    </div>
  )
}

export default Userssex