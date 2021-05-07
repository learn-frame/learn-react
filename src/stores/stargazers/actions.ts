import { action } from 'typesafe-actions'
import { StargazersActionTypes, User, Params } from './types'

export const fetchStargazers = (params: Params) =>
  action(StargazersActionTypes.FETCH_REQUEST, params)

export const fetchSuccess = (data: User[]) =>
  action(StargazersActionTypes.FETCH_SUCCESSED, data)

export const fetchError = (message: string) =>
  action(StargazersActionTypes.FETCH_FAILED, message)
