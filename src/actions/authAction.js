
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(auth) {
  return {
      type:LOGIN,
      payload: {
          id: auth.id,
          email: auth.email,
          token: auth.token,
          name: auth.name
      }
  };
}

export function logout() {
  return {
      type:LOGOUT
  };
}

