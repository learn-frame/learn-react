import { Params, StargazersActionTypes } from './types'

const actions = {
  fetchStargazers: (params: Params) => ({
    type: StargazersActionTypes.FETCH_STARGAZERS,
    payload: params,
  }),
}

export default actions
