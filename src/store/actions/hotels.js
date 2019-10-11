import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setHotels = hotels => {
  return {
    type: actionTypes.SET_HOTELS,
    hotels: hotels
  };
};
export const fetchHotelFailed = () => {
  return {
    type: actionTypes.FETCH_HOTEL_FAILED
  };
};
export const initHotels = () => {
  return dispatch => {
    axios
      .get("https://hotelbooking-c3cc6.firebaseio.com/hotels.json")
      .then(response => {
        console.log(response.data);
        dispatch(setHotels(response.data));
      })
      .catch(error => {
        dispatch(fetchHotelFailed());
        console.log("error", error);
      });
  };
};
