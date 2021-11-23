import './App.css'
import { AppRouter } from './routes/AppRouter'
import React, { useState } from 'react'
import Header from './components/header/Header'

function App () {
  const products = JSON.parse(localStorage.getItem('product')) || []
  const date = Date.now()
  const timestamp = parseInt(localStorage.getItem('timestamp'), 10)

  if ((date - timestamp) > 3600000) {
    localStorage.clear()
  }

  const [count, setCount] = useState(products?.length || 0)
  const [nameProduct, setNameProduct] = useState('Product')
  return (
    <>
      <Header count={count} nameProduct={nameProduct} />
      <AppRouter setCount={setCount} setNameProduct={setNameProduct} />
    </>
  )
}

export default App
