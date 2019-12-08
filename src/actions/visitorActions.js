export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_REGISTER = 'AUTH_REGISTER';

export const login = (payload) => dispatch =>
  dispatch({
    type: AUTH_LOGIN,
    payload: payload
  });

export const logout = () => dispatch =>
  dispatch({
    type: AUTH_LOGOUT
  });

export const register = () => dispatch =>
  dispatch({
    type: AUTH_REGISTER
  });