import React, { useContext } from "react";
import MixedGrafica from "./MixedGrafica";
import BotonGrafica from "./BotonGrafica";
import "../../assets/styles/components/seccionesGraficas.css";
import { useActiveMenu } from "react-active-menu";
import ComunityVitual from "../ComunityVitual";
import { SiFacebook } from "react-icons/si";

const SeccionesGraficas = (props) => {
  const { registerContainer, registerSection, registerTrigger } = useActiveMenu(
    {
      smooth: true,
    }
  );

  return (
    <div ref={registerContainer}>
      
      <div ref={registerSection(props.name)} id={props.name}>
        <div className="row secciones-graficas-row">
          <div className="SeccionTitle">
          <div className="row descripcion-container">
              <div className="col-4">
                <div className="seccion-descriptcion">
                  <div className="row">
                      <div className="col-2 description-icon">
                          <SiFacebook/>
                      </div>
                      <div className="col-10 description-text">
                        <div className="seccion-description-title">
                            <h3 className="PageTitle">VISIÓN GENERAL DE LA PÁGINA DE FACEBOOK</h3>
                        </div>
                        <div>
                        <span>
                          Lorem Ipsum es simplemente el texto de relleno de las
                          imprentas y archivos de texto. Lorem Ipsum ha sido el texto
                          de relleno estándar de las industrias desde el año 1500
                        </span>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <ComunityVitual />
              </div>
            </div>
            <div className="seccionTitle">
              <h3>{props.name} </h3>
            </div>
           
          </div>

          {props.data.map((items) => {
            return (
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
            );
          })}

          <div className="mainGraficMixed">
            <MixedGrafica
              id={props.id}
              Timeline={props.timeLine}
              MixedData={props.data}
              colors={props.colors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeccionesGraficas;
