import React, { useState } from 'react';
import Sale from '../assets/images/Sale.jpg';
import '../pages/home.css';
import Scrollbar from '../components/Scrollbar/scrollbar.jsx';
import SideBar from '../components/SideBar/SideBar.jsx';

const Home = ({onSideBarOpen}) => {
  return (
    <div className={`home-container ${onSideBarOpen ? 'shifted' : ''}`}>
      <SideBar isOpen={onSideBarOpen} />
      <div className="content">
        <div className="bannerDiv">
          <img src={Sale} alt="Hero" className="banner" />
        </div>
        <div className="bestSeller">
          <h2>Best Seller</h2>
          <div className="bestSellerProducts">
            <Scrollbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
