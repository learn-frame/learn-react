import { GET } from './axios'
import { AxiosResponse } from 'axios'
import { BitCoin } from 'src/stores/BitCoins/types'

export function getBitCoin(): Promise<AxiosResponse<BitCoin[]>> {
  return GET('https://api.coindesk.com/v1/bpi/currentprice.json', null)
}
