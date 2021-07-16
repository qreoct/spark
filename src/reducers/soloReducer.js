import Util from '../utils/utils';
import questionsService from '../services/questions';

// Actions
const CHECK_READY = 'CHECK_SOLO_READY';
const IS_READY = 'IS_READY';
const IS_UNREADY = 'IS_UNREADY';
const FETCH_SOLO_QUESTIONS_SUCCESS = 'FETCH_SOLO_QUESTIONS_SUCCESS';
const FETCH_SOLO_QUESTIONS_FAILURE = 'FETCH_SOLO_QUESTIONS_FAILURE';
const FETCH_JOURNEY = 'FETCH_JOURNEY';
const THROW_ERROR = 'THROW_ERROR';

// Reducer
export const initialState = {
  soloReady: true,
  loading: false,
  hasErrors: false,
  journey: [],
  questions: []
};

export default function soloReducer(state = initialState, action) {
  switch (action.type) {

  case CHECK_READY:
    return { ...state, loading: true };
  case IS_READY:
    return { ...state, soloReady: true, loading: false };
  case IS_UNREADY:
    return { ...state, soloReady: false, loading: false };
  case FETCH_SOLO_QUESTIONS_SUCCESS:
    return { ...state, loading: false, questions: action.payload };
  case FETCH_SOLO_QUESTIONS_FAILURE:
    return { ...state, loading: false, hasErrors: true };
  case FETCH_JOURNEY:
    return { ...state, journey: action.payload};
  case THROW_ERROR:
    return { ...state, hasErrors: true};
  default:
    return state;

  }
}

// Action Creators
export const checkSoloStatus = () => ({
  type: CHECK_READY
})

export const SoloStatusReady = () => ({
  type: IS_READY
})

export const SoloStatusUnready = () => ({
  type: IS_UNREADY
})

export const fetchSoloQuestionsSuccess = (questions) => ({
  type: FETCH_SOLO_QUESTIONS_SUCCESS,
  payload: questions
})

export const fetchSoloQuestionsFailure = () => ({
  type: FETCH_SOLO_QUESTIONS_FAILURE
})

export const fetchJourney = (journey) => ({
  type: FETCH_JOURNEY,
  payload: journey
})

export const throwError = () =>  ({
  type: THROW_ERROR
})

// Thunks
export function checkSoloReady() {
  return async (dispatch) => {
    dispatch(checkSoloStatus());
    try {
      const isReady = Util.checkSoloReady()
      if (isReady) {
        dispatch(SoloStatusReady());
      } else {
        dispatch(SoloStatusUnready());
      }
    } catch (error) {
      dispatch(throwError());
    }
  }
}

export function fetchSoloQuestions() {
  return async (dispatch) => {
    dispatch(checkSoloStatus());
    try {
      let res;
      if (!localStorage.getItem('solo_questions')) {
        res = await questionsService.getSoloQuestions();
        localStorage.setItem('solo_questions', JSON.stringify(res));
      } else {
        res = JSON.parse(localStorage.getItem('solo_questions'));
      }
      dispatch(fetchSoloQuestionsSuccess(res));
    } catch (error) {
      dispatch(fetchSoloQuestionsFailure());
    }
  }
}

export function writeNewSoloQuestions() {
  return async (dispatch) => {
    try {
      let res = await questionsService.getSoloQuestions();
      localStorage.setItem('solo_questions', JSON.stringify(res));
      dispatch(fetchSoloQuestionsSuccess(res));
    } catch (error) {
      dispatch(throwError());
    }
  }
}

export function fetchJourneyFromLocalStorage() {
  return (dispatch) => {
    dispatch(checkSoloStatus());
    try {
      let res = JSON.parse(localStorage.getItem('reflection')) || [];
      dispatch(fetchJourney(res));
    } catch (error) {
      dispatch(throwError())
    }
  }
}