export const ADD_AUTH = 'ADD_AUTH';
export const UPDATE_AUTH = 'UPDATE_AUTH';
export const REMOVE_AUTH = 'REMOVE_AUTH';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export function addAuth(auth) {
  return {
      type: ADD_AUTH,
      payload: {
          id: auth.id,
          email: auth.email,
          token: auth.token,
          name: auth.name
      }
  }
}

export function updateAuth(auth) {
  return {
      type: UPDATE_AUTH,
      payload: {
          id: auth.id,
          email: auth.email,
          token: auth.token,
          name: auth.name,
      }
  }
}

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

