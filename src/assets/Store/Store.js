const GET_ALL_COUNTRIES = "get-all";
const GET_COUNTRY = "get-country";

export const initState = {
  countries: [],
  country: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
};

// Action Creator
export const get_All_AC = (data) => ({
  type: GET_ALL_COUNTRIES,
  payload: data,
});

export const get_Country_AC = (data) => ({ type: GET_COUNTRY, payload: data });
