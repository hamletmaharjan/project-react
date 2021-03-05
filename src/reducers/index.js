import { combineReducers } from 'redux';

import authReducer from "./authReducer";
import articleReducer from "./articleReducer";

const reducer = combineReducers({authReducer, articleReducer});

export default reducer;
