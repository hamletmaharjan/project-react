import * as http from "../utils/http";
import * as authService from "./auth";

export const createArticle = (formData) => {
    let userInfo = JSON.parse(localStorage.getItem('user'));
    let url = 'users/' + userInfo.id + '/articles';
    return http.post(url, 
    {
        headers:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
            // 'Authorization': authService.getAccessToken()
        },
        body: formData
    });
};

export const fetchArticles = () => {
    return http.get('/articles', 
    {
        headers:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
            // 'Authorization': authService.getAccessToken()
        },
    });
};

export const fetchArticle = (id) => {
    return http.get('/articles/' + id, 
    {
        headers:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
            // 'Authorization': authService.getAccessToken()
        },
    });
};

export const updateArticle = (id, formData) => {
    let userInfo = JSON.parse(localStorage.getItem('user'));
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
    let userInfo = JSON.parse(localStorage.getItem('user'));
    let url = 'users/' + userInfo.id + '/articles/' + id;
    return http.remove(url, 
    {
        headers:{
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json'
        },
    });
};

// export const login = (userInfo) => {
//   return http.post("auth/login", { body: userInfo });
// };