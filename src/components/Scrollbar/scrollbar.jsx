import React, { useState } from 'react'
import '../Scrollbar/scrollbar.css';
import products from '../../assets/product.jsx'
import {Link} from 'react-router-dom';

const scrollbar = () => {


const [index, setIndex] = useState(0);
const itemsInPage = 5;

const handlePrev = () => {
    setIndex((prev) => Math.max(prev - itemsInPage, 0));
  };

 const handleNext = () => {
    setIndex((prev) => Math.min(prev + itemsInPage, products.length - itemsInPage));
  };  

const visibleProducts = products.slice(index, index + itemsInPage);

  return (
    <>
<div className="scrollbarContainer">
    <div className="productContainer">
  <button onClick={handlePrev} disabled={index === 0}>prev</button>
    
    {visibleProducts.map((product) =>

    <div className='productCard' key={product.id}>
      <Link to={`/product/${product.id}`}>
      <img src={product.image} alt="Products" className='productImage'/>
      <div>{product.name}</div>
      <button>Add to Cart</button>
      <button>Love</button>
      </Link>
    </div>
    
  )}
  <button onClick={handleNext} disabled={index + itemsInPage >= products.length}>next</button>
  </div>
  </div>
</>


  )
}

export default scrollbar;