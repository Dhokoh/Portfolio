import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import GlobalContainer from './pages/GlobalContainer';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< GlobalContainer />}>
          <Route index element={<Home />}></Route>
          <Route path='/aboutme' element={< AboutMe/>}></Route>
          <Route path='/portfolio' element={< Portfolio/>}></Route>
          <Route path='/contact' element={< Contact/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
