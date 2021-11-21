import axios from 'axios'

export const getDataById = async (id) => {
  const url = `https://front-test-api.herokuapp.com/api/product/${id}`

  try {
    const response = await axios.get(url)
    const isResponseOk = response.data.length !== 0

    if (!isResponseOk) {
      console.log('error')
      return
    }
    return response.data
  } catch (error) {
  }
}

export default getDataById
