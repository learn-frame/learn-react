const initialState = {
  users: [],
  errMsg: '',
}

// 常量一定要保证独立性！！！
// 否则在 combineReducer 的时候会相互干扰
// 草泥马 折腾了老子几乎一天
// 草
export default function StarReducers(state = initialState, action: any) {
  switch (action.type) {
    case 'stars/FETCH_SUCCESSED':
      return {
        ...state,
        users: action.payload.users,
      }
    case 'stars/FETCH_FAILED':
      return {
        ...state,
        errMsg: action.payload.errMsg,
      }
    default:
      return state
  }
}
