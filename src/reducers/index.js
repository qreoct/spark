import {combineReducers} from 'redux';

import picturesReducer from './picturesReducer';
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({
  pictures: picturesReducer,
  questions: questionsReducer
});

export default rootReducer;