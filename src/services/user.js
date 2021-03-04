import * as http from "../utils/http";

export const register = (userInfo) => {
  http.post("auth/register", { body: userInfo });
};

export const login = (userInfo) => {
  return http.post("auth/login", { body: userInfo });
};