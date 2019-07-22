import { GET } from './axios';
import { AxiosResponse } from 'axios';

export function getStars(
  userName: string,
  projectName: string,
  params: GitHub.Params,
): Promise<AxiosResponse<GitHub.User>> {
  return GET(`/repos/${userName}/${projectName}/stargazers`, params);
}
