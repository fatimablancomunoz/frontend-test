import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

export const Item = ({
  id,
  model,
  brand,
  price,
  imgUrl

}) => {
  return (
    <div className='container__item'>
      <Link to={id} style={{ textDecoration: 'none' }} className='link-item'>
        <h3>{brand}</h3>
        <p>{model}</p>
        <p>{price} {price ? 'euros' : ''}</p>
        <img src={imgUrl} alt={model} />
      </Link>
    </div>
  )
}

export default Item
