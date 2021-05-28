import * as actions from '../actions/picturesActions';

export const initialState = {
  pictures: {},
  loading: false,
  hasErrors: false,
};

export default function picturesReducer(state = initialState, action) {
  switch (action.type) {

  case actions.GET_PICTURE:
    return { ...state, loading: true };
  case actions.GET_PICTURE_SUCCESS:
    return {pictures: action.payload, loading: false, hasErrors: false };
  case actions.GET_PICTURE_FAILURE:
    return {...state, loading: false, hasErrors: true };
  default:
    return state;

  }
}