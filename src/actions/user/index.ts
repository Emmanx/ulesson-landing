import * as actionTypes from './types';
import { ThunkResult } from 'types/general';
import { RootState } from 'reducers';

export const setLoading =
  (): ThunkResult<any> =>
  (dispatch: Function, getState: () => RootState): any => {
    dispatch({ type: actionTypes.USER_INIT })
};
