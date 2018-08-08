const initialState = {
  count: 0,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1};
    default:
      return state
  }
}