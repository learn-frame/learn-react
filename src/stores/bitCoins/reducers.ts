import { Reducer } from 'redux'
import produce, { Draft } from 'immer'
import { BitCoinsActionTypes, BitCoinsState } from './types'

const initialState: BitCoinsState = {
  loading: false,
  bitCoins: [],
  errMsg: '',
}

const bitCoinsReducers: Reducer<BitCoinsState> = produce(
  (draft: Draft<BitCoinsState>, action) => {
    switch (action.type) {
      case BitCoinsActionTypes.FETCH_REQUEST:
        draft.loading = true
        return

      case BitCoinsActionTypes.FETCH_SUCCESSED:
      case BitCoinsActionTypes.FETCH_FAILED:
        draft.loading = false
        draft.bitCoins = Object.values(action.payload.bpi)
        return
    }
  },
  initialState,
)

export default bitCoinsReducers
