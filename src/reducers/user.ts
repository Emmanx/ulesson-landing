import * as actionTypes from 'actions/user/types';

interface Action {
  type: string;
  payload: any;
}

interface IInitialState {
  loading: boolean;
}

const initialState: IInitialState = {
  loading: false,
};

const userReducers = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.USER_INIT: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default userReducers;
