const initialState = {
  bitCoins: [],
  loading: false,
  errMsg: '',
}

const BitCoinReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_BITCOIN_REQUEST':
      return {
        ...state,
        loading: action.payload.loading,
      }
    case 'FETCH_BITCOIN_SUCCESSED':
      return {
        ...state,
        bitCoins: action.payload.bitCoins,
      }
    case 'FETCH_BITCOIN_FAILED':
      return {
        ...state,
        errMsg: action.payload.errMsg,
      }
    case 'FETCH_BITCOIN_FINISHED':
      return {
        ...state,
        loading: action.payload.loading,
      }
    default:
      return state
  }
}

export default BitCoinReducers
