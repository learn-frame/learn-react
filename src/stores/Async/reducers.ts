const initialState = {
  data: [],
  loading: false,
  err: '',
};

export default function AsyncReducers(state = initialState, action: any) {
  switch (action.type) {
    case 'FETCH_STARTED':
      return {
        ...state,
        loading: action.payload.loading,
      };
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
    case 'FETCH_FINISHED':
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
}
