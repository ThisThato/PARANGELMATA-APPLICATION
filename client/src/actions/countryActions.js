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

    // var s = "Country Name";
    // var newData = [];
    // var year = 2018;
    // // console.log(data.length);

    // for (let k = 0; k < results.length; k++) {
    //   console.log(results[k]["Country Name"]);
    //   for (let i = 0; i < 60; i++) {
    //     console.log(year + " = " + results[k][year]);
    //     year--;
    //     if (year === 1959) {
    //       year = 2019;
    //     }
    //   }
    // }
    //  console.log(results[k]);
    //  for (let i = 0; i < results[i].length; i++) {
    //    if (results[k][year] !== undefined) {
    //      console.log(results[k][year]);
    //    }
    //  }
    //  newData.push(k, results[k]);
    // }

    // console.log(results.length);

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
