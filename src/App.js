import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import GlobalContainer from './pages/GlobalContainer';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< GlobalContainer />}>
          <Route index element={< Home/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
