export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const loginSession = () => dispatch =>
  dispatch({
    type: SESSION_LOGIN
  });

export const logoutSession = () => dispatch =>
  dispatch({
    type: SESSION_LOGOUT
  });