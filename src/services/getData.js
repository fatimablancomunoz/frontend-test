import axios from 'axios'

export const getData = async () => {
  const url = 'https://front-test-api.herokuapp.com/api/product'

  try {
    const response = await axios.get(url)
    const isResponseOk = response.data.length !== 0

    if (!isResponseOk) {
      console.log('error')
      return
    }
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default getData
