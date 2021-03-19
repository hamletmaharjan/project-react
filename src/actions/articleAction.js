export const ADD_ARTICLES = 'ADD_ARTICLES';
export const ADD_ARTICLE = 'ADD_ARTICLE';


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
