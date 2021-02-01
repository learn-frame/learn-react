import { GET } from './axios'
import { AxiosResponse } from 'axios'
import { User, Params } from 'src/stores/Stargazers/types'

export function getStars(params: Params): Promise<AxiosResponse<User>> {
  const { userName, repoName, ext } = params
  return GET(`/repos/${userName}/${repoName}/stargazers`, ext)
}
