import axios from "axios";
import { COUNTRY_LIST_FAIL, COUNTRY_LIST_REQUEST, COUNTRY_LIST_SUCCESS } from "../constants/countryConstants";

// export const FetchCountriesRequest = () => {
//   return {
//     type: COUNTRY_LIST_REQUEST,
//   };
// };

// export const FetchCountriesSuccess = (countries) => {
//   return {
//     type: COUNTRY_LIST_SUCCESS,
//     payload: countries,
//   };
// };

// export const FetchCountriesFailure = (error) => {
//   return {
//     type: COUNTRY_LIST_FAIL,
//     payload: error,
//   };
// };

export const ListCountries = () => async (dispatch) => {
  try {
    dispatch({ type: COUNTRY_LIST_REQUEST });

    const { data } = await axios.get(`https://anmlfarm.com/data/countrydata.json`);

    dispatch({
      type: COUNTRY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COUNTRY_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
