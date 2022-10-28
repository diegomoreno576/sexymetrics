import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import "../assets/styles/components/SelectorRedes.css";
import useComponentVisible from '../hooks/useComponentVisible';
import { LayoutContext } from "../context/layoutContext";
const SelectorRedes = () => {

  const [state, dispatch] = useContext(LayoutContext);
  const [selected, setIsSelected] = useState({
    Imagen: 'https://notecopies.app/wp-content/uploads/2022/06/DB_SM.png"', 
    Texto: 'Inicio',
  });

  const routes = [
    {
      path: "/",
      name: "Inicio",
      icon: 'https://notecopies.app/wp-content/uploads/2022/06/DB_SM.png',
    },
    {
      path: "/facebook",
      name: "Facebook",
      icon: 'https://notecopies.app/wp-content/uploads/2022/01/facebook.png',
    },
    {
      path: "/instagram",
      name: "Instagram",
      icon: 'https://notecopies.app/wp-content/uploads/2022/01/instagram.png',
    },
    {
      path: "/twitter",
      name: "Twitter",
      icon: 'https://notecopies.app/wp-content/uploads/2022/01/twitter.png',
    },
    {
      path: "/linkeding",
      name: "Linkeding",
      icon: '	https://notecopies.app/wp-content/uploads/2022/01/linkedin.png',
    },
    {
      path: "/googlemybussines",
      name: "Google my Bussines",
      icon: 'https://notecopies.app/wp-content/uploads/2021/05/google-myb.png',
    },
    {
      path: "/web",
      name: "Web",
      icon: 'https://notecopies.app/wp-content/uploads/2022/01/red-mundial.png',
    },
    {
      path: "/googleads",
      name: "Google Ads",
      icon: 'https://notecopies.app/wp-content/uploads/2021/05/google-ads.png',
    },
    {
      path: "/facebookads",
      name: "Facebook Ads",
      icon: 'https://notecopies.app/wp-content/uploads/2021/05/facebook-ads-2.png',
    },
    {
      path: "/planificacion",
      name: "Planificación",
      icon: "	https://notecopies.app/wp-content/uploads/2022/01/calendar.png",
    },
  ];


  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

  if(state.changeLayout == true){
  return (
    <div ref={ref} className="selectorRedes">
      <div className="RedesMaindropdown">
        <div
          onClick={(e) => {
            setIsComponentVisible(!isComponentVisible);
          }}
          className="Redesdropdown-btn"
        >
           <img className="RedesIcono" src={selected.Imagen} width="64" height="64" alt="Image" loading="lazy"/>
            <span className="RedesText">{selected.Texto}</span>
          <span
            className={isComponentVisible ? "IconoCaret fas fa-caret-up" : "IconoCaret fas fa-caret-down"}
          />
        

        <div  className="Redesdropdown-content" style={{ display: isComponentVisible ? "block" : "none" }}>  
        <div  className="Redesdropdown-contentChild" >

          {routes.map((route, index) => {
            return (
              <div key={index}
            onClick={(e) => {
              setIsSelected({
                Imagen: route.icon, 
                Texto: route.name,
                })
              //  setIsComponentVisible(!isComponentVisible);
            }}
            className="Redesitem">
            <NavLink
                to={route.path}
                key={index}
                className="RedesLink"
                activeclassname="Redesactive"
              >
                <div className="icon">
                  <img className="RedesIcono" src={route.icon} width="64" height="64" alt="Image" loading="lazy"/>
                  <span className="RedesText">
                    {route.name}
                    </span>
                    </div>
              </NavLink>
          </div>
            );
          })}
     
          </div>
        </div>
        </div>
      </div>
    </div>
  );
   }else{
    return(
      <div className="Redesdropdown-btn-close">
           <img className="RedesIcono-close" src={selected.Imagen} width="64" height="64" alt="Image" loading="lazy"/>    
      </div>
    )
   }
}

export default SelectorRedes