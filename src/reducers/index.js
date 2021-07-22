import {combineReducers} from 'redux';

import questionsReducer from './questionsReducer';
import soloReducer from './soloReducer';
import modeReducer from './modeReducer';

const rootReducer = combineReducers({
  questions: questionsReducer,
  solo: soloReducer,
  mode: modeReducer
});

export default rootReducer;