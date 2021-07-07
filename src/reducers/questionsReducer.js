import Util from '../utils/utils';
import questionsService from '../services/questions';

// Actions
const GET_QUESTION = 'GET_QUESTION';
const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';
const GET_QUESTION_FAILURE = 'GET_QUESTION_FAILURE';

// Reducer
export const initialState = {
  questions: [],
  loading: false,
  hasErrors: false,
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {

  case GET_QUESTION:
    return { ...state, loading: true };
  case GET_QUESTION_SUCCESS:
    return {questions: action.payload, loading: false, hasErrors: false };
  case GET_QUESTION_FAILURE:
    return {...state, loading: false, hasErrors: true };
  default:
    return state;

  }
}

// Action Creators
export const getQuestion = () => ({
  type: GET_QUESTION,
});

export const getQuestionSuccess = (questions) => ({
  type: GET_QUESTION_SUCCESS,
  payload: questions,
});

export const getQuestionFailure = () => ({
  type: GET_QUESTION_FAILURE,
});

// Thunks
export function fetchQuestion() {
  return async (dispatch) => {
    dispatch(getQuestion());

    try {
      const res = await questionsService.getAllQuestions();

      const data = res;
      // const data = res[Math.floor(Math.random() * res.length)];

      dispatch(getQuestionSuccess(data));
    } catch (error) {
      dispatch(getQuestionFailure());
    }
  };
}

export function fetchQuestionsFromCategory(category) {
  return async (dispatch) => {
    dispatch(getQuestion());

    try {
      let res;
      if (category === 'favourites') {
        res = await Util.readFavsFromStorage();
      } else {
        res = await questionsService.getAllQuestionsFromCategory(category);
      }
      
      const data = res;

      dispatch(getQuestionSuccess(data));
    } catch (error) {
      dispatch(getQuestionFailure());
    }
  }
}
