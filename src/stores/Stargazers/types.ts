export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Params {
  userName: string
  repoName: string
  ext: {
    page: number
  }
}

export enum StargazersActionTypes {
  FETCH_STARGAZERS = '@@stargazers/FETCH_STARGAZERS',
  FETCH_REQUEST = '@@stargazers/FETCH_REQUEST',
  FETCH_SUCCESSED = '@@stargazers/FETCH_SUCCESSED',
  FETCH_FAILED = '@@stargazers/FETCH_FAILED',
}

export interface StargazersState {
  readonly loading: boolean
  readonly users: User[]
  readonly errMsg?: string
}

export interface Response {
  data: User[]
}
