import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export type AppThunk = ThunkAction<void, AppState, unknown, AppAction>;
export type AppDispatch = ThunkDispatch<AppState, unknown, AppAction>;
