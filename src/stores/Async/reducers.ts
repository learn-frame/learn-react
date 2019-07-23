const initialState = {
  bitCoins: [],
  loading: false,
  errMsg: '',
};

export default function AsyncReducers(state = initialState, action: any) {
  switch (action.type) {
    case 'bitCoins/FETCH_REQUEST':
      return {
        ...state,
        loading: action.payload.loading,
      };
    case 'bitCoins/FETCH_SUCCESSED':
      return {
        ...state,
        bitCoins: action.payload.bitCoins,
      };
    case 'bitCoins/FETCH_FAILED':
      return {
        ...state,
        errMsg: action.payload.errMsg,
      };
    case 'bitCoins/FETCH_FINISHED':
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
}
