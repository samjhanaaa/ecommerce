import React, { useState } from "react";
import '../NavBar/NavBar.css'
import Bhesbhusa from '../../assets/images/Bhesbhusa.png';
import { TfiAlignJustify } from "react-icons/tfi";
import Sidebar from '../SideBar/SideBar.jsx';


const NavBar = () => {
    const [onSideBarOpen, setonSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setonSideBarOpen(!onSideBarOpen);
    }

    return (
        <>
            <Sidebar isOpen={onSideBarOpen} />
            <div className="navBar">
                <div className="icon" onClick={toggleSideBar}>
                    <TfiAlignJustify size={30} />
                </div>
                <div>
                    <img src={Bhesbhusa} alt="logo" className="logo" />
                </div>
                <div >
                    <input type="text" placeholder="Search" className="searchButton" />
                </div>
            </div>
        </>
    );
}

export default NavBar;

