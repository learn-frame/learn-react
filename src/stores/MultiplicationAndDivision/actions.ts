const MULTIPLICATION = 'MULTIPLICATION';
const DIVISION = 'DIVISION';

const actions = {
  multiplicate: () => ({
    type: MULTIPLICATION,
    payload: { name: 'yancey', age: 18 },
  }),
  divide: () => ({ type: DIVISION }),
};

export default actions;
