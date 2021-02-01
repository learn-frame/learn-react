import { action } from 'typesafe-actions'
import { StargazersActionTypes, User } from './types'

export const fetchStargazers = () => action(StargazersActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: User[]) =>
  action(StargazersActionTypes.FETCH_SUCCESSED, data)

export const fetchError = (message: string) =>
  action(StargazersActionTypes.FETCH_FAILED, message)
