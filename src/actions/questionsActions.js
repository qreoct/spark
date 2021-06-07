import questionsService from '../services/questions';

export const GET_QUESTION = 'GET_QUESTION';
export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';
export const GET_QUESTION_FAILURE = 'GET_QUESTION_FAILURE';

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
      const res = await questionsService.getAllQuestionsFromCategory(category);

      const data = res;

      dispatch(getQuestionSuccess(data));
    } catch (error) {
      dispatch(getQuestionFailure());
    }
  }
}