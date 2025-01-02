import { useState } from 'react';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Hero from './pages/Home.jsx';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Hero />
    </>
  )
}

export default App;
