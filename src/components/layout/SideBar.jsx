import { FaFacebookF } from "react-icons/fa";
import {
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsCalendarRange,
} from "react-icons/bs";
import { SiGooglemybusiness, SiGoogleads } from "react-icons/si";
import { MdCampaign } from "react-icons/md";
import { RiHome6Fill } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { useState, useContext, useEffect } from "react";
import { LayoutContext } from "../../context/layoutContext";
import { AnimatePresence, motion } from "framer-motion";
import DarkMode from "../DarkMode";
import "../../assets/styles/components/SideBar.css";
import Logout from "../auth/Logout";
import Avatar from "../Avatar";
import SelectorRedes from "../SelectorRedes";
import MonthYearCalendar from "../MonthCalendar";
import { setchangeLayout } from "../../actions";
import Team from "../Team";

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
  const [state, dispatch] = useContext(LayoutContext);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {
    dispatch(setchangeLayout(isOpen));
  }, [isOpen]);

  return (
    <>
      <div className="main-container">
        <div className={isOpen ? "sidebar" : "sidebar closeSidebar"}>
          <div onClick={toggle} className="buttonFlag">
            <div class="row">
              <div class="">
                <div class="toogleBarButton">
                  <i
                    class={
                      isOpen
                        ? "menuIconCloseOpen fa-solid fa-angles-left"
                        : "menuIconCloseOpen fa-solid fa-angles-right"
                    }
                  ></i>
                </div>
              </div>
            </div>
          </div>
     
            <div className="sidebarElements">
              <div className="HeaderSection">
                <div className="sidebarName">
                  <Avatar />
                </div>

                <div className="UltilsButtons">
                  <DarkMode />
                  <Logout />
                </div>
              </div>
              <div className="logo">
                <section className="MainTeam">
                  <Team />
                </section>
                <section className="MainRedes">
                  <SelectorRedes />
                </section>
              </div>
              <div className="monthPicker">
                <section className="mainCalendar">
                  <MonthYearCalendar />
                </section>
              </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;
