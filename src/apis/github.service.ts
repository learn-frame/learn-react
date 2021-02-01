import { GET } from './axios'
import { AxiosResponse } from 'axios'
import { Params, Response } from 'src/stores/stargazers/types'

export function getStars(params: Params): Promise<AxiosResponse<Response>> {
  const { userName, repoName, ext } = params
  return GET(`/repos/${userName}/${repoName}/stargazers`, ext)
}
