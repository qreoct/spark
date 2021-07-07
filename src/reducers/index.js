import {combineReducers} from 'redux';

import questionsReducer from './questionsReducer';
import soloReducer from './soloReducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  solo: soloReducer
});

export default rootReducer;