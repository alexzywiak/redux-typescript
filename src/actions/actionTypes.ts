
export interface IActionPayloads {
  INCREMENT: {},
}

export function actionCreator<K extends keyof IActionPayloads>(type: K) {
  return (payload: IActionPayloads[K]) => ({ type, payload });
}

type ActionHandler<StateType, K extends keyof IActionPayloads> = ((state: StateType, payload: IActionPayloads[K]) => StateType);

export function createHandler<StateType, K extends keyof IActionPayloads>(type: K, fn: ActionHandler<StateType, K>) {
  return fn;
}