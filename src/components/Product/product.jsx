import React from 'react'
import dress from '../../assets/images/dress1.jpg'
import '../Product/product.css'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { id } = useParams();
  return (
    <div className='maindiv'>
        <h1 className='title'>Products</h1>
        <img src={dress} alt="Product" className='product' />
        <p className='productName'>Product name</p> <p className='price'>RS 1200</p>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Omnis delectus ipsa possimus exercitationem cumque 
             fugiat itaque eos repudiandae 
            unde dolorum, facilis aut voluptates, quod ea id dolor libero totam autem?</p>
        <button className='cart'>Add to cart</button>
        <button className='wishlist'>love</button>

    </div>
  )
}

export default Product