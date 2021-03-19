export const ADD_ARTICLES = 'ADD_ARTICLES';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';


export function addArticles(articles) {
  return {
    type: ADD_ARTICLES,
    payload: articles
  }
}


export function addArticle(article) {
  return {
    type: ADD_ARTICLE,
    payload: article
  }
}


export function updateArticle(id, article) {
  return {
    type: UPDATE_ARTICLE,
    payload: {
      id: id,
      article: article
    }
  }
}

export function removeArticle(id) {
  return {
    type: REMOVE_ARTICLE,
    payload: id
  }
}
