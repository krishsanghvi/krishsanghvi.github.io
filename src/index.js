import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import { CssBaseline } from '@material-ui/core';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  <Router>
      <Navbar/>
      <Homepage/>
      <Footer/>
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
  </>
);
