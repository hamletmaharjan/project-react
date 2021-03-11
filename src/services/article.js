import * as http from "../utils/http";
import * as authService from "./auth";

export const createArticle = (formData) => {
  let userInfo = authService.getUserInfo();
  let url = 'users/' + userInfo.id + '/articles';
  return http.post(url, 
  {
    headers:{
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    },
    body: formData
  });
};

export const fetchArticles = () => {
  return http.get('/articles');
};

export const fetchArticle = (id) => {
  return http.get('/articles/' + id, 
  {
    headers:{
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    },
  });
};

export const updateArticle = (id, formData) => {
  let userInfo = authService.getUserInfo();
  let url = 'users/' + userInfo.id + '/articles/' + id;
  return http.put(url, 
  {
    headers:{
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    },
    body: formData
  });
};

export const deleteArticle = (id) => {
  let userInfo = authService.getUserInfo();
  let url = 'users/' + userInfo.id + '/articles/' + id;
  return http.remove(url, 
  {
    headers:{
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    },
  });
};

