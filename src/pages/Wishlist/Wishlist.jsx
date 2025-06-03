import React from 'react'
import products from '../../assets/product.jsx'
import '../Wishlist/Wishlist.css'

const Wishlist = () => {
  return (
    <>
    <div className='main-list'>
      {products.map(product => (
        <div key={product.id} className='wishlist-item'>
          <div>{product.name}</div>
          <div><img src={product.image} alt={product.name} /></div>
          <div>Delete</div>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
    </>

  )
}

export default Wishlist