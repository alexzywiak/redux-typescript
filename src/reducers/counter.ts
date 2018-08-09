import { createHandler, IActionPayloads } from '../actions/actionTypes';

interface IStateType {
  readonly count: number,
}

const initialState: IStateType = {
  count: 0,
};

const incrementCount = createHandler('INCREMENT', (state: IStateType) => {
  return { ...state, count: state.count + 1};
});

export default function(state: IStateType, { payload, type }: { payload: any, type: keyof IActionPayloads }): IStateType {
  if (!state) {
    return initialState;
  }

  switch (type) {
    case 'INCREMENT': return incrementCount(state, payload);
    default: return state;
  }
}