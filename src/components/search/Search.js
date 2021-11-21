import React, { useState } from 'react'
import './search.css'
import Item from '../item/Item'

function Search ({ data }) {
  const [searchField, setSearchField] = useState('')

  const filteredProducts = data?.filter(
    product => {
      return (
        product
          .model
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        product
          .brand
          .toLowerCase()
          .includes(searchField.toLowerCase())
      )
    }
  )

  const handleChange = e => {
    setSearchField(e.target.value)
  }

  return (
    <div className='search-products'>
      <div className='container_search-input'>
        <input
          className='search-input'
          type='search'
          value={searchField}
          placeholder='Buscar'
          onChange={handleChange}
        />
      </div>
      <div className='grid'>
        {
          filteredProducts?.map(product => (
            <Item key={product.id} {...product} />
          ))
  }
      </div>
    </div>
  )
}

export default Search
