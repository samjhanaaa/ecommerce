import React, { useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Sidebar from "../SideBar/SideBar.jsx";
import Footer from "../Footer/footer.jsx";
import './Layout.css';

const Layout = ({ children }) => {
  const [onSideBarOpen, setonSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setonSideBarOpen(!onSideBarOpen);
  };

  return (
    <div className="layout-container">
      <NavBar toggleSideBar={toggleSideBar} />
      <div className="layout-body">
        <Sidebar isOpen={onSideBarOpen} />
        <main className={`page-content ${onSideBarOpen ? 'shifted' : ''}`}>
          <div className="page-card">
            {React.cloneElement(children, { onSideBarOpen })}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
