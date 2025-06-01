
import '../Product/product.css'
import { useParams } from 'react-router-dom'
import products from '../../assets/product.jsx' 

const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id,10));

  if (!product) {
    return (
      <div className='maindiv'>
        <h1 className='title'>Product Not Found</h1>
        <p>The product you’re looking for does not exist.</p>
      </div>
    );
  }
  
  return (
    <div className='maindiv'>
      <h1 className='title'>Product Details</h1>
      <img src={product.image} alt={product.name} className='product' />
      <p className='productName'>{product.name}</p>
      <p className='price'>RS {product.price}</p>
      <p className='description'>{product.description}</p>
      <button className='cart'>Add to cart</button>
      <button className='wishlist'>Love</button>

    </div>
  )
}

export default Product