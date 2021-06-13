import { action } from 'typesafe-actions'
import { BitCoinsActionTypes, BitCoin } from './types'

export const fetchBitCoins = () => action(BitCoinsActionTypes.FETCH_REQUEST)

export const fetchSuccess = (data: BitCoin[]) =>
  action(BitCoinsActionTypes.FETCH_SUCCESSED, data)

export const fetchError = (message: string) =>
  action(BitCoinsActionTypes.FETCH_FAILED, message)
