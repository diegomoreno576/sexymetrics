import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './context';
import { UserContextProvider } from './context/userContext';
import { LayoutContextProvider } from './context/layoutContext';
import './assets/styles/index.css';
import actionCable from 'actioncable';
import { APP_CABLE_URL } from './constants';


const CableApp = {};
CableApp.cable = actionCable.createConsumer(APP_CABLE_URL);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
     <ThemeContextProvider>
       <LayoutContextProvider>
       <App cableApp={CableApp}/>
      </LayoutContextProvider>
    </ThemeContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
