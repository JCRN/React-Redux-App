import { FETCH_DOG_START, FETCH_DOG_SUCCESS, FETCH_DOG_FAIL } from '../actions'

const initialState = {
  url: 'https://random.dog/woof.json',
  image: '',
  isFetching: false,
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_START:
      console.log('fetch dog started')
      return { ...state, isFetching: true, error: '' }
    case FETCH_DOG_SUCCESS:
      console.log('fetch dog SUCCESS')
      return { ...state, isFetching: false, image: action.payload }
    case FETCH_DOG_FAIL:
      console.log('FETCH_dog_FAIL', action.payload)
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default reducer
