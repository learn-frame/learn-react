export const CouterType = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

export const increment = (counterCaption: any) => ({
  type: CouterType.INCREMENT,
  counterCaption,
});

export const decrement = (counterCaption: any) => ({
  type: CouterType.DECREMENT,
  counterCaption,
});
