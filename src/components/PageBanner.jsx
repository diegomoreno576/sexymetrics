import React,{useState, useEffect, Fragment} from 'react'
import Banner from "../assets/img/Banner.png"
import '../assets/styles/components/PageBanner.css'
import { SiFacebook } from "react-icons/si";
import ComunityVitual from './ComunityVitual';

const PageBanner = () => {

   
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset); 
      
  
  return (
    <Fragment>
        <div className="page-banner"  >  
    
    <div className="page-banner-container">
    <div
    className={
      offset > 10 ? "page-banner-img" : "page-banner-img-active"
    }
  >
            <img src={Banner} alt="" />
        </div>
        </div> 
</div>
       <div className="row descripcion-container">
              <div className="col-4">
                <div className="seccion-descriptcion">
                  <div className="row">
                    <div className="col-2 description-icon">
                      <SiFacebook />
                    </div>
                    <div className="col-10 description-text">
                      <div className="seccion-description-title">
                        <h3 className="PageTitle">
                          VISIÓN GENERAL DE LA PÁGINA DE FACEBOOK
                        </h3>
                      </div>
                      <div>
                        <span>
                          Lorem Ipsum es simplemente el texto de relleno de las
                          imprentas y archivos de texto. Lorem Ipsum ha sido el
                          texto de relleno estándar de las industrias desde el
                          año 1500
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
    </Fragment>
  
  )
}

export default PageBanner