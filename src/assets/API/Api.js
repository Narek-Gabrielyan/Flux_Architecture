// Libraries
import axios from "axios";
//
import { get_All_AC, get_Country_AC } from "../Store/Store";

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export const countriesAPI = {
  get_All_Countries(dispatch) {
    instance.get("all").then((res) => dispatch(get_All_AC(res.data)));
  },

  get_Country(dispatch, name) {
    instance
      .get(`name/${name}`)
      .then((res) => dispatch(get_Country_AC(res.data)));
  },
};
