import React, { useState } from "react";
import './sideBar.css';

const sideBar = ({ isOpen }) => {

    return (
        <>
            <div className={`sidebar ${isOpen ? "open" : ""}`}>

                <div>Home</div>
                <div>Cart</div>
                <div>Account</div>
                <div>Contact Us</div>
                <div>FAQs</div>
                <div>Type:Brand design</div>
                <div>Notification</div>
                <div>Wishist</div>


            </div>
        </>

    );
}

export default sideBar;