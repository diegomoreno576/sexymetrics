import React,{ useEffect} from "react";
import useDarkMode from "../hooks/useDarkMode";
import { IoIosFlash} from "react-icons/io";
import '../assets/styles/components/Darkmode.css';


const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

return(
  <div className="dark-mode-toggle">
  <button className="DakmodeButton" onClick={() => setDarkMode(!darkMode)}>
 <IoIosFlash/>
  </button>
</div>
)
};

export default DarkMode;



