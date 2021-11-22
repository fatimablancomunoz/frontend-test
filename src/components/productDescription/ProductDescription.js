import React, { useState, useEffect } from 'react'
import './productDescription.css'
import getDataById from '../../services/getDataById'
import { Link, useParams } from 'react-router-dom'
import { postItemCart } from '../../services/postIemCart'

export const ProductDescription = ({ setCount, setNameProduct }) => {
  const [data, setData] = useState({})
  const { id } = useParams()
  const [color, setColor] = useState('')
  const [memory, setMemory] = useState('')

  useEffect(() => {
    async function fetchData () {
      const response = await getDataById(id)
      setData(response)
      setColor(response.options.colors[0].code)
      setMemory(response.options.storages[0].code)
      setNameProduct(response.model)
    }
    fetchData()
  }, [])

  const product = {
    id,
    color,
    memory
  }

  const [arrayProducts, setArrayProducts] = useState([])

  const handlePostItem = (e) => {
    async function fetchData () {
      const response = await postItemCart(id, color, memory)
      return response
    }
    fetchData()
    setCount((oldCount) => oldCount + 1)
    setArrayProducts(arrayProducts.concat(product))
  }

  localStorage.setItem('product', JSON.stringify(arrayProducts))

  const handleChangeColor = (e) => {
    setColor(e.target.value)
  }

  const handleChangeMemory = (e) => {
    setMemory(e.target.value)
  }
  return (
    <div className='product-description'>
      <div className='wrapper'>
        <img src={data.imgUrl} alt={data.model} className='mobile-img' />
        <div className='wrapper__info'>
          <div className='container-description'>
            <span className='title description'>DESCRIPCIÓN:</span>
            <h3>{data.brand}</h3>
            <div className='container-title'><span>Modelo:</span><p>{data.model}</p></div>
            <div className='container-title'><span>Precio:</span><p>{data.price}</p></div>
            <div className='container-title'><span>CPU:</span><p>{data.cpu}</p></div>
            <div className='container-title'><span>RAM:</span><p>{data.ram}</p></div>
            <div className='container-title'><span>Sistema Operativo:</span><p>{data.os}</p></div>
            <div className='container-title'><span>Resolucion de pantalla:</span><p>{data.displayResolution}</p></div>
            <div className='container-title'><span>Batería:</span><p>{data.battery}</p></div>
            <div className='container-title'><span>Cámara Trasera:</span><p>{data.primaryCamera}</p></div>
            <div className='container-title'><span>Cámara Delantera:</span><p>{data.secondaryCmera}</p></div>
            <div className='container-title'><span>Dimensiones:</span><p>{data.dimentions}</p></div>
            <div className='container-title'><span>Peso:</span><p>{data.weight}</p></div>
          </div>
          <div className='container-actions'>
            <span className='title'>ACCIONES:</span>
            <div className='container-dropdown'>
              <label>Seleccione un color:</label>
              <select name='colors' id='colors' value={color} onChange={(e) => handleChangeColor(e)}>
                {data.options?.colors?.map((color, index) => (
                  <option key={index} value={color?.code}>{color?.name}</option>
                ))}
              </select>
            </div>
            <div className='container-dropdown'>
              <label>Seleccione capacidad de memoria:</label>
              <select name='internalMemory' id='internalMemory' value={memory} onChange={(e) => handleChangeMemory(e)}>
                {data.options?.storages?.map((storage, index) => (
                  <option key={index} value={storage?.code}>{storage?.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='container__buttons'>
        <button onClick={handlePostItem} className=' button button__add'>
          Añadir al carrito
        </button>
        <button className='button button__link-home'><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>Volver</Link></button>
      </div>
    </div>
  )
}

export default ProductDescription
