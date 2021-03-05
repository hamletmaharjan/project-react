import { createStore } from 'redux';
// import authReducer from './reducers/authReducer';
import reducer from './reducers/index';


// let store = createStore(authReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
