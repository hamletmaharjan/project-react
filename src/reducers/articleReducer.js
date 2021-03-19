
import * as articleAction from '../actions/articleAction';

const INITIAL_STATE = {
  articles: []
}

function articleReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case articleAction.ADD_ARTICLES:
      return { articles: action.payload};

    case articleAction.ADD_ARTICLE:
      return {
        articles: [...state.articles, action.payload]
      }

    default:
      return state;
  }
}

export default articleReducer;
