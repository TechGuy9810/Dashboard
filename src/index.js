import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter}  from "react-router-dom";
import App from './App';
import Topbar from './components/topbar';
import { DarkModeContextProvider } from './context/darkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DarkModeContextProvider>
    <Topbar/>
    <App />
    </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);