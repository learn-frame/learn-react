const actions = {
  fetchStargazers: (
    userName: string,
    repoName: string,
    params: GitHub.Params,
  ) => ({
    type: 'FETCH_STARGAZERS',
    payload: {
      userName,
      repoName,
      params,
    },
  }),
};

export default actions;
