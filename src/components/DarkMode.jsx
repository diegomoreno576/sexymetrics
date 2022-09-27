import React,{ useEffect, useContext} from "react";
import useDarkMode from "../hooks/useDarkMode";
import '../assets/styles/components/Darkmode.css';
import { LayoutContext } from "../context/layoutContext";


const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [state, dispatch] = useContext(LayoutContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  if(state.changeLayout == true){
return(
  <div className="dark-mode-toggle">
  <button className="DakmodeButton" onClick={() => setDarkMode(!darkMode)}>
  <i class="fa-solid fa-circle-half-stroke"></i>
  </button>
</div>
)
 }
};

export default DarkMode;



