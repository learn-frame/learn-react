import { StargazersActionTypes, StargazersState } from './types'

const initialState: StargazersState = {
  loading: false,
  users: [],
  errMsg: '',
}

export default function StarReducers(state = initialState, action: any) {
  switch (action.type) {
    case StargazersActionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case StargazersActionTypes.FETCH_SUCCESSED:
      return {
        ...state,
        loading: false,
        users: action.payload.users,
      }
    case StargazersActionTypes.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        errMsg: action.payload.errMsg,
      }
    default:
      return state
  }
}
