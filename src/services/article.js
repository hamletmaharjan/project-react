import * as http from "../utils/http";

export const createArticle = (formData) => {
  return http.post('/articles', 
  {
    body: formData
  });
};

export const fetchArticles = async() => {
  const {data} = await http.get('/articles');
  return data;
};

export const fetchArticle = (id) => {
  return http.get('/articles/' + id);
};

export const updateArticle = (id, formData) => {
  return http.put('/articles/' + id, 
  {
    body: formData
  });
};

export const deleteArticle = (id) => {
  return http.remove('/articles/' + id);
};

