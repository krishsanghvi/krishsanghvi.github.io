import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Blog from './components/Blog';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
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
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Home' element={<Homepage/>}/>
      <Route path='/Experience' element={<Experience/>} />
      <Route path='/Resume' element={<Resume/>} />
      <Route path='/Blog' element={<Blog/>} />
    </Routes>
  <Footer/>
  </Router>
 
  </>    
);
