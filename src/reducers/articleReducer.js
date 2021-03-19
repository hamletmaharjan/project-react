
import * as articleAction from '../actions/articleAction';

const INITIAL_STATE = {
  articles: []
}

function articleReducer(state = INITIAL_STATE, action) {
  let myArray = [];
  switch(action.type) {
    case articleAction.ADD_ARTICLES:
      return { articles: action.payload};

    case articleAction.ADD_ARTICLE:
      return {
        articles: [...state.articles, action.payload]
      }

    case articleAction.UPDATE_ARTICLE:
      myArray = [...state.articles];
      for (var i=0; i<myArray.length; i++){
        if(myArray[i]["id"] === parseInt(action.payload.id)){
          myArray[i] = action.payload.article
        }
      }
      return {
          articles: [...myArray]
      }

    default:
      return state;
  }
}

export default articleReducer;
