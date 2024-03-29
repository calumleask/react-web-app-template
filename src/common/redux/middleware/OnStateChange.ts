import { Dispatch, MiddlewareAPI } from 'redux';

export type OnStateChangeHandler = (
  prevState: AppState,
  nextState: AppState,
  action: AppAction,
  dispatch: Dispatch,
) => void;

const onStateChange =
  (handler: OnStateChangeHandler) =>
  (store: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: AppAction): AppAction => {
    const prevState = store.getState();
    const result = next(action);
    const nextState = store.getState();
    handler(prevState, nextState, action, store.dispatch);
    return result;
  };

export default onStateChange;
