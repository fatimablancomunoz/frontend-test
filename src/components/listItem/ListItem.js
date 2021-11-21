import React, { useEffect, useState } from 'react'
import { getData } from '../../services/getData'
import Search from '../search/Search'
import './listItem.css'

function ListItem () {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData () {
      const listProduct = await getData()
      setData(listProduct)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className='wrapper--items'>
        <Search data={data} />
      </div>
    </div>
  )
}

export default ListItem
