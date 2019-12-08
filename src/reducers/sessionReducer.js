import * as actionTypes from 'actions';

const initialState = {
  loggedIn: true,
  refreshToken: '',
  user: {
    first_name: 'Ketan123',
    last_name: 'Patel',
    email: 'kpatel@stringle.net',
    avatar: '/images/avatars/avatar_11.png',
    bio: 'Founder & CTO',
    role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
  }
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_LOGIN: {
      return {
        ...state,
        loggedIn: true,
        refreshToken: action.payload.refreshToken
      };
    }

    case actionTypes.SESSION_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          role: 'GUEST'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
