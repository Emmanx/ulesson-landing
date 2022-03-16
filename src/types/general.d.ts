import { ThunkAction } from 'redux-thunk';
import { RootState } from 'reducers';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, undefined>;

export interface optionType {
  display: string;
  value: string | number;
}

export interface reduxResponse {
  status: string;
  message?: string;
  data?: any;
}

export interface ITheme {
  color: string;
  colorStack1: string;
  colorStack2: string;
  gradientColor: string;
}
