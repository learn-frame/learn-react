
const initialState = {
  data: [],
  loading: false,
};

export default function AsyncReducers(state = initialState, action: any = {}) {
  switch (action.type) {
    case 'FETCH_SUCCESSED':
      return {
        ...state,
        // loading: true,
        data: action.payload,
      };
    case 'FETCH_FAILED':
      return {
        ...state,
        loading: true,
        data: [],
      };
    default:
      return state;
  }
}
