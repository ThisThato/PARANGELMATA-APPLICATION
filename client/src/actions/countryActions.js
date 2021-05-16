import axios from "axios";

import { COUNTRY_LIST_FAIL, COUNTRY_LIST_REQUEST, COUNTRY_LIST_SUCCESS } from "../constants/countryConstants";

export const ListCountries = () => async (dispatch) => {
  try {
    dispatch({ type: COUNTRY_LIST_REQUEST });

    const { data } = await axios.get(`https://anmlfarm.com/data/countrydata.json`);

    var results = [];

    for (var i in data) {
      results.push(data[i]);
    }

    dispatch({
      type: COUNTRY_LIST_SUCCESS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      type: COUNTRY_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
