import { Params } from 'src/containers/AsyncRedux'

export const constants = {
  FETCH_STARGAZERS: 'FETCH_STARGAZERS',
  FETCH_REQUEST: '@@stars/FETCH_REQUEST',
  FETCH_SUCCESSED: '@@stars/FETCH_SUCCESSED',
  FETCH_FAILED: '@@stars/FETCH_FAILED',
  FETCH_FINISHED: '@@stars/FETCH_FINISHED',
}

const actions = {
  // 定义行为: 请求点赞人列表
  requestStargazers: (userName: string, repoName: string, params: Params) => ({
    type: constants.FETCH_STARGAZERS,
    // 传参放到 payload 里
    payload: {
      userName,
      repoName,
      params,
    },
  }),
}

export default actions
