import { GET } from './axios'
import { AxiosResponse } from 'axios'
import { User, Params } from 'src/containers/AsyncRedux'

export function getStars(
  userName: string,
  projectName: string,
  params: Params,
): Promise<AxiosResponse<User>> {
  return GET(`/repos/${userName}/${projectName}/stargazers`, params)
}
