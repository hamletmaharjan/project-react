
import * as articleActions from '../actions/articleAction';

const INITIAL_STATE = {
    articles: []
}

function articleReducer(state = INITIAL_STATE, action) {
    let myArray = [];
    switch(action.type) {
        case articleActions.ADD_ARTICLES:
          return {
            articles:action.payload
          }
          break;
        case articleActions.ADD_ARTICLE:
          return {
            articles: [...state.articles, action.payload]
          }

        // case articleActions.UPDATE_ARTICLE:
        //   myArray = [...state.articles];
        //   for (let i=0; i<myArray.length; i++){
        //     if(myArray[i]["id"] == action.payload.id){
        //       myArray[i].title = action.payload.title,
        //       myArray[i].descrtiption = action.payload.descrtiption,
        //       myArray[i].image = action.payload.image
        //     }
        //   }
        //   return {
        //     articles: [...myArray]
        //   }
        
        case articleActions.REMOVE_ARTICLE:
          myArray = [];
          for (var i=0; i<state.articles.length; i++){
              if(state.articles[i]["id"] != action.payload.id){
                  myArray.push(state.todos[i]);
              }
          }
          return { articles: myArray };

        default:
          return state;
    }
    
}

export default articleReducer;
