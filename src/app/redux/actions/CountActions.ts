import { AppThunk } from '~/app/redux/types';

import { buildActionIncrementCountRoute } from '../reducers/CountReducer';

export const incrementCountAction = (): AppThunk => async dispatch => {
  dispatch(buildActionIncrementCountRoute());
};
