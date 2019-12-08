import * as actionTypes from 'actions';

const initialState = {
  listings: []
};


const listingsReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.SESSION_LOGIN: {
      return {
        ...initialState
      };
    }

    default: {
      return state;
    }
  }

};


export default listingsReducer;