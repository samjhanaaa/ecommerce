import { useState } from 'react';
import React from 'react';
import './App.css';
import Hero from './pages/Home.jsx';
import Layout from './components/Layout/Layout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/Product/Product.jsx';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path='/' element={<Hero/>} />
      <Route path='/product/:id' element={<Product />} />
      </Route>
    </Routes> 
    </BrowserRouter>

    </>
  )
}

export default App;
