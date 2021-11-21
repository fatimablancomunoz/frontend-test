import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
import cart from '../../assets/images/white-cart.png'
import home from '../../assets/images/white-home.png'
import Cart from '../cart/Cart'

function Header ({ count, nameProduct }) {
  const host = useLocation()
  const breadCrumb = host.pathname === '/' ? '' : `/${nameProduct}`
  return (
    <div className='wrapper-header'>
      <div className='container-home'>
        <Link to='/' style={{ textDecoration: 'none' }} className='breadCrumb-text'> <img src={home} alt='home-icon' className='home-img' /></Link>
        <div className='breadCrumb'>
          <Link to='/' style={{ textDecoration: 'none' }} className='breadCrumb-text'>Home</Link><span className='breadCrumb-text'>{breadCrumb}</span>
        </div>
      </div>
      <div className='cart-container'>
        <img src={cart} alt='cart' className='cart-img' />
        <Cart count={count} />
      </div>

    </div>
  )
}

export default Header
