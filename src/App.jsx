import { useState } from 'react';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import Hero from './pages/Home.jsx';

function App() {
  const [onSideBarOpen, setonSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setonSideBarOpen(!onSideBarOpen);
  };
  
  return (
    <>
      <NavBar toggleSideBar={toggleSideBar}/>
      <Hero onSideBarOpen={onSideBarOpen}/>
    </>
  )
}

export default App;
