export interface BitCoin {
  code: string
  symbol: string
  rate: string
  description: string
  rate_float: number
}

export enum BitCoinsActionTypes {
  FETCH_BITCOINS = '@@bitCoins/FETCH_STARGAZERS',
  FETCH_REQUEST = '@@bitCoins/FETCH_REQUEST',
  FETCH_SUCCESSED = '@@bitCoins/FETCH_SUCCESSED',
  FETCH_FAILED = '@@bitCoins/FETCH_FAILED',
}

export interface BitCoinsState {
  readonly loading: boolean
  readonly bitCoins: BitCoin[]
  readonly errMsg?: string
}

export interface Response {
  data: BitCoin[]
}
