import types from "../actions/types";

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_CHANGELAYOUT:
      return {
        ...state,
        changeLayout: action.payload,
        Loading: false,
      };
    case types.SET_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
        Loading: false,
      };
      case types.SET_CURRENTUSER:
        return {
          ...state,
          currentuser: action.payload,
        };
      case types.SET_BLOG_ID:
        return {
          ...state,
          blog_id: action.payload,
        };
      case types.SET_LOGIN_ERROR:
        return {
          ...state,
          loginError: action.payload,
        };
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
        Loading: false,
      };
    case types.SET_TIMESTART:
      return {
        ...state,
        TimeStart: action.payload,
        Loading: false,
      };
    case types.SET_TIMEEND:
      return {
        ...state,
        TimeEnd: action.payload,
        Loading: false,
      };
    case types.SET_TIMEENDPAST:
      return {
        ...state,
        TimeStartPast: action.payload,
        Loading: false,
      };
    case types.SET_TIMESTARTPAST:
      return {
        ...state,
        TimeEndPast: action.payload,
        Loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
