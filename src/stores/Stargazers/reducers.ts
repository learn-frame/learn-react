import { Reducer } from 'redux'
import produce, { Draft } from 'immer'
import { StargazersActionTypes, StargazersState } from './types'

const initialState: StargazersState = {
  loading: false,
  users: [],
  errMsg: '',
}

const starReducers: Reducer<StargazersState> = produce(
  (draft: Draft<StargazersState>, action) => {
    switch (action.type) {
      case StargazersActionTypes.FETCH_REQUEST:
        draft.loading = true
        return

      case StargazersActionTypes.FETCH_SUCCESSED:
      case StargazersActionTypes.FETCH_FAILED:
        draft.loading = false
        draft.users = action.payload
        return
    }
  },
  initialState,
)

export default starReducers
