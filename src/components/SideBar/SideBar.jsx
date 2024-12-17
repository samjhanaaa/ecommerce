import React, { useState } from "react";
import './sideBar.css'

const sideBar = ({ isOpen }) => {

    return (
        <>
            <div style={{ display: isOpen ? "block" : "none" }}>

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