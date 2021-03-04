import * as http from "../utils/http";

export const register = (userInfo) => {
  return http.post("auth/signup", { body: userInfo });
};

export const login = (userInfo) => {
  return http.post("auth/login", { body: userInfo });
};