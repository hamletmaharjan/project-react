import * as http from "../utils/http";
import * as authService from "./auth";

export const createArticle = (formData) => {
  let userInfo = authService.getUserInfo();
  let url = 'users/' + userInfo.id + '/articles';
  return http.post(url, 
  {
    body: formData
  });
};

export const fetchArticles = () => {
  return http.get('/articles');
};

export const fetchArticle = (id) => {
  return http.get('/articles/' + id);
};

export const updateArticle = (id, formData) => {
  let userInfo = authService.getUserInfo();
  let url = 'users/' + userInfo.id + '/articles/' + id;
  return http.put(url, 
  {
    body: formData
  });
};

export const deleteArticle = (id) => {
  let userInfo = authService.getUserInfo();
  let url = 'users/' + userInfo.id + '/articles/' + id;
  return http.remove(url);
};

