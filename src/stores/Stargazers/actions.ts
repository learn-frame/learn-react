import { Params, StargazersActionTypes } from './types'

const actions = {
  fetchStargazers: (params: Params) => ({
    type: StargazersActionTypes.FETCH_REQUEST,
    payload: params,
  }),
}

export default actions
