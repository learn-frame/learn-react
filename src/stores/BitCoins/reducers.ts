import * as constants from './constants'

const initialState = {
  bitCoins: [],
  loading: false,
  errMsg: '',
}

const BitCoinsReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case constants.FETCH_REQUEST:
      return {
        ...state,
        loading: action.payload.loading,
      }
    case constants.FETCH_SUCCESSED:
      return {
        ...state,
        bitCoins: action.payload.bitCoins,
      }
    case constants.FETCH_FAILED:
      return {
        ...state,
        errMsg: action.payload.errMsg,
      }
    case constants.FETCH_FINISHED:
      return {
        ...state,
        loading: action.payload.loading,
      }
    default:
      return state
  }
}

export default BitCoinsReducers
