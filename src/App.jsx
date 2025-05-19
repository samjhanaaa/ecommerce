import { useState } from 'react';
import React from 'react';
import './App.css';
import Hero from './pages/Home.jsx';
import Layout from './components/Layout/Layout.jsx'

function App() {
  
  return (
    <>
      <Layout>
      <Hero />
     </Layout>
    </>
  )
}

export default App;
