const actions = {
  fetchStargazers: (userName: string, repoName: string, params: any) => ({
    type: 'FETCH_STARGAZERS',
    payload: {
      userName,
      repoName,
      params,
    },
  }),
};

export default actions;
