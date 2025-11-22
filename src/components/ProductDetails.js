import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContextProvider';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  return (
    <div>
      <ProductItem product={products[id - 1]} showDetails={true} />
    </div>
  )
}

export default ProductDetails