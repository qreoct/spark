import * as actions from '../actions/questionsActions';

export const initialState = {
  questions: [],
  loading: false,
  hasErrors: false,
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {

  case actions.GET_QUESTION:
    return { ...state, loading: true };
  case actions.GET_QUESTION_SUCCESS:
    return {questions: action.payload, loading: false, hasErrors: false };
  case actions.GET_QUESTION_FAILURE:
    return {...state, loading: false, hasErrors: true };
  default:
    return state;

  }
}