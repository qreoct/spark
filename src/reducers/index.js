import {combineReducers} from "redux";

import picturesReducer from "./picturesReducer";

const rootReducer = combineReducers({
  pictures: picturesReducer,
});

export default rootReducer;