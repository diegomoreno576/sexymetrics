import { FaBars, FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin, BsCalendarRange } from "react-icons/bs";
import { SiGooglemybusiness, SiGoogleads} from "react-icons/si";
import { MdCampaign} from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import {  AiOutlineGlobal } from "react-icons/ai";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../context";
import { AnimatePresence, motion } from "framer-motion";
import DarkMode from "../DarkMode";
import '../../assets/styles/components/SideBar.css';
import Logout from "../auth/Logout";
import Avatar from "../Avatar";
import  SelectorRedes from "../SelectorRedes";
import MonthYearCalendar from "../MonthCalendar";
import { setchangeLayout } from "../../actions";


const routes = [
  {
    path: "/",
    name: "inicio",
    icon: <RiHome6Fill />,
  },
  {
    path: "/facebook",
    name: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    path: "/instagram",
    name: "Instagram",
    icon: <BsInstagram />,
  },
  {
    path: "/twitter",
    name: "twitter",
    icon: <BsTwitter />,
  },
  {
    path: "/linkeding",
    name: "Linkeding",
    icon: <BsLinkedin />,
  },
  {
    path: "/googlemybussines",
    name: "Google my Bussines",
    icon: <SiGooglemybusiness />,
  },
  {
    path: "/web",
    name: "web",
    icon: <AiOutlineGlobal />,
  },
  {
    path: "/googleads",
    name: "Google Ads",
    icon: <SiGoogleads />,
  },
  {
    path: "/facebookads",
    name: "Facebook Ads",
    icon: <MdCampaign />,
  },
  {
    path: "/planificacion",
    name: "Planificación",
    icon: <BsCalendarRange />,
  },
  {
    path: "/chat",
    name: "Chat",
    icon: <BsCalendarRange />,
  },
];

const Sidebar = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
 
  useEffect(() => {
    dispatch(setchangeLayout(isOpen));
  }, [isOpen]);


  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "260px",
      padding: "5px 15px",
      transition: {
        duration: 0,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <>
      <div className="main-container">

        <motion.div
          animate={{
            width: isOpen ? "25%" : "90px",

            transition: {
              duration: 0,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div onClick={toggle} className="buttonFlag">
          <div class="row">
            <div class="">
              <div class="toogleBarButton">
                <i class={isOpen ? "menuIconCloseOpen fa-solid fa-angles-left" : "menuIconCloseOpen fa-solid fa-angles-right"}></i>
                </div>
               </div>
            </div>
          </div>

          <div className="HeaderSection">
          <div className="sidebarName">
            <AnimatePresence>
            <Avatar/>
            
            </AnimatePresence>
            </div>
            {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
               <div className="UltilsButtons">
                  <DarkMode/>
                      <Logout/>
                    
                  </div>
                
                </motion.h1>
              )}
           
           
          </div>
         
                 
          <section className="routes">
          <SelectorRedes/>
     
            <MonthYearCalendar/>
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
