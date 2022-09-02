import types from '../actions/types';

const setBlog_id = (payload) => ({
  type: types.SET_BLOG_ID,
  payload,
});
const setchangeLayout = (payload) => ({
  type: types.SET_CHANGELAYOUT,
  payload,
});
const setCurrentuser = (payload) => ({
  type: types.SET_CURRENTUSER,
  payload,
});

const setIslogin = (payload) => ({
  type: types.SET_LOGIN,
  payload,
});
const setLoginError = (payload) => ({
  type: types.SET_LOGIN_ERROR,
  payload,
});
const setTheme = (payload) => ({
  type: types.SET_THEME,
  payload,
});
const setLoading = (payload) => ({
  type: types.SET_LOADING,
  payload,
});
const setFbDatos = (payload) => ({
  type: types.SET_FBDATOS,
  payload,
});
const setTimeStart = (payload) => ({
  type: types.SET_TIMESTART,
  payload,
});
const setTimeEnd = (payload) => ({
  type: types.SET_TIMEEND,
  payload,
});
const setTimeStartPast = (payload) => ({
  type: types.SET_TIMESTARTPAST,
  payload,
});
const setTimeEndPast = (payload) => ({
  type: types.SET_TIMEENDPAST,
  payload,
});


export {setBlog_id,setchangeLayout, setCurrentuser, setIslogin, setLoginError, setTheme, setLoading, setFbDatos, setTimeStart, setTimeEnd, setTimeStartPast, setTimeEndPast};
