import { NavLink } from "react-router-dom";
import { useState, useContext, Fragment, useEffect } from "react";
import { ThemeContext } from "../context";
import "../assets/styles/components/Avatar.css";
import useComponentVisible from "../hooks/useComponentVisible";
import { LayoutContext } from "../context/layoutContext";
import Blank_profile_picture from "../assets/img/Blank-profile-picture.png";
import currentUser from "../services/currentUser";
import { setBrand_id } from "../actions";
import { setLoading } from "../actions";

const Avatar = () => {
  const [layoutState, dispatch] = useContext(LayoutContext);
  const [appState, dispatchapp] = useContext(ThemeContext);
  const [currentuser, setCurrentuser] = useState() 
  let avatar = currentuser?.[0]?.image;
   let name = currentuser?.[0]?.name;

  const [selected, setIsSelected] = useState({
   avatar: avatar ? avatar : Blank_profile_picture,
    name: name,
  });
  
  useEffect(() => {
    currentUser()
      .then((response) => {
        setCurrentuser(response.brands)
      }
      )
      .catch((error) => {
        console.log(error);
      }
      );
  }, [setCurrentuser])
  

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  if (layoutState.changeLayout == true) {
    return (
      <Fragment>
        <div ref={ref} className="selectorRedes">
          <div className="RedesMaindropdown">
            <div
              onClick={(e) => {
                setIsComponentVisible(!isComponentVisible);
              }}
              className="brand_dropdown_btn"
            >
              <img
                className="brand_avatar"
                src={selected.avatar}
                width="55"
                height="55"
                alt="Image"
                loading="lazy"
              />
              <span className="brand_text">{selected.name}</span>
              <span
                className={
                  isComponentVisible
                    ? "IconoCaret fas fa-caret-up"
                    : "IconoCaret fas fa-caret-down"
                }
              />

              <div
                className="Redesdropdown-content"
                style={{ display: isComponentVisible ? "block" : "none" }}
              >
                <div className="Redesdropdown-contentChild">
                  {currentuser?.map((info, index) => {
                    return (
                      <div
                        key={index}
                        onClick={(e) => {
                          setIsSelected({
                            avatar: info.image
                              ? info.image
                              : Blank_profile_picture,
                            name: info.name,
                          });
                          //  setIsComponentVisible(!isComponentVisible);
                        }}
                        className="Redesitem"
                      >
                        <NavLink
                          to={`facebook/brand_id=${info.id}&user_id=${info.user_id}`}
                          key={index}
                          onClick={(e) => {
                            dispatchapp(
                              setBrand_id(info.id)

                            );
                          }}
                          className="RedesLink"
                          activeclassname="Redesactive"
                        >
                          <div className="icon">
                            <img
                              className="RedesIcono"
                              src={
                                info.image ? info.image : Blank_profile_picture
                              }
                              width="64"
                              height="64"
                              alt="Image"
                              loading="lazy"
                            />
                            <span className="RedesText">{info.name}</span>
                          </div>
                        </NavLink>
                      </div>
                    );
                  })}
                </div>
                <div className="add_new_brand">
                  <div className="button_add_new_brand">
                    <button>
                      <span className="icon">
                        <i className="fas fa-plus"></i>
                      </span>
                      <span className="text">Agregar una marca</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <div className="Redesdropdown-btn-close">
        <img
          className="RedesIcono-close"
          src={selected.avatar}
          width="55"
          height="55"
          alt="Image"
          loading="lazy"
        />
      </div>
    );
  }
};

export default Avatar;
