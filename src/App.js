import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./components/HomePage";
import Hotels from './components/Hotels';
import Hotel from './components/Hotel';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={HomePage}/>  
        <Route exact path='/hotels:name' element={Hotels}/>  
        <Route exact path='/hotel:id' element={Hotel}/>  
      </Routes>      
    </BrowserRouter>
  );
};

export default App;