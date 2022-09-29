import React from 'react'
import ChartEdad from '../charts/ChartEdad'
import '../../assets/styles/components/dashboard/userSex.css'
import { IoMdFemale, IoMdMale } from "react-icons/io"
import {AiOutlineQuestionCircle} from "react-icons/ai"

const Userssex = (props) => {
  return (
    <div className="SexBar">
      <div className="row">
        <div className="col-1 col-se-icons">
        <div className="maleSex sex-icons">
            <IoMdFemale/>
          </div>
          <div className="femaleSex sex-icons">
            <IoMdMale/>
          </div>
          <div className="unknownSex sex-icons">
            <AiOutlineQuestionCircle/>
          </div>
        </div>
        <div className="col-11 col-sex-grafic">
          <ChartEdad
            data={props.sex}
            horizontal={true}
            gridShow={false}
            yaxisShow={false}
            height={115}
            labels={false}
            barBackground={["black"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Userssex