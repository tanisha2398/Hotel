import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  hotels: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_HOTELS:
      return updateObject(state, {
        hotels: action.hotels,
        error: false
      });

    case actionTypes.FETCH_HOTEL_FAILED:
      return updateObject(state, {
        error: true
      });
    default:
      return state;
  }
};
export default reducer;
