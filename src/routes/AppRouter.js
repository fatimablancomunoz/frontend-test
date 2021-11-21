import { Navigate, Route, Routes } from 'react-router-dom'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import ProductListPage from '../pages/ProductListPage'

export const AppRouter = ({ setCount, setNameProduct }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductListPage />} />
        <Route path='/:id' element={<ProductDetailsPage setCount={setCount} setNameProduct={setNameProduct} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
