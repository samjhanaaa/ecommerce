import React from 'react'
import '../Cart/Cart.css'
import products from '../../assets/product.jsx'


const Cart = () => {
  
  return (
    <>
    
    <div className='main-cart'>
      {products.map(product => (
        <div key={product.id} className='cart-item'>
          <div>{product.name}</div>
          <div><img src={product.image} alt={product.name} /></div>
          <div>Delete</div>
          <div>+</div>
          <div>Number</div>
          <div>-</div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Cart