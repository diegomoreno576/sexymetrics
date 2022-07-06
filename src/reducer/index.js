import types from "../actions/types";

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_THEME:
      return {
        ...state,
        darkmode: action.payload,
      };
    case types.SET_LOADING:
      return {
        ...state,
        Loading: action.payload,
      };
    case types.SET_FBDATOS:
      return {
        ...state,
        FbDatos: action.payload,
      };
    case types.SET_TIMESTART:
      return {
        ...state,
        TimeStart: action.payload,
      };
    case types.SET_TIMEEND:
      return {
        ...state,
        TimeEnd: action.payload,
      };
    case types.SET_TIMEENDPAST:
      return {
        ...state,
        TimeStartPast: action.payload,
      };
    case types.SET_TIMESTARTPAST:
      return {
        ...state,
        TimeEndPast: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
