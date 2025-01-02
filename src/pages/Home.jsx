import React from 'react'
import Sale from '../assets/images/Sale.jpg';
import '../pages/home.css';


const Home = () => {
    return (
        <div className='homepage'>
        <img src={Sale} alt="Hero" className='banner' />
        <img src={poster} alt="Hero" className='banner' />
        </div>
    )
}

export default Home;