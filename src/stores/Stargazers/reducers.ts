import { Reducer } from 'redux'
import { StargazersActionTypes, StargazersState } from './types'

const initialState: StargazersState = {
  loading: false,
  users: [],
  errMsg: '',
}

const starReducers: Reducer<StargazersState> = (
  state = initialState,
  action,
) => {
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
        users: action.payload,
      }
    case StargazersActionTypes.FETCH_FAILED:
      return {
        ...state,
        loading: false,
        errMsg: action.payload,
      }
    default:
      return state
  }
}

export default starReducers
