const initialState = {
  users: [],
  errMsg: '',
};

export default function StarReducers(state = initialState, action: any) {
  switch (action.type) {
    case 'stars/FETCH_SUCCESSED':
      return {
        ...state,
        users: action.payload.users,
      };
    case 'stars/FETCH_FAILED':
      return {
        ...state,
        errMsg: action.payload.errMsg,
      };
    default:
      return state;
  }
}
