import { NavLink } from "react-router-dom";
import { FaBars, FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin, BsCalendarRange } from "react-icons/bs";
import { SiGooglemybusiness, SiGoogleads} from "react-icons/si";
import { MdCampaign} from "react-icons/md";
import {  AiOutlineGlobal } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import DarkMode from "./DarkMode";
import '../assets/styles/components/SideBar.css';


const routes = [
  {
    path: "/",
    name: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    path: "/Instagram",
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
  // {
  //   path: "/analytics",
  //   name: "Analytics",
  //   icon: <BiAnalyse />,
  // },
  // {
  //   path: "/file-manager",
  //   name: "File Manager",
  //   icon: <AiTwotoneFileExclamation />,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  // {
  //   path: "/order",
  //   name: "Order",
  //   icon: <BsCartCheck />,
  // },
  // {
  //   path: "/settings",
  //   name: "Settings",
  //   icon: <BiCog />,
  //   exact: true,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  // {
  //   path: "/saved",
  //   name: "Saved",
  //   icon: <AiFillHeart />,
  // },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "180px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">

        <motion.div
          animate={{
            width: isOpen ? "240px" : "60px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
          <div className="sidebarName">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                 Notecopies
                </motion.h1>
              )}
            </AnimatePresence>
            </div>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <DarkMode/>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
            
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
