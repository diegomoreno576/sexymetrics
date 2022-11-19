import React, { useState, useEffect, Fragment } from "react";
import Banner from "../assets/img/Banner.png";
import "../assets/styles/components/PageBanner.css";
import { SiFacebook } from "react-icons/si";
import ComunityVitual from "./ComunityVitual";
import { APP_URL } from "../constants";
import { useParams } from "react-router-dom";

const PageBanner = () => {
  let { brand_id } = useParams();

  const [profileData, setprofileData] = useState([]);

  let cover = profileData?.fb_body_data?.cover?.source;
  let name = profileData?.fb_body_data?.name;
  let picture = profileData?.fb_body_data?.picture?.data?.url;
  

  useEffect(() => {
    async function data() {
      try {
        const response = await fetch(
          `${APP_URL}/api/v1/page_facebook_profile?brand_id=${brand_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: sessionStorage.getItem("jwt"),
            },
          }
        );
        const data = await response.json();
        setprofileData(data);
      } catch (error) {
        console.log(error);
      }
    }
    data();
  }, [brand_id]);

  return (
    <Fragment>
    
      
      <div className="page-banner">
        <div className="page-banner-container">
          <div className="page-banner-img">
            <img src={cover} alt="" />
          </div>
        </div>
      </div>

    <div className="container">
    <div className="page_descrption"> 
        <div className="page_picture">
          <img src={picture} alt="" />
        </div>
        <div className="page_name">
          <h1>{name}</h1>
          </div>
      </div>
    </div>
     
      {/* <div className="row descripcion-container">
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
      </div> */}
    </Fragment>
  );
};

export default PageBanner;
