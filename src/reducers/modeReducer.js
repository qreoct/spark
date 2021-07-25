// Actions
const GET_MODE = 'GET_MDOE';
const SET_MODE_SUCCESS = 'SET_MODE_SUCCESS';

// Reducer
export const initialState = {
  mode: 'menu'
};

export default function modeReducer(state = initialState, action) {
  switch (action.type) {

  case GET_MODE:
    return { ...state } ;
  case SET_MODE_SUCCESS:
    return {mode: action.payload };
  default:
    return state;

  }
}

// Action Creators
export const getMode = () => ({
  type: GET_MODE,
});

export const setModeSuccess = (mode) => ({
  type: SET_MODE_SUCCESS,
  payload: mode,
});

// Thunks
export function fetchCurrentMode() {
  return (dispatch) => {
    dispatch(getMode());
  }
}

export function setCurrentMode(mode) {
  return (dispatch) => {
    dispatch(setModeSuccess(mode));
  };
}