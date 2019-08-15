import axios from 'axios'

export const FETCH_DOG_START = 'FETCH_DOG_START'
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const FETCH_DOG_FAIL = 'FETCH_DOG_FAIL'

function start() {
  return {
    type: FETCH_DOG_START
  }
}

function http() {
  return axios.get('https://random.dog/woof.json')
}

function success(data) {
  return {
    type: FETCH_DOG_SUCCESS,
    payload: data.url
  }
}

function fail(error) {
  return {
    type: fail,
    payload: error
  }
}

const getRandomDog = () => dispatch => {
  dispatch(start())
  return http()
    .then(res => {
      console.log('response', res)
      return dispatch(success(res.data))
    })
    .catch(err => {
      console.log(err)
      dispatch(fail(err))
    })
}
export default getRandomDog
