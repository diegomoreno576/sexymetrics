import React,{ useEffect} from "react";
import useDarkMode from "../hooks/useDarkMode";

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
  <button onClick={() => setDarkMode(!darkMode)}>
    <span>🌓</span>
  </button>
</div>
)
};

export default DarkMode;



