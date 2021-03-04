import * as http from "../utils/http";
import * as authService from "./auth";

export const register = (userInfo) => {
  return http.post("auth/signup", { body: userInfo });
};

export const login = (userInfo) => {
  return http.post("auth/login", { body: userInfo });
};

export const validateToken = () => {
  let user = authService.getUserInfo();
  return http.get('/users/' + user.id, 
  {
    headers:{
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    },
  });
};
