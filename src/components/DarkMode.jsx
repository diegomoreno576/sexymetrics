import React, { useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from '../context';
import { setTheme } from '../actions';

import '../assets/styles/components/Header.scss';

const Sidebar = () => {
  const [state, dispatch] = useContext(ThemeContext);

  const handleDarkMode = () => {
    dispatch(setTheme(!state.darkmode));
  };

  useEffect(() => {
    if (state.darkmode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [state.darkmode]);

  return (
    
    <div className='Header'>
      <input
        type='checkbox'
        id='checkbox'
        onChange={handleDarkMode}
        checked={state.darkmode}
      />
      <label className='Header__switch' htmlFor='checkbox'></label>

    </div>
  );
};

export default Sidebar;
