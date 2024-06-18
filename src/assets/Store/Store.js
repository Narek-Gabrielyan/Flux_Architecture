const GET_ALL_COUNTRIES = "get-all";
const GET_COUNTRY = "get-country";
const GET_INPUT_VALUE = "get-value";
const CLICK_ENTER = "enter-click";
const DEL_CLICK = "del-click"

export const initState = {
  countries: [],
  country: [],
  text: ""
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
    case GET_INPUT_VALUE:
      return {
        ...state,
        text: action.payload,
      };
    case CLICK_ENTER:
      return {
        ...state,
        text: "",
      };
    case DEL_CLICK:
      return {
        ...state,
        country: [],
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

export const get_Inp_Val_AC = (text) => ({
  type: GET_INPUT_VALUE,
  payload: text,
});

export const Ent_Inp_AC = () => ({
  type: CLICK_ENTER,
});

export const DEL_CLICK_AC = () => ({
  type: DEL_CLICK,
});