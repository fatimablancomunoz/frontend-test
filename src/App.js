import './App.css'
import { AppRouter } from './routes/AppRouter'
import React, { useState } from 'react'
import Header from './components/header/Header'

function App () {
  const productsArr = JSON.parse(localStorage.getItem('product')) || []

  if (localStorage.length > 0) {
    setTimeout(() => {
      localStorage.clear()
      console.log('clear')
    }, 3600000)
  }

  const [count, setCount] = useState(productsArr?.length || 0)
  const [nameProduct, setNameProduct] = useState('Product')
  return (
    <>
      <Header count={count} nameProduct={nameProduct} />
      <AppRouter setCount={setCount} setNameProduct={setNameProduct} />
    </>
  )
}

export default App
