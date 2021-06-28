import {combineReducers} from 'redux';

import picturesReducer from './picturesReducer';
import questionsReducer from './questionsReducer';
import soloReducer from './soloReducer';

const rootReducer = combineReducers({
  pictures: picturesReducer,
  questions: questionsReducer,
  solo: soloReducer
});

export default rootReducer;