import axios from 'axios'

export const postItemCart = async (id, colorCode, storageCode) => {
  const url = 'https://front-test-api.herokuapp.com/api/cart'
  const body = {
    id,
    colorCode,
    storageCode
  }

  axios({
    method: 'post',
    url: url,
    data: body
  })

    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default postItemCart
