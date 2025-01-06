import React from 'react'
import '../Scrollbar/scrollbar.css';
import dress1 from '../../assets/images/dress1.jpg';
import dress2 from '../../assets/images/dress2.jpg';
import dress3 from '../../assets/images/dress3.jpg';
import dress4 from '../../assets/images/dress4.jpg';
import dress5 from '../../assets/images/dress5.jpg';
import dress6 from '../../assets/images/dress6.jpg';
import dress7 from '../../assets/images/dress7.jpg';
import dress8 from '../../assets/images/dress8.jpg';
import dress9 from '../../assets/images/dress9.jpg';
import dress10 from '../../assets/images/dress10.jpg';


const products = [
  { id: 1, name: "Product 1", image: dress1 },
  { id: 2, name: "Product 1", image: dress2 },
  { id: 3, name: "Product 1", image: dress3 },
  { id: 4, name: "Product 1", image: dress4 },
  { id: 5, name: "Product 1", image: dress5 },
  { id: 6, name: "Product 1", image: dress6 },
  { id: 7, name: "Product 1", image: dress7 },
  { id: 8, name: "Product 1", image: dress8 },
  { id: 9, name: "Product 1", image: dress9 },
  { id: 10, name: "Product 1", image: dress10 },
]


const scrollbar = () => {
  return (
    <>
    {products.map((product) =>
    <div className='productCard'>
      <img src="{product.image}" alt="Products" />
      <div>Product</div>
    </div>
    
  
  )}
    </>
  )
}

export default scrollbar;