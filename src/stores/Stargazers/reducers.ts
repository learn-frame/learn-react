const initialState = {
  data: [],
  err: '',
};

export default function StarReducers(state = initialState, action: any) {
  switch (action.type) {
    case 'FETCH_SUCCESSED':
      return {
        ...state,
        data: action.payload.data,
      };
    case 'FETCH_FAILED':
      return {
        ...state,
        err: action.payload.err,
      };
    default:
      return state;
  }
}
