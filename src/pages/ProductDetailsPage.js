import React from 'react'
import ProductDescription from '../components/productDescription/ProductDescription'

const ProductDetailsPage = ({ setCount, setNameProduct }) => {
  return (
    <>
      <ProductDescription setCount={setCount} setNameProduct={setNameProduct} />
    </>
  )
}

export default ProductDetailsPage
