import { constants } from './actions'

const initialState = {
  users: [],
  errMsg: '',
}

// 常量一定要保证独立性！！！
// 否则在 combineReducer 的时候会相互干扰
// 草泥马 折腾老子几乎一天
// 草
export default function StarReducers(state = initialState, action: any) {
  // action 一开始本身是请求参数那一坨 (Req params)
  // 经过 saga *%$不#可%描%述&@ 后，就变成了返回的数据了 (Res data)
  switch (action.type) {
    case constants.FETCH_REQUEST:
      return {
        ...state,
        loading: action.payload.loading,
      }
    // 成功时返回请求的数据
    case constants.FETCH_SUCCESSED:
      return {
        ...state,
        users: action.payload.users,
      }
    // 失败时返回错误信息
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
