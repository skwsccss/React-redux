import * as actionTypes from 'actions';

import axios from 'utils/axios';

const initialState = {
  loggedIn: false,
  user: {
    first_name: '',
    last_name: '',
    email: '',
    avatar: '/images/avatars/avatar_11.png',
    bio: '',
    displayName: '',
    emailVerified: false,
    photoURL: '',
    uid: '',
    role: 'USER' // ['GUEST', 'USER', 'ADMIN']
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN: {
      console.log("USER LOGIN - Testing");
        
       const url = '/users/' + action.payload.uid;
       var userProfile = {};
       var config = {
          headers: {
              'Authorization': action.payload.refreshToken
          }};

        // accountService.login(889);

        axios.get(url,config)
          .then((response) => {
              userProfile = response.data;
              console.log(userProfile);
            },
            (error) => {
              console.log(error);
            }
          );
      
      return {
        ...state,
        loggedIn: true,
        user: {
          email: action.payload.email,
          uid:  action.payload.uid,
          displayName: action.payload.displayName,
          emailVerified: action.payload.emailVerified,
          firstName: userProfile.firstname,
          lastName: userProfile.lastname,
          brokerLicense: userProfile.license,
          lastLogin: userProfile.lastLogin,    
          role: 'ADMIN'
        }
      };
    }

    case actionTypes.AUTH_LOGOUT: {
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

export default authReducer;