export const UPDATE_LISTINGS = 'UPDATE_LISTINGS';
export const ADD_LISTINGS= 'ADD_LISTINGS';

export const updateListings = () => dispatch =>
  dispatch({
    type: UPDATE_LISTINGS
  });

export const addListings = () => dispatch =>
  dispatch({
    type: ADD_LISTINGS
  });