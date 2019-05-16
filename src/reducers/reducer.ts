import { CouterType } from '../actions/couter';

export default (state: any, action: any) => {
  const { couterCaption, type } = action;

  switch (type) {
    case CouterType.INCREMENT:
      return { ...state, [couterCaption]: state[couterCaption] + 1 };
    case CouterType.DECREMENT:
      return { ...state, [couterCaption]: state[couterCaption] - 1 };
    default:
      return state;
  }
};
